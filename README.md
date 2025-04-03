# Supporting Information for “Construction, Deployment, and Usage of the Human Reference Atlas Knowledge Graph for Linked Open Data”

Andreas Bueckle<sup>1*</sup>, Bruce W. Herr II<sup>1*</sup>, Josef Hardi<sup>2</sup>, Ellen M Quardokus<sup>1</sup>, Mark Musen<sup>2</sup>, Katy Börner<sup>1\*</sup>

<sup>1</sup> Department of Intelligent Systems Engineering, Luddy School of Informatics, Computing, and Engineering, Indiana University, Bloomington, IN, USA\
<sup>2</sup> Stanford Center for Biomedical Informatics Research, Stanford University, Stanford, California, USA

\* Corresponding authors

Here, we collect materials for the companion website at [https://cns-iu.github.io/hra-kg-supporting-information/](https://cns-iu.github.io/hra-kg-supporting-information/) as well as a [Jupyter Notebook](/notebooks/hra-kg-queries.ipynb) demonstrating how to access the HRA KG. Please refer to the companion website for the supporting information in this repository. 

## GitHub Repositories Used for HRA KG Construction

| Name                               	| Description                                                                                       	| URL                                                           	               	|
|------------------------------------	|---------------------------------------------------------------------------------------------------	|---------------------------------------------------------------	|
| hra-kg                             	| HRA Knowledge Graph                                                                               	| https://github.com/hubmapconsortium/hra-kg                    	 	
| hra-api                            	| HRA API                                                                                           	| https://github.com/x-atlas-consortia/hra-api                  	|                 	
| hra-do-processor                   	| HRA DO Processor                                                                                  	| https://github.com/hubmapconsortium/hra-do-processor          	|                 	
| ccf-grlc                           	| Repository of canned SPARQL queries that can be run like a REST API endpoint via https://grlc.io  	| https://github.com/hubmapconsortium/ccf-grlc                  	|                 	
| hra-ubkg-exporter                  	| A CLI for exporting a subset of the HRA KG to Unified Biomedical Knowledge Graph (UBKG) format    	| https://github.com/x-atlas-consortia/hra-ubkg-exporter        	|                 	
| hra-kg-releases/hra-kg.v2.2.tar.xz 	| Whole HRA KG, ~5.1GB.                                                                             	| https://cdn.humanatlas.io/hra-kg-releases/hra-kg.v2.2.tar.xz  	|                 	

## Advanced Usage

### Get records from ASCT+B tables

The HRA KG API makes it easy to retrieve AS-CT-B records, properties, or counts for one or multiple organs.

**Get ASCT+B counts for all tables**: Retrieve the number of unique AS, CT, and B terms across all ASCT+B tables via this query for the latest HRA release:

-   [apps.humanatlas.io/api/grlc/hra.html#get-/as-ct-b-counts](https://apps.humanatlas.io/api/grlc/hra.html#get-/as-ct-b-counts)
    
**Returns**: A table with the number of unique AS, CT, B in the latest version of the HRA.

Retrieve the number of unique AS, CT, and B terms across all ASCT+B tables for all HRA releases:

-   [apps.humanatlas.io/api/grlc/hra.html#get-/as-ct-b-counts-all-versions](https://apps.humanatlas.io/api/grlc/hra.html#get-/as-ct-b-counts-all-versions)
    

**Returns**: A table with the number of unique AS, CT, B across all versions of the HRA (not just the latest one). Note that the only difference between the two queries is the added FROM HRA: statement in the SPARQL query, which limits the SPARQL search pattern of the first query to the latest HRA collection at [purl.humanatlas.io/collection/hra](https://purl.humanatlas.io/collection/hra).

  

**Get ASCT+B records for one organ**: Given the PURL of an asct-b DO, retrieve ASCT-B records from the ASCT+B table:

-   [apps.humanatlas.io/api/grlc/hra.html#get-/asctb-in-table](https://apps.humanatlas.io/api/grlc/hra.html#get-/asctb-in-table).
    

**Returns**: A table with one row per AS-CT-B record in the specified table, in the format: AS, CT, B labels, and the AS, CT, B ontology ID (if crosswalked, otherwise it returns a temporary ASCTB-TEMP ID).

Exemplary Python code that uses this endpoint is provided on the companion website at [cns-iu.github.io/hra-kg-supporting-information#basic-usage](https://cns-iu.github.io/hra-kg-supporting-information#basic-usage). The user can choose from common data formats (CSV or JSON) for the response via the Accept header.

  

**Get ASCT+B records for all organs**: Retrieve individual records for all ASCT+B tables (rather than just counts or records for one organ):

-   [github.com/x-atlas-consortia/hra-pop/blob/main/queries/hra/asctb-records.rq](https://github.com/x-atlas-consortia/hra-pop/blob/main/queries/hra/asctb-records.rq)
    

**Returns**: A table with one row per AS-CT-B record for all ASCT+B tables, in the format: AS, CT, B labels, and the AS, CT, B ontology ID (if crosswalked, otherwise it returns a temporary ASCTB-TEMP ID). Because the result of this query is large (1,048,576 rows and a total of 325 MB) and takes longer to run, it has not been deployed via [grlc.io](https://grlc.io/). Rather, the query response has been preprocessed and is available for download as a zipped CSV file on GitHub: [github.com/x-atlas-consortia/hra-pop/blob/main/output-data/v0.11.1/reports/hra/asctb-records.csv.zip](https://github.com/x-atlas-consortia/hra-pop/blob/main/output-data/v0.11.1/reports/hra/asctb-records.csv.zip).

An exemplary Jupyter Notebook on how to run a SPARQL query against the HRA KG is at [cns-iu.github.io/hra-kg-supporting-information/#notebook-to-query-the-hra-knowledge-graph-kg](https://cns-iu.github.io/hra-kg-supporting-information/#notebook-to-query-the-hra-knowledge-graph-kg).

### Retrieve Mean B Expression Values for CT

The hra-pop graph DO ([lod.humanatlas.io/graph/hra-pop/latest](https://lod.humanatlas.io/graph/hra-pop/latest/)) represents the HRApop dataset and contains mean B expression values for CT inside high-quality experimental datasets. To compute mean B expressions, scanpy[https://scanpy.readthedocs.io/en/stable/](https://scanpy.readthedocs.io/en/stable/), numpy[https://numpy.org/](https://numpy.org/), and anndata[https://anndata.readthedocs.io/en/stable/](https://anndata.readthedocs.io/en/stable/) are used. Concretely, scanpy’s to rank_gene_groups() method assigns mean B expressions. We normalize gene names with a lookup table from Ensembl Release 111 ([www.ensembl.org/index.html](https://www.ensembl.org/index.html)) to HGNC v2023-09-18 ([www.genenames.org](https://www.genenames.org/)). Both the code to compute mean B expressions and the look-up table from Ensembl to HGNC are linked in **Supplemental Table 1** under the entry for the hra-pop graph.

**Retrieve mean B expression values for a given CT across organs**: Retrieve all experimental datasets from HRApop that contain a canonical CT plus B expression values with this query:

-   [apps.humanatlas.io/api/grlc/hra-pop.html#get-/datasets-with-ct](https://apps.humanatlas.io/api/grlc/hra-pop.html#get-/datasets-with-ct)
    

**Returns**: A table with atlas datasets that contain the given CT. There is one CT-B expression per row. The response includes the dataset source (which portal it was downloaded from), the dataset ID, which must be an Internationalized Resource Identifier (IRI, [www.w3.org/International/O-URL-and-ident.html](https://www.w3.org/International/O-URL-and-ident.html)), the organ, the donor sex, the tool that assigned the CT, the CT ontology ID (same for every row as provided by user), a human-readable CT label, the number of cells of the given type in the dataset, a B ontology ID, and finally, the mean expression value for all B that characterize this CT computed via CTann tools in HRApop (see Box 1 in paper at [https://www.nature.com/articles/s41592-024-02563-5](https://www.nature.com/articles/s41592-024-02563-5)). If multiple CTann tools were used for the dataset, multiple rows are provided to show the different CT and mean B.

### Predict Cell Type Populations and Locations

Seven HRA user stories ([https://www.nature.com/articles/s41592-024-02563-5](https://www.nature.com/articles/s41592-024-02563-5)) have been identified based on interviews with more than 40 atlas architects working on human atlases. While all user stories are directly supported by HRA UIs and the HRA API for users with little to no programming experience, the HRA KG can also be queried directly in support of these user stories. **Supplemental Table 7** lists sample queries that help experts retrieve knowledge from DOs, identify processed data of interest, and run analyses to answer biomedical questions. Here, we detail the queries that support the US#1 (Predict cell type populations) and #2 (Predict spatial origin of tissue samples).

**Predict cell type populations (US#1)**: The HRA KG is used access the hra-pop graph ([lod.humanatlas.io/graph/hra-pop/latest](https://lod.humanatlas.io/graph/hra-pop/latest/)) with cell type populations for AS, datasets, and 3D extraction sites to improve the accuracy of annotations for sc-transcriptomics and sc-proteomics datasets. A demonstration application is available at [apps.humanatlas.io/us1](https://apps.humanatlas.io/us1/).

The user provides an extraction site using the RUI. The extraction site is then posted to the HRA API ([apps.humanatlas.io/api/#post-/hra-pop/rui-location-cell-summary](https://apps.humanatlas.io/api/#post-/hra-pop/rui-location-cell-summary)), which returns a predicted cell summary given the 3D collisions of the extraction site with AS inside the 3D Reference Object for which the extraction site was defined. In the background, the API queries a graph inside the HRA KG ([cdn.humanatlas.io/digital-objects/graph/hra-pop/v0.11.1/assets/atlas-as-cell-summaries.jsonld](https://cdn.humanatlas.io/digital-objects/graph/hra-pop/v0.11.1/assets/atlas-as-cell-summaries.jsonld)) to retrieve a predicted cell summary for the extraction site using the SPARQL query at [github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/as-weighted-cell-summaries.rq](https://github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/as-weighted-cell-summaries.rq).

  

**Predict spatial origin of tissue samples (US#2)**: For the inverse case, the cell type populations from the hra-pop graph mentioned above can be used to predict the 3D location of datasets with unknown spatial origin. A demonstration application is available at [apps.humanatlas.io/us2](https://apps.humanatlas.io/us2/).

  

The user provides a cell summary for a given dataset whose origin is uncertain or unknown (beyond basic metadata such as the organ and the CTann tool used to assign the CT in the cell summary). The application features an optional dropdown menu to select the organ and tool. Supported organs and tools for the dropdown menu are available via the HRA API endpoints at [apps.humanatlas.io/api/hra-pop/supported-organs](https://apps.humanatlas.io/api/hra-pop/supported-organs) and [apps.humanatlas.io/api/#get-/hra-pop/supported-tools](https://apps.humanatlas.io/api/#get-/hra-pop/supported-tools), respectively. These endpoints run SPARQL queries under the hood: [github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/supported-reference-organs.rq](https://github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/supported-reference-organs.rq) (to get the reference organs supported by HRApop) and [github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/supported-tools.rq](https://github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/supported-tools.rq) (to get the tools).

  

Once the user provides the cell type population of the dataset of unknown spatial origin, the application posts this population to an endpoint in the HRA API ([apps.humanatlas.io/api/hra-pop/cell-summary-report](https://apps.humanatlas.io/api/hra-pop/cell-summary-report)), which takes a minimum of a CT ID and a column for the percentage of that CT in the dataset. In the background, the HRA API runs the SPARQL query at [github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/select-cell-summaries.rq](https://github.com/x-atlas-consortia/hra-api/blob/main/src/library/hra-pop/queries/select-cell-summaries.rq), which returns a listing of the most similar AS, datasets, and extraction sites (by cosine similarity).