/* eslint-disable no-return-await */
/* eslint-disable array-callback-return */
/* eslint-disable handle-callback-err */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
const { parseString } = require('xml2js')
const XmlBase = require('./xmlBase')
const Contributor = require('./contributor')
const Abstract = require('./abstract')

class Metadata extends XmlBase {
  get OverwriteSchema() {
    return true
  }

  schema() {
    return {
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
    }
  }

  title(bookTitle) {
    if (!bookTitle || !bookTitle[0]) return null

    // BEFORE
    // console.log(this.xmlObject(bookTitle[0]).html())

    // Strip out certain tags
    // https://gitlab.coko.foundation/ncbi/ncbi/-/issues/558#note_62817

    this.xmlObject(bookTitle[0]).find('ext-link').remove()
    this.xmlObject(bookTitle[0]).find('email').remove()
    this.xmlObject(bookTitle[0]).find('uri').remove()

    this.xmlObject(bookTitle[0]).find('inline-supplementary-material').remove()
    this.xmlObject(bookTitle[0]).find('related-article').remove()
    this.xmlObject(bookTitle[0]).find('related-object').remove()

    this.xmlObject(bookTitle[0]).find('hr').remove()

    this.xmlObject(bookTitle[0]).find('fn').remove()
    this.xmlObject(bookTitle[0]).find('target').remove()
    this.xmlObject(bookTitle[0]).find('xref').remove()

    // AFTER
    // console.log(this.xmlObject(bookTitle[0]).html())

    return this.xmlObject(bookTitle[0]).html()
  }

  async pubDate(date) {
    if (!date) return Promise.resolve(null)
    return await new Promise(resolve => {
      parseString(
        `<date>${date}</date>`,
        {
          explicitArray: false,
          trim: true,
          mergeAttrs: true,
          ignoreAttrs: false,
        },
        (err, value) => {
          resolve({
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
        },
      )
    })
  }

  author(value) {
    const author = []

    this.xmlObject(value).map((index, v) => {
      if (this.xmlObject(v).html()) {
        author.push(new Contributor(v))
      }
    })

    return author
  }

  abstract(value) {
    if (!value || !value[0]) return null
    // value[0] is the Abstract tag and contents
    return new Abstract(value[0], value[0].attribs.id)
  }
}

module.exports = Metadata
