MATCH (n) RETURN count(n) AS nodes;
MATCH (n) RETURN count(DISTINCT labels(n)) AS node_types;
MATCH ()-[r]->() RETURN count(r) AS edges;
MATCH ()-[r]->() RETURN count(DISTINCT type(r)) AS edge_types;
