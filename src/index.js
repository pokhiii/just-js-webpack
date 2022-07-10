const cheerio = require('cheerio');
const isArray = require('lodash/isArray');
const decoder = require('html-entities');
const { parseString } = require('xml2js')
const xmlBookContent = require('./content')
const BookXmlConversion = require('./bookXmlConversion')

const entity = new BookXmlConversion();

entity.setContent(xmlBookContent);

entity.handleMessage().then(res => console.log('Fin.'))