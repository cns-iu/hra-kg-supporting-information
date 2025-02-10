# Queries to compare different RDF-based knowledge graphs and Property Graph (PG)-based KGs

## Number of Nodes
**SPARQL:**\
```SELECT (COUNT(DISTINCT ?s) as ?nodes) WHERE { { ?s ?p1 [] } UNION { [] ?p2 ?s FILTER (isIRI(?s)) } }```

**Cypher:**\
```MATCH (n) RETURN count(n) AS nodes;```

## Number of Edges
**SPARQL (only counts edges between IRIs, which is closer to PG edges):**\
```SELECT (COUNT(*) as ?edges) WHERE { ?s ?p ?o . FILTER(isIRI(?o)) }```

**Cypher:**\
```MATCH ()-[r]->() RETURN count(r) AS edges;```

## Number of Edge Types
**SPARQL (only counts edges between IRIs, which is closer to PG edges):**\
```SELECT (COUNT(DISTINCT ?p) as ?edge_types) WHERE { ?s ?p ?o . FILTER(isIRI(?o)) }```

**Cypher:**\
```MATCH ()-[r]->() RETURN count(DISTINCT type(r)) AS edge_types;```
