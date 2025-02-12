#!/bin/bash

ENDPOINT=$1
ENDPOINT="http://localhost:8080/blazegraph/namespace/kb/sparql"

sparql1() {
  LABEL=$1
  RES=$(curl -s -H "Accept: text/csv" --data-urlencode "query=${2}" $ENDPOINT -o - | tail -1)
  echo $LABEL $RES
}

NODES_QUERY="SELECT (COUNT(DISTINCT ?s) as ?nodes) WHERE { { ?s ?p1 [] } UNION { [] ?p2 ?s } FILTER (isIRI(?s)) }"
EDGES_QUERY="SELECT (COUNT(*) as ?edges) WHERE { ?s ?p ?o . FILTER(isIRI(?s) && isIRI(?o)) }"
EDGE_TYPES_QUERY="SELECT (COUNT(DISTINCT ?p) as ?edge_types) WHERE { ?s ?p ?o . FILTER(isIRI(?s) && isIRI(?o)) }"

sparql1 "Nodes:" "$NODES_QUERY"
sparql1 "Edges:" "$EDGES_QUERY"
sparql1 "Edge Types:" "$EDGE_TYPES_QUERY"
