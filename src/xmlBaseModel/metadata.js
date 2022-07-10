/* eslint-disable no-return-await */
/* eslint-disable array-callback-return */
/* eslint-disable handle-callback-err */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
const { parseString } = require('xml2js')
const XmlBase = require('./xmlBase')
const ContributorGroup = require('./contributorGroup')
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
          location: `book-part-meta`,
        },
      },
      alt_title: {
        path: {
          location: [`title-group alt-title`],
        },
      },
      contributors: {
        path: {
          children: [`contrib-group`],
          location: `book-part-meta`,
        },
      },
      chapter_number: {
        path: {
          location: [`title-group label`],
        },
      },
      date_publication: {
        path: {
          location: `pub-date`,
        },
      },
      date_publication_format: {
        path: {
          location: `pub-date:publication-format`,
        },
      },
      date_revised: {
        path: {
          location: `pub-history date[date-type=revised]`,
        },
      },
      date_created: {
        path: {
          location: `pub-history date[date-type=created]`,
        },
      },
      date_updated: {
        path: {
          location: `pub-history date[date-type=updated]`,
        },
      },
      sub_title: {
        path: {
          location: [`title-group subtitle`],
        },
      },
      title: {
        path: {
          location: [`title-group title`, `title-group article-title`],
        },
      },
    }
  }

  async date_publication(date) {
    if (!date) return Promise.resolve(null)
    return await new Promise(resolve => {
      parseString(
        `<date>${date}</date>`,
        { explicitArray: false, trim: true },
        (err, value) => {
          const {
            date: { year = '', month = '', day = '' },
          } = value

          resolve(`${year}-${month}-${day}`)
        },
      )
    })
  }

  async date_revised(date) {
    if (!date) return Promise.resolve(null)
    return await new Promise(resolve => {
      parseString(
        `<date>${date}</date>`,
        { explicitArray: false, trim: true },
        (err, value) => {
          const {
            date: { year = '', month = '', day = '' },
          } = value

          resolve(`${year}-${month}-${day}`)
        },
      )
    })
  }

  async date_created(date) {
    if (!date) return Promise.resolve(null)
    return await new Promise(resolve => {
      parseString(
        `<date>${date}</date>`,
        { explicitArray: false, trim: true },
        (err, value) => {
          const {
            date: { year = '', month = '', day = '' },
          } = value

          resolve(`${year}-${month}-${day}`)
        },
      )
    })
  }

  async date_updated(date) {
    if (!date) return Promise.resolve(null)
    return await new Promise(resolve => {
      parseString(
        `<date>${date}</date>`,
        { explicitArray: false, trim: true },
        (err, value) => {
          const {
            date: { year = '', month = '', day = '' },
          } = value

          resolve(`${year}-${month}-${day}`)
        },
      )
    })
  }

  abstract(value) {
    if (!value || !value[0]) return null
    // value[0] is the Abstract tag and contents
    return new Abstract(value[0], value[0].attribs.id)
  }

  contributors(value) {
    const contributors = []

    // Loop over multiple Contrib Groups
    value.map((index1, cg) => {
      if (this.xmlObject(cg).html()) {
        contributors.push(new ContributorGroup(cg))
      }
    })

    return contributors
  }
}

module.exports = Metadata
