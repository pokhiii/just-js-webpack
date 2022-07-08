const cheerio = require('cheerio');
const isArray = require('lodash/isArray');
const decoder = require('html-entities');
// const { parseString } = require('xml2js');



const string = '<book-id book-id-type="pmcid">bcms20000625</book-id><book-id book-id-type="doi">10.22427/NTP-TOX-100</book-id><book-title-group><book-title>NTP Technical Report on the Toxicity Studies of <italic>Aspergillus fumigatus</italic> Administered by Inhalation to B6C3F1/N Mice (Revised)</book-title><subtitle>Toxicity Report 100</subtitle></book-title-group><contrib-group content-type="authors"><contrib contrib-type="author"><collab>National Toxicology Program<contrib-group content-type="collaborators"><contrib><name><surname>Germolec</surname><given-names>D.R.</given-names></name></contrib><contrib><name><surname>Willson</surname><given-names>C.J.</given-names></name></contrib><contrib><name><surname>Battelli</surname><given-names>L.</given-names></name></contrib><contrib><name><surname>Beezhold</surname><given-names>D.H.</given-names></name></contrib><contrib><name><surname>Blystone</surname><given-names>C.R.</given-names></name></contrib><contrib><name><surname>Brown</surname><given-names>P.</given-names></name></contrib><contrib><name><surname>Cora</surname><given-names>M.C.</given-names></name></contrib><contrib><name><surname>Croston</surname><given-names>T.L.</given-names></name></contrib><contrib><name><surname>Fostel</surname><given-names>J.M.</given-names></name></contrib><contrib><name><surname>Gideon</surname><given-names>K.M.</given-names></name></contrib><contrib><name><surname>Goldsmith</surname><given-names>W.T.</given-names></name></contrib><contrib><name><surname>Gong</surname><given-names>H.</given-names></name></contrib><contrib><name><surname>Green</surname><given-names>B.J.</given-names></name></contrib><contrib><name><surname>Hejtmancik</surname><given-names>M.R.</given-names></name></contrib><contrib><name><surname>Hooth</surname><given-names>M.J.</given-names></name></contrib><contrib><name><surname>King-Herbert</surname><given-names>A.P.</given-names></name></contrib><contrib><name><surname>Law</surname><given-names>B.</given-names></name></contrib><contrib><name><surname>Lemons</surname><given-names>A.R.</given-names></name></contrib><contrib><name><surname>Malarkey</surname><given-names>D.E.</given-names></name></contrib><contrib><name><surname>Martini</surname><given-names>C.</given-names></name></contrib><contrib><name><surname>McKinney</surname><given-names>W.G.</given-names></name></contrib><contrib><name><surname>Moore</surname><given-names>R.</given-names></name></contrib><contrib><name><surname>Myers</surname><given-names>C.</given-names></name></contrib><contrib><name><surname>Nayak</surname><given-names>A.P.</given-names></name></contrib><contrib><name><surname>Orandle</surname><given-names>M.</given-names></name></contrib><contrib><name><surname>Patton</surname><given-names>K.M.</given-names></name></contrib><contrib><name><surname>Roberts</surname><given-names>G.K.</given-names></name></contrib><contrib><name><surname>Sayers</surname><given-names>N.</given-names></name></contrib><contrib><name><surname>Shaw</surname><given-names>M.</given-names></name></contrib><contrib><name><surname>Shipkowski</surname><given-names>K.A.</given-names></name></contrib><contrib><name><surname>Shockley</surname><given-names>K.R.</given-names></name></contrib><contrib><name><surname>Smith-Roe</surname><given-names>S.L.</given-names></name></contrib><contrib><name><surname>Stout</surname><given-names>M.D.</given-names></name></contrib><contrib><name><surname>Travlos</surname><given-names>G.S.</given-names></name></contrib><contrib><name><surname>Vallant</surname><given-names>M.K.</given-names></name></contrib><contrib><name><surname>Waidyanatha</surname><given-names>S.</given-names></name></contrib><contrib><name><surname>Walker</surname><given-names>N.J.</given-names></name></contrib><contrib><name><surname>Whittlesey</surname><given-names>R.</given-names></name></contrib><contrib><name><surname>Witt</surname><given-names>K.L.</given-names></name></contrib></contrib-group></collab><xref ref-type="aff" rid="aff-1-1"><sup>1</sup></xref></contrib><aff id="aff-1-1"><label>1</label>Division of the National Toxicology Program, National Institute of Environmental Health Sciences, Research Triangle Park, North Carolina, USA</aff></contrib-group><pub-date date-type="pubr" publication-format="electronic"><month>01</month><year>2021</year></pub-date><pub-date date-type="pubr" publication-format="electronic"><month>10</month><year>2021</year></pub-date><publisher><publisher-name>National Toxicology Program</publisher-name><publisher-loc>Research Triangle Park (NC)</publisher-loc></publisher><pub-history><date date-type="created"><month>07</month><year>2021</year></date><date date-type="updated"><month>10</month><year>2021</year></date></pub-history><permissions><license xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://creativecommons.org/publicdomain/zero/1.0/"><license-p>This is a work of the US government and distributed under the terms of the Public Domain</license-p></license></permissions><abstract><title>Abstract</title><p><italic>Aspergillus fumigatus</italic> is a thermotolerant, saprophytic fungal species that is ubiquitous in the environment. Mold was nominated to the National Toxicology Program (NTP) in response to public concern regarding suspected adverse health effects associated with personal exposure in indoor and occupational settings. <italic>A. fumigatus</italic> is of particular concern in the biowaste industry as the species can contaminate self-heating compost piles. Because of this potential for personal and occupational exposure and the lack of available toxicity data, toxicity studies were conducted in which male and female B6C3F1/N mice were exposed to <italic>A. fumigatus</italic> conidia (spores) two times a week for 3 months. All in-life procedures, including inhalation exposure, test article preparation, and hematology analysis, were completed by the National Institute for Occupational Safety and Health (NIOSH, Morgantown, WV). Battelle (Columbus, OH) conducted terminal necropsies, measured terminal body and organ weights, and evaluated gross lesions on-site at NIOSH. Tissue processing and histopathology were completed at Battelle. Grocott’s methenamine silver (GMS) staining was performed at NIOSH. Genetic toxicology studies on mouse peripheral blood erythrocytes were conducted by Integrated Laboratory Systems, LLC (Research Triangle Park, NC).</p><p>Groups of 10 male and 10 female mice were exposed via nose-only inhalation to 1 × 10<sup>5</sup><italic>A. fumigatus</italic> viable spores (viable <italic>A. fumigatus</italic>), 1 × 10<sup>5</sup> nonviable spores (heat-inactivated particle control), or to an air control. All male mice survived to the end of the study, whereas two female mice, one in the air control group and one in the heat-inactivated particle control group, died during the study. There was no effect of exposure on body weights. Gross lesions, observed at study termination, consisted of enlarged, gray bronchial lymph nodes in 5 out of 10 females exposed to viable <italic>A. fumigatus</italic>. Mean absolute and relative lung weights were significantly increased in male (43% and 47%, respectively) and female (68% and 75%, respectively) viable <italic>A. fumigatus-</italic>exposed mice compared to the air control groups.</p><p>Nonneoplastic lesions were observed in the larynx, lung, and bronchial lymph nodes. In the larynx, lesions presented primarily as epithelial squamous metaplasia at the base of the epiglottis in both males and females exposed to viable <italic>A. fumigatus</italic>; exposure to heat-inactivated control spores did not affect the larynx. The increased lung weights in the viable <italic>A. fumigatus</italic>-exposed groups correlated histologically with chronic active inflammation and hyperplasia of the bronchus-associated lymphoid tissue (BALT) and bronchiolar epithelium in a majority of males and females. Mice in the heat-inactivated particle control groups also showed BALT hyperplasia but at lower incidences as compared to viable <italic>A. fumigatus</italic>-exposed groups. The lungs of all mice exposed to viable <italic>A. fumigatus</italic> spores also showed medial hypertrophy in small- to medium-sized pulmonary arteries. GMS-stained lung sections of viable <italic>A. fumigatus-</italic>exposed mice revealed spores within the alveoli and alveolar macrophages. Hyperplasia, either of lymphocytes or plasma cells, was additionally observed in the bronchial lymph nodes of viable <italic>A. fumigatus</italic>-exposed mice and corresponded to the grossly enlarged bronchial lymph nodes in females.</p><p>No increases in the frequencies of micronucleated erythrocytes were observed in peripheral blood samples from male and female mice obtained after 3 months of inhalation exposure to viable <italic>A. fumigatus</italic> spores, indicating no chromosomal damage was induced in progenitor cells in the bone marrow of these mice.</p><p>Under the conditions of this 3-month study, target organs identified in B6C3F1/N mice following inhalation exposure to <italic>A. fumigatus</italic> spores were the larynx, lung, and bronchial lymph nodes. Significant differences were observed between viable <italic>A. fumigatus</italic> exposure and both air control and heat-inactivated particle control exposures. These results build on initial NIOSH pulmonary immunology studies using the same exposure parameters and demonstrate that the immunological responses and histopathology could be enhanced by the viability of the <italic>A. fumigatus</italic> spores.</p><sec id="S34"><title>Synonyms</title><p><italic>Aspergillus fumigatus</italic> (<italic>A. fumigatus</italic>); NIH Strain B-5233; <italic>Aspergillus fumigatus</italic> Fresenius, anamorph (ATCC<sup>®</sup> 13073™)</p><table-wrap id="t-2-a" position="anchor"><caption><title>Summary of Findings Considered Toxicologically Relevant in Mice Exposed to <italic>Aspergillus fumigatus</italic> Spores by Inhalation for Three Months</title></caption><table frame="above" rules="groups"><col width="27.35%" span="1"/><col width="13.04%" span="1"/><col width="5.11%" span="1"/><col width="18.17%" span="1"/><col width="18.16%" span="1"/><col width="18.17%" span="1"/><thead><tr><th valign="middle" align="left" scope="col" style="border-top: solid 0.50pt; border-bottom: solid 0.50pt" rowspan="1" colspan="1"/><th valign="middle" colspan="2" align="center" scope="colgroup" style="border-top: solid 0.50pt; border-bottom: solid 0.50pt" rowspan="1">Male Heat-inactivated Particle Control</th><th valign="middle" align="center" scope="col" style="border-top: solid 0.50pt; border-bottom: solid 0.50pt" rowspan="1" colspan="1">Male<break/>Viable <italic>A. fumigatus</italic></th><th valign="middle" align="center" scope="col" style="border-top: solid 0.50pt; border-bottom: solid 0.50pt" rowspan="1" colspan="1">Female Heat-inactivated Particle Control</th><th valign="middle" align="center" scope="col" style="border-top: solid 0.50pt; border-bottom: solid 0.50pt" rowspan="1" colspan="1">Female<break/>Viable <italic>A. fumigatus</italic></th></tr></thead><tbody><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Exposure Concentration</bold><break/><bold>(Estimated Lung Deposition)</bold></td><td colspan="2" valign="top" align="left" rowspan="1">1 × 10<sup>5</sup> heat-inactivated <italic>A. fumigatus</italic> spores</td><td valign="top" align="left" rowspan="1" colspan="1">1 × 10<sup>5</sup><italic>A. fumigatus</italic> spores</td><td valign="top" align="left" rowspan="1" colspan="1">1 × 10<sup>5</sup> heat-inactivated <italic>A. fumigatus</italic> spores</td><td valign="top" align="left" rowspan="1" colspan="1">1 × 10<sup>5</sup><italic>A. fumigatus</italic> spores</td></tr><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Survival Rates</bold></td><td colspan="2" valign="top" align="left" rowspan="1">10/10</td><td valign="top" align="left" rowspan="1" colspan="1">10/10</td><td valign="top" align="left" rowspan="1" colspan="1">9/10</td><td valign="top" align="left" rowspan="1" colspan="1">10/10</td></tr><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Body Weights</bold></td><td colspan="2" valign="top" align="left" rowspan="1">Similar to air control group</td><td valign="top" align="left" rowspan="1" colspan="1">Similar to air control group</td><td valign="top" align="left" rowspan="1" colspan="1">Similar to air control group</td><td valign="top" align="left" rowspan="1" colspan="1">Similar to air control group</td></tr><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Clinical Findings</bold></td><td colspan="2" valign="top" align="left" rowspan="1">None<sup>a</sup></td><td valign="top" align="left" rowspan="1" colspan="1">None</td><td valign="top" align="left" rowspan="1" colspan="1">None</td><td valign="top" align="left" rowspan="1" colspan="1">None</td></tr><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Organ Weights</bold></td><td colspan="2" valign="top" align="left" rowspan="1">None</td><td valign="top" align="left" rowspan="1" colspan="1">↑Absolute and relative lung weight compared to either air control or heat-inactivated particle control</td><td valign="top" align="left" rowspan="1" colspan="1">None</td><td valign="top" align="left" rowspan="1" colspan="1">↑Absolute and relative lung weight compared to either air control or heat-inactivated particle control</td></tr><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Hematology</bold></td><td colspan="2" valign="top" align="left" rowspan="1">None</td><td valign="top" align="left" rowspan="1" colspan="1">↑Neutrophils compared to air control</td><td valign="top" align="left" rowspan="1" colspan="1">None</td><td valign="top" align="left" rowspan="1" colspan="1">None</td></tr><tr><td valign="top" align="left" scope="row" rowspan="1" colspan="1"><bold>Nonneoplastic Effects</bold></td><td colspan="2" valign="top" align="left" rowspan="1"><underline>Lung:</underline> inflammation, chronic (3/10); BALT, lymphocyte, hyperplasia (7/10)</td><td valign="top" align="left" rowspan="1" colspan="1"><underline>Larynx: </underline>epiglottis, metaplasia, squamous (9/10)<break/><underline>Lung:</underline> artery, medial, hypertrophy (10/10); bronchiole, epithelium, hyperplasia (9/10); inflammation, chronic active (10/10); BALT, lymphocyte, hyperplasia, (10/10); goblet cell, metaplasia (10/10)<break/><underline>Bronchial lymph node:</underline> lymphocyte, hyperplasia (6/9); plasma cell, hyperplasia (5/9)</td><td valign="top" align="left" rowspan="1" colspan="1"><underline>Lung: </underline>inflammation, chronic (7/10); BALT, lymphocyte, hyperplasia (8/10)</td><td valign="top" align="left" rowspan="1" colspan="1"><underline>Larynx: </underline>epiglottis, metaplasia, squamous (9/10); epithelium, ulcer (1/10); squamous epithelium, hyperplasia (1/10)<break/><underline>Lung:</underline> artery, medial, hypertrophy (10/10); bronchiole, epithelium, hyperplasia (8/10); inflammation, chronic active (10/10); BALT, lymphocyte, hyperplasia, (10/10); goblet cell, metaplasia (10/10)<break/><underline>Bronchial lymph node:</underline> lymphocyte, hyperplasia (9/10); plasma cell, hyperplasia (8/10)</td></tr><tr><td valign="top" align="left" scope="col" rowspan="1" colspan="1"><bold>Genetic Toxicology</bold></td><td colspan="2" valign="top" align="left" rowspan="1"/><td valign="top" align="left" rowspan="1" colspan="1"/><td valign="top" align="left" rowspan="1" colspan="1"/><td valign="top" align="left" rowspan="1" colspan="1"/></tr><tr><td colspan="2" valign="top" align="left" style="border-bottom: solid 0.50pt" scope="row" rowspan="1">Micronucleated Erythrocytes (In Vivo):</td><td colspan="4" valign="top" align="left" style="border-bottom: solid 0.50pt" rowspan="1">Negative in all exposure groups of male and female mice</td></tr></tbody></table><table-wrap-foot><fn><p>BALT = bronchus-associated lymphoid tissue.</p></fn><fn id="tfn-2-1"><label><sup>a</sup></label><p>None = no toxicologically relevant effects for this endpoint.</p></fn></table-wrap-foot></table-wrap></sec></abstract><custom-meta-group><custom-meta><meta-name>books-source-type</meta-name><meta-value>Report</meta-value></custom-meta><custom-meta><meta-name>books-subject</meta-name><meta-value>Public Health</meta-value></custom-meta><custom-meta><meta-name>books-subject</meta-name><meta-value>Chemicals and Drugs</meta-value></custom-meta><custom-meta><meta-name>books-subject</meta-name><meta-value>Physiology</meta-value></custom-meta></custom-meta-group>'


