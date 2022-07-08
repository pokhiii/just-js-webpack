const cheerio = require('cheerio');
const isArray = require('lodash/isArray');
const decoder = require('html-entities');
const { parseString } = require('xml2js')

async function pubDate(date) {
    if (!date) return Promise.resolve(null)
	const isRange = isArray(date)
    const xmlString = isRange ? date.join('') : date;

     const dateResolver = (value) => ({
	            date: {
	              year: value.date.year || null,
	              day: value.date.day || null,
	              month: value.date.month || null,
	            },
	            dateRange: {
	              startMonth: null,
	              endMonth: null,
	              startYear: null,
	              endYear: null,
	            },
	          })

     const dateRangeResolver = (value) => ({
	            date: {
	              year: null,
	              day: null,
	              month: null,
	            },
	            dateRange: {
              startMonth: value.date.month[0] || null,
              endMonth: value.date.month[1] || null,
              startYear: value.date.year[0] || null,
              endYear: value.date.year[1] || null,
            },
	          })

    return await new Promise(resolve => {
    	parseString(
    		`<date>${xmlString}</date>`,
    		{
				explicitArray: false,
				trim: true,
				mergeAttrs: true,
				ignoreAttrs: false,
			},
	        (err, value) => {
	          resolve(isRange ? dateRangeResolver(value) : dateResolver(value))
	        },
		)
    })
  }

const date = [
    "<month>01</month><year>2021</year>",
    "<month>10</month><year>2021</year>"
];

const date1 = "<month>01</month><year>2021</year>";

pubDate(date).then(res => console.log(res))
