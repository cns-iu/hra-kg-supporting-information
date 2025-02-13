# Queries to compare different RDF-based knowledge graphs and Property Graph (PG)-based KGs

## Number of Nodes
**SPARQL:**
```sparql
SELECT (COUNT(DISTINCT ?s) as ?nodes) WHERE { { ?s ?p1 [] } UNION { [] ?p2 ?s } FILTER (isIRI(?s)) }
```

**Cypher:**
```gql
MATCH (n) RETURN count(n) AS nodes;
```

## Number of Node Types
**SPARQL:**
```sparql
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
SELECT (COUNT(DISTINCT ?s) as ?node_types) WHERE { { ?s rdf:type|rdfs:subClassOf [] } UNION { [] rdf:type|rdfs:subClassOf ?s } }
```

**Cypher:**
```gql
MATCH (n) RETURN count(DISTINCT labels(n)) AS node_types;
```

## Number of Nodes
**SPARQL:**
```sparql
SELECT (COUNT(DISTINCT ?s) as ?nodes) WHERE { { ?s ?p1 [] } UNION { [] ?p2 ?s } FILTER (isIRI(?s)) }
```

**Cypher:**
```gql
MATCH (n) RETURN count(n) AS nodes;
```

## Number of Edges
**SPARQL (only counts edges between IRIs, which is closer to PG edges):**
```sparql
SELECT (COUNT(*) as ?edges) WHERE { ?s ?p ?o . FILTER(isIRI(?s) && isIRI(?o)) }
```

**Cypher:**
```gql
MATCH ()-[r]->() RETURN count(r) AS edges;
```

## Number of Edge Types
**SPARQL (only counts edges between IRIs, which is closer to PG edges):**
```sparql
SELECT (COUNT(DISTINCT ?p) as ?edge_types) WHERE { ?s ?p ?o . FILTER(isIRI(?s) && isIRI(?o)) }
```

**Cypher:**
```gql 
MATCH ()-[r]->() RETURN count(DISTINCT type(r)) AS edge_types;
```

## Size in MBs

**SPARQL**
RDF KGs were exported to n-quads format and the file measured to determine size in MBs.

**Cypher:**
Neo4J KGs were exported to JSON Lines format via the `apoc.export.json.all` function in Neo4J. A [JSON-LD context](src/neo4j-json-export-context.jsonld) was applied to each JSON object to convert it to RDF in n-quads format via the `ndjsonld canonize` command and measured in the same way as RDF KGs.
