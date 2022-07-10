/* eslint-disable class-methods-use-this */
const cheerio = require('cheerio')
const { Book, Collection, File } = require('@pubsweet/models')
const XmlToc = require('./builder/xmlToc')
const XmlCollection = require('./builder/xmlCollection')
const BookMeta = require('./builder/bookMeta')

class XmlFactory {
  static async createTocXml(id) {
    const book = await Book.query().findOne({ id })
    const bookWithAppliedValues = await book.getBookWithAppliedCollectionValues()

    const xmlToc = new XmlToc(
      {
        ...bookWithAppliedValues,
        divisions: await book.getBookComponentsByDivision({
          statusfilter: ['published'],
          group_chapters_in_parts: book.settings.toc.group_chapters_in_parts,
        }),
        collection: await Collection.query().findOne({ id: book.collectionId }),
        abstractGraphic: await File.query().findOne({ id: book.fileAbstract }),
      },
      // Start with minimal context -- context is for processing flags, different from Object data
      {
        pubID: '-//NLM//DTD BITS Book Interchange DTD v2.0 20151225//EN',
        sysID: 'BITS-book2.dtd',
      },
    )

    return xmlToc.build()
  }

  static async createCollectionXml(collection) {
    const xmlCollection = new XmlCollection(
      collection,
      // Start with minimal context -- context is for processing flags, different from Object data
      {
        sysID: 'bookcollection.dtd',
      },
    )

    return xmlCollection.build()
  }

  static async addMetadataCollectionToBook(book, content) {
    const bookMeta = new BookMeta(
      {
        ...book,
        abstractGraphic: await File.query().findOne({ id: book.fileAbstract }),
        collection: await Collection.query().findOne({ id: book.collectionId }),
      },
      { isCollection: false },
    )

    const bookMetaXml = bookMeta.build()

    const tocXml = await XmlFactory.createTocXml(book.id)

    const tocObject = cheerio.load(tocXml, {
      xmlMode: true,
      decodeEntities: false,
      xml: {
        decodeEntities: false,
      },
    })

    const collectionMeta = []

    tocObject('*')
      .find('collection-meta')
      .each((i, elem) => {
        collectionMeta[i] = `<collection-meta collection-type="${
          elem.attribs['collection-type']
        }">${tocObject(elem).html()}</collection-meta>`
      })

    const collectionMetaXml = collectionMeta.join('')

    const dataContent = cheerio.load(content, {
      xmlMode: true,
      decodeEntities: false,
      xml: {
        decodeEntities: false,
      },
    })

    dataContent('book-part-wrapper book-meta').remove()
    dataContent('book-part-wrapper collection-meta').remove()

    dataContent(bookMetaXml).prependTo('book-part-wrapper')
    dataContent(collectionMetaXml).prependTo('book-part-wrapper')

    return dataContent.html()
  }
}

module.exports = XmlFactory
