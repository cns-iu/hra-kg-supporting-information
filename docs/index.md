---
layout: default
title: Supporting Information for "Construction, Publication, and Usage of the Human Reference Atlas Knowledge Graph for 5-Star Linked Open Data"
---

# Supporting Information for “Human Reference Atlas 5-star Linked Open Data: Construction, Publication, and Usage”

Andreas Bueckle<sup>1*</sup>, Bruce W. Herr II<sup>1*</sup>, Josef Hardi<sup>2</sup>, Ellen M Quardokus<sup>1</sup>, Mark Musen<sup>2</sup>, Katy Börner<sup>1\*</sup>

<sup>1</sup> Department of Intelligent Systems Engineering, Luddy School of Informatics, Computing, and Engineering, Indiana University, Bloomington, IN, USA\
<sup>2</sup> Stanford Center for Biomedical Informatics Research, Stanford University, Stanford, California, USA

\* Corresponding authors

# Links

- Link to preprint: TBA
- Link to GitHub: [https://github.com/cns-iu/hra-kg-supporting-information](https://github.com/cns-iu/hra-kg-supporting-information)
- Link to LOD server: [https://lod.humanatlas.io](https://lod.humanatlas.io)
- Link to HRA Dashboard with HRA KG data: [https://apps.humanatlas.io/dashboard/data](https://apps.humanatlas.io/dashboard/data)

# Basic Usage

We illustrate three types of accessing the HRA KG in these two Jupyter Notebooks:

## A notebook to query the HRA Knowledge Graph (KG). This notebook covers:

- Example 1: Get an HRA Digital Object (DO) as a JSON file
- Example 2: Run a SPARQL query via `grlc` with `requests`
- Example 3: Run your own SPARQL query with `requests`
  Link: [https://github.com/cns-iu/hra-kg-supporting-information/blob/main/notebooks/hra-kg-queries.ipynb](https://github.com/cns-iu/hra-kg-supporting-information/blob/main/notebooks/hra-kg-queries.ipynb)

## A notebook to access an ASCT+B table for the kidney

A more barebones example of accessing the first row of an ASCT+B table in JSON is documented here: [https://github.com/x-atlas-consortia/hra-notebooks/blob/main/notebooks/hra-asctb-tables.ipynb](https://github.com/x-atlas-consortia/hra-notebooks/blob/main/notebooks/hra-asctb-tables.ipynb)

# Example Queries

We provide standard queries to the SPARQL endpoint the HRA API, which points to the HRA KG with data from the HRA v2.1 as of November 27, 2024, available as LOD. In this the table below, we report counts for HRA DOs. Note that they might be different from the paper because the queries results were retrieved on November 27, 2024 and the paper reports data available on December 2, 2024. To explore other queries, to read documentation, and to run the query yourself for up-to-date results, please visit [https://apps.humanatlas.io/api/grlc/hra.html](https://apps.humanatlas.io/api/grlc/hra.html) for HRA queries and [https://apps.humanatlas.io/api/grlc/hra-pop.html](https://apps.humanatlas.io/api/grlc/hra-pop.html) for HRApop queries.

| Description                                         | Count                                                                                                                                                                 | Query |     |     |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | --- | --- |
| _HRA_                                               |                                                                                                                                                                       |       |     |     |
| Count of 3D Anatomical Structures                   | label,count<br>3D anatomical structures (no united and no reference organ AS),1224<br>3D anatomical structures (no united),1289<br>3D reference organs (no united),65 | Query |     |     |
| Unique AS, CT, and B in HRA                         | asctb_type,count<br>AS,4659<br>BM,2024<br>CT,1307                                                                                                                     | Query |     |     |
| Unique AS, CT, and B across all HRA versions        | asctb_type,count<br>AS,5705<br>BM,2521<br>CT,2262                                                                                                                     | Query |     |     |
| Digital objects counts in the latest HRA release    | type,count<br>2d-ftu,23<br>asct-b,38<br>ctann,3<br>omap,21<br>ref-organ,68<br>vascular-geometry,1                                                                     | Query |     |     |
| High-level stats about the latest HRA release       | label,count<br># Nodes,242064<br># Edges,1910139<br># Edge Types,248                                                                                                  | Query |     |     |
| _HRApop_                                            |                                                                                                                                                                       |       |     |     |
| Number of Anatomical Structures with Cell Summaries | 60                                                                                                                                                                    | Query |     |     |

# Resources
In this section, we provide link to existing documentation of KG-relevant terminology and concepts:
- A good overview of RDF Graph Data Model is provided by Stardog: [https://docs.stardog.com/tutorials/rdf-graph-data-model](https://docs.stardog.com/tutorials/rdf-graph-data-model)
Wouter Beek (co-founder of [Triply](https://triply.cc/en-US), see also [https://wouterbeek.github.io/](https://wouterbeek.github.io/)) recorded this detailed series of tutorials on SPARQL: [https://www.youtube.com/playlist?list=PLaa8QYrMzXNnzY-4YVM5507iZuESWVcnU](https://www.youtube.com/playlist?list=PLaa8QYrMzXNnzY-4YVM5507iZuESWVcnU )
- A video about the HRA KG by co-author Mark Musen is here.



# Mermaid Diagrams

Entity relationship (ER) diagrams in the Mermaid (MMD) format ([https://mermaid.js.org/](https://mermaid.js.org/)) for the hra-do-processor explain the relationships between entities within HRA DOs. Exemplarily shown below are embedded MMD diagrams for the _2d-ftu_, _asct-b_, and _ref-organ_ DO types (as high-resolution SVGs). All MMD diagrams are available at [https://github.com/hubmapconsortium/hra-do-processor/blob/main/er-diagrams.md/](https://github.com/hubmapconsortium/hra-do-processor/blob/main/er-diagrams.md/).

_2d-ftu_ (click [here](https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-1.svg) to download SVG):\
<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-1.svg?sanitize=true">

_asct-b_ (click [here](https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-2.svg) to download SVG):\
<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-2.svg?sanitize=true">

_ref-organ_ (click [herehttps://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-9.svg) to download SVG):\
<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-9.svg?sanitize=true">
