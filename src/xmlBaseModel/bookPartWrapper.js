/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')
const Metadata = require('./metadata')
const Body = require('./body')

class BookPartWrapper extends XmlBase {
  schema() {
    return {
      type: {
        path: {
          location: [
            `book-part-wrapper:content-type`,
            `book-part:book-part-type`,
            `book-app:book-part-type`,
          ],
        },
      },
      body: {
        path: {
          location: `body`,
        },
      },
      metadata: {
        path: {
          location: [`book-part-meta`, `article-meta`],
        },
      },
      namedBookPartBody: {
        path: {
          location: `named-book-part-body`,
        },
      },
      hideInTOC: {
        path: {
          location: [
            `book-part-wrapper`,
            `book-part`,
            `book-app`,
            'front-matter-part',
            'preface',
            'forward',
            'dedication',
          ],
        },
      },
    }
  }

  metadata(value) {
    if (!value) return {}
    return new Metadata(`<book-part-meta>${value}</book-part-meta>`)
  }

  body(value) {
    if (!value) return null

    const typeFlag = !!(
      this.model.type === 'section' || this.model.type === 'chapter'
    )

    return new Body(`<body>${value}</body>`, { parseSectionChildren: typeFlag })
  }

  namedBookPartBody(value) {
    if (!value) return null
    return new Body(value)
  }

  hideInTOC(value) {
    return value.includes('?hideTOC?')
  }
}

module.exports = BookPartWrapper
