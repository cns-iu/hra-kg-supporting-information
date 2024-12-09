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
- Link to HRA Dashboard with HRA KG data as of HRA v2.1: [https://apps.humanatlas.io/dashboard/data](https://apps.humanatlas.io/dashboard/data)

# Basic Usage

## Notebook to access an ASCT+B table for the kidney

This notebook exemplarily retrieves the most recent versions of all ASCT+B tables in the latest hra collection in the JSON format, which is one of the most widely used data exchange formats, and that can be read by almost every modern programming language. It then selects the table for the kidney. It then inspects the kidney table by outputting the number of rows, and finally prints a small selection of AS, CT, gene Bs, and scientific references for a particular AS-CT-B record. 

The notebook is available here: [https://github.com/x-atlas-consortia/hra-notebooks/blob/main/notebooks/hra-asctb-tables.ipynb](https://github.com/x-atlas-consortia/hra-notebooks/blob/main/notebooks/hra-asctb-tables.ipynb)

## Notebook to query the HRA Knowledge Graph (KG) 

In a slightly more advanced example, we show how you can query the HRA KG in three ways: (1) getting processed HRA DOs in JSON, see also [above](#notebook-to-access-an-asctb-table-for-the-kidney), (2) running a SPARQL query via [grlc.io](https://grlc.io/), and (3) running a SPARQL query you wrote on your own. The notebook presents this across three sections, see below. To illustrate this, we get the latest ASCT+B table for the kidney, then print the first five records (Example 1). Next, we run a SPARQL query to get a CSV file of all AS-CT-B records for the lymph node (Example 2). Then, we run a SPARQL query to get all triples in the HRA KG and print the first five. Finally, the notebook shows how you can compile a table of unique CTs in the cortex of kidney first declaratively (via SPARQL), and then imperatively (via JSON and  Python):

- Example 1: Get an HRA Digital Object (DO) as a JSON file
- Example 2: Run a SPARQL query via ‘grlc’ with ‘requests’
- Example 3: Run a SPARQL query with ‘requests’
- Demonstration on how to use the HRA KG either declaratively (via SPARQL) or imperatively (via JSON)

Link: [https://github.com/cns-iu/hra-kg-supporting-information/blob/main/notebooks/hra-kg-queries.ipynb](https://github.com/cns-iu/hra-kg-supporting-information/blob/main/notebooks/hra-kg-queries.ipynb)

# Example Queries

Frequently used queries run via the SPARQL endpoint of the HRA API are listed in Table 1. All queries use data from the HRA v2.1 as of November 27, 2024. The table reports counts for HRA DOs retrieved on November 27, 2024; note that the paper reports data available on December 2, 2024. To explore other queries, for additional documentation, and to get up-to-date results, visit [https://apps.humanatlas.io/api/grlc/hra.html](https://apps.humanatlas.io/api/grlc/hra.html) for HRA queries and [https://apps.humanatlas.io/api/grlc/hra-pop.html](https://apps.humanatlas.io/api/grlc/hra-pop.html) for HRApop queries.

**Table 1**. Common queries run during HRA usage. 

| Description                                         	| Count                                                                                                                                                                 	| Query 	|  
|-----------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------	|
| *HRA*                                                 	|                                                                                                                                                                       	|       	|  
| Count of 3D Anatomical Structures                   	| label,count<br>3D anatomical structures (no united and no reference organ AS),1224<br>3D anatomical structures (no united),1289<br>3D reference organs (no united),65 	| [Query](https://apps.humanatlas.io/api/grlc/hra.html#get-/as-3d-counts) 	| 
| Unique AS, CT, and B in HRA                         	| asctb_type,count<br>AS,4659<br>BM,2024<br>CT,1307                                                                                                                     	| [Query](https://apps.humanatlas.io/api/grlc/hra.html#get-/as-ct-b-counts) 	|   
| Unique AS, CT, and B across all HRA versions        	| asctb_type,count<br>AS,5705<br>BM,2521<br>CT,2262                                                                                                                     	| [Query](https://apps.humanatlas.io/api/grlc/hra.html#get-/as-ct-b-counts-all-versions) 	| 
| Digital objects counts in the latest HRA release    	| type,count<br>2d-ftu,23<br>asct-b,38<br>ctann,3<br>omap,21<br>ref-organ,68<br>vascular-geometry,1                                                                     	| [Query](https://apps.humanatlas.io/api/grlc/hra.html#get-/digital-object-count) 	| 
| High-level stats about the latest HRA release       	| label,count<br># Nodes,242064<br># Edges,1910139<br># Edge Types,248                                                                                                  	| [Query](https://apps.humanatlas.io/api/grlc/hra.html#get-/high-level-stats) 	| 
| *HRApop*                                              	|                                                                                                                                                                       	|       	|
| Number of Anatomical Structures with Cell Summaries 	| 60                                                                                                                                                                    	| [Query](https://apps.humanatlas.io/api/grlc/hra-pop.html#get-/as-count) 	|

# Resources
Additional links to documentation of KG-relevant terminology and concepts:

- A good overview of RDF Graph Data Model is provided by Stardog: [https://docs.stardog.com/tutorials/rdf-graph-data-model](https://docs.stardog.com/tutorials/rdf-graph-data-model)
- Wouter Beek (co-founder of [Triply](https://triply.cc/en-US), see also [https://wouterbeek.github.io/](https://wouterbeek.github.io/)) recorded this detailed series of tutorials on SPARQL: [https://www.youtube.com/playlist?list=PLaa8QYrMzXNnzY-4YVM5507iZuESWVcnU](https://www.youtube.com/playlist?list=PLaa8QYrMzXNnzY-4YVM5507iZuESWVcnU )
- A video about ontologies by co-author Mark Musen is [here](https://youtu.be/PrLY3Gzj6w4?si=ToMyiT1ZJLufbxT7).

# Mermaid Diagrams

Entity relationship (ER) diagrams explain the relationships between entities within HRA DOs. ER diagrams for the hra-do-processor can be explored visually using the Mermaid (MMD) format ([https://mermaid.js.org/](https://mermaid.js.org)). The following link types are used to describe cardinality and optionality between connected nodes:
1. `||--||`: Represents a mandatory-to-mandatory relationship, i.e., both entities are required for the relationship
   
2. `||--|o`: Represents a mandatory-to-optional relationship, where one side is required while the other side may or may not
   
3. `||--}o`: Represents a mandatory-to-many relationship, with one side required and the other allowing multiple occurrences.
   
4. `o|--||`: Represents an optional-to-mandatory relationship, where one side may or may not be required, but the other is

Exemplarily shown below are MMD diagrams for the *2d-ftu* (**Figure 1**), *asct-b* (**Figure 2**), and *ref-organ* (**Figure 3**) DO types, as well as for a *sample* (**Figure 4**) All MMD diagrams are available at [https://github.com/hubmapconsortium/hra-do-processor/blob/main/er-diagrams.md/](https://github.com/hubmapconsortium/hra-do-processor/blob/main/er-diagrams.md/). Note that in the figures in the paper, we omitted underscores in edge labels and added spaces for legibility. 


<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-1.svg?sanitize=true">

**Figure 1**. An ER diagram for the *2d-ftu* HRA DO type. Click [here](https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-1.svg) to download the SVG version. 

---

<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-2.svg?sanitize=true">

**Figure 2**. ER diagram for the *asct-b* HRA DO type. Click [here](https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-2.svg) to download the  SVG version.

---

<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-9.svg?sanitize=true">

**Figure 3**. ER diagram for the *ref-organ* HRA DO type. Click [here](https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/e138a5e639a3e2a39e5117e53f8fef049274b457/docs/er-diagrams/index-9.svg) to download the SVG version.

---

<img src="https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/refs/heads/main/docs/er-diagrams/index-10.svg?sanitize=true">

**Figure 4**. ER diagram for the *ds-graph* HRA DO type. Click [here](https://raw.githubusercontent.com/hubmapconsortium/hra-do-processor/refs/heads/main/docs/er-diagrams/index-10.svg) to download the SVG version.
