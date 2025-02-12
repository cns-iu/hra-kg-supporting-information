import formats, { RdfXmlParser } from '@rdfjs/formats-common';
import crypto from 'node:crypto';

function hashString(str) {
  return crypto.createHash('md5').update(str).digest('base64');
}

// SPARC (SCKAN) has some invalid URIs. We'll ignore those.
formats.parsers.set('application/rdf+xml', new RdfXmlParser({ validateUri: false }));

const TYPE_PREDICATES = new Set([
  'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', // rdf:type
  'http://www.w3.org/2000/01/rdf-schema#subClassOf', // rdfs:subClassOf
]);

const BASE_CLASSES = new Set([
  'http://www.w3.org/2002/07/owl#Class', // owl:Class
  'http://www.w3.org/2000/01/rdf-schema#Class', // rdfs:Class
]);

async function rdfStats(inputStream, format, prefix = undefined) {
  const nodes = new Set();
  const nodeTypes = new Set();
  let edges = 0;
  const edgeTypes = new Set();

  const parser = formats.parsers.import(format, inputStream, { iriValidationStrategy: 'none', validateUri: false });
  for await (const { subject, predicate, object } of parser) {
    let subjectHash, objectHash, nodeMatched = false;
    if (subject.termType === 'NamedNode') {
      subjectHash = hashString(subject.value);
      if (!prefix || subject.value.startsWith(prefix)) {
        nodes.add(subjectHash);
        nodeMatched = true;
      }
    }
    if (object.termType === 'NamedNode') {
      objectHash = hashString(object.value);
      if (!prefix || object.value.startsWith(prefix)) {
        nodes.add(objectHash);
        nodeMatched = true;
      }
    }
    if (subjectHash && objectHash && nodeMatched) {
      edges++;
      edgeTypes.add(hashString(predicate.value));

      // Check if a predicate is assigning a type
      if (TYPE_PREDICATES.has(predicate.value)) {
        // If so, both sides are "Classes"
        nodeTypes.add(subjectHash);
        nodeTypes.add(objectHash);
      }
    }
  }
  return {
    nodes: nodes.size,
    node_types: nodeTypes.size,
    edges: edges,
    edge_types: edgeTypes.size,
  };
}

async function main() {
  const inputStream = process.stdin;
  const format = process.argv[2];
  const prefix = process.argv.length > 3 ? process.argv[3] : undefined;

  const results = await rdfStats(inputStream, format, prefix);
  console.log(JSON.stringify(results));
}
main();