function chooseExistingPath(path) {
	if (isArray(path.location)) {
		let found = null

		path.location.forEach(loc => {
			const [node, attribute] = loc.split(':')
			if (xmlObject('*').is(node)) {
				if (attribute) {
					if (!!xmlObject(node).attr(attribute) && !found) {
						found = loc
					}
				} else if (!found) {
					found = loc
				}
			}
		})


		return found || path.location[0]
	}

	return path.location
}


let parsedData = null;

// parsedData = new Book(string)

const xmlObject = cheerio.load(string, {
	xmlMode: true,
	decodeEntities: false,
	xml: {
		decodeEntities: false,
	},
})

const root = xmlObject('*').get(0)
	? xmlObject('*').get(0).tagName
	: xmlObject('*').get(0)


const schema = {
      abstract: {
        path: {
          children: [`abstract`],
          location: `book-meta`,
        },
      },
      alt_title: {
        path: {
          location: [`book-title-group alt-title`],
        },
      },
      author: {
        path: {
          location: `contrib-group`,
        },
      },
      doi: {
        path: {
          location: [`book-id[book-id-type=doi]`],
        },
      },
      edition: {
        path: {
          location: 'edition',
        },
      },
      pub_name: {
        path: {
          location: 'publisher publisher-name',
        },
      },
      pub_loc: {
        path: {
          location: 'publisher publisher-loc',
        },
      },
      volume: {
        path: {
          location: 'book-volume-number',
        },
      },
      pubDate: {
        path: {
          location: `pub-date`,
        },
      },
      dateType: {
        path: {
          location: `pub-date:date-type`,
        },
      },
      publicationFormat: {
        path: {
          location: `pub-date:publication-format`,
        },
      },
      sub_title: {
        path: {
          location: [`book-title-group subtitle`],
        },
      },
      title: {
        path: {
          children: [`book-title`],
          location: [`book-title-group`],
        },
      },
    };

const fields = Object.keys(schema)
let model = {}

fields.forEach(field => {
      const { path, rule } = schema[field]
      let value = {}

      const location = chooseExistingPath(path)
      const [node, attribute] = location.split(':')


      if (attribute) {
        value = xmlObject(node).attr(attribute)
      } else if (path.children) {
        value = xmlObject(node)
          .children()
          .filter((i, el) => el.name.includes(path.children))
      } else {
      	if (xmlObject(node).length > 1) {
      		value = []
	      	xmlObject(node).each(function(i, elm) {
	      		value.push(xmlObject(elm).html())
	      	})
      	} else {
	      	value = xmlObject(node).html()
      	}
      }

      let modelVal

      if (this[field]) {
        modelVal = this[field](value)
      } else if (value) {
        // Decode strings back from html-entities escaping
        // if they are leaf nodes, and not being passed into a method
        modelVal = decoder.decode(value)
      } else {
        modelVal = null
      }

      model[field] = modelVal
  });


      console.log('model', model)

