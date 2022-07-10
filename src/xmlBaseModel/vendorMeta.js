/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')

class VendorMeta extends XmlBase {
  schema() {
    return {
      bcmsId: {
        path: {
          location: `book-submit:bcms-id`,
        },
      },
      jobId: {
        path: {
          location: `book-submit:job-id`,
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

module.exports = VendorMeta
