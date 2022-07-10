const XmlBase = require('./xmlBase')
const MetadataBook = require('./metadataBook')
const Body = require('./body')

class BookPartWrapper extends XmlBase {
  schema() {
    return {
      body: {
        path: {
          location: `body`,
        },
      },
      metadata: {
        path: {
          location: [`book-meta`, `article-meta`],
        },
      },
      namedBookPartBody: {
        path: {
          location: `named-book-part-body`,
        },
      },
    }
  }

  metadata(value) {
    if (!value) return {}
    return new MetadataBook(`<book-meta>${value}</book-meta>`)
  }

  body(value) {
    if (!value) return null
    return new Body(`<body>${value}</body>`, { parseSectionChildren: false })
  }

  namedBookPartBody(value) {
    if (!value) return null
    return new Body(value)
  }
}

module.exports = BookPartWrapper
