/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')

class SubmitMeta extends XmlBase {
  schema() {
    return {
      bookSubmitId: {
        path: {
          location: `book-submit:book-submit-id`,
        },
      },
      chapterId: {
        path: {
          location: `book-submit:chapter-id`,
        },
      },
      workflow: {
        path: {
          location: `book-submit:workflow`,
        },
      },
      submissionType: {
        path: {
          location: `book-submit:submission-type`,
        },
      },
    }
  }
}

module.exports = SubmitMeta
