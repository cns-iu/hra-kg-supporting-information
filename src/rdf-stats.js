import formats, { RdfXmlParser } from '@rdfjs/formats-common';
import crypto from 'node:crypto';

function hashString(str) {
  return crypto.createHash('md5').update(str).digest('base64');
}

// sckan has some invalid URIs. We'll ignore those.
formats.parsers.set('application/rdf+xml', new RdfXmlParser({validateUri: false}))

async function rdfStats(inputStream, format) {
  const nodes = new Set();
  let edges = 0;
  const edgeTypes = new Set();

  const parser = formats.parsers.import(format, inputStream, { iriValidationStrategy: 'none', validateUri: false });
  for await (const { subject, predicate, object } of parser) {
    let subjectHash, objectHash;
    if (subject.termType === 'NamedNode') {
      subjectHash = hashString(subject.value);
      nodes.add(subjectHash);
    }
    if (object.termType === 'NamedNode') {
      objectHash = hashString(object.value);
      nodes.add(objectHash);
    }
    if (subjectHash && objectHash) {
      edges++;
      edgeTypes.add(hashString(predicate.value));
    }
  }
  return {
    nodes: nodes.size,
    edges: edges,
    edgeTypes: edgeTypes.size,
  };
}

async function main() {
  const inputStream = process.stdin;
  const format = process.argv[2];

  const { nodes, edges, edgeTypes } = await rdfStats(inputStream, format);
  console.log('Nodes:', nodes);
  console.log('Edges:', edges);
  console.log('Edge Types:', edgeTypes);
}
main();
