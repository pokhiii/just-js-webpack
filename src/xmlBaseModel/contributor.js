/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')

class Contributor extends XmlBase {
  get OverwriteSchema() {
    return true
  }

  schema() {
    return {
      affiliation: {
        path: {
          location: `aff`,
        },
      },
      degrees: {
        path: {
          location: `degrees`,
        },
      },
      email: {
        path: {
          location: `email`,
        },
      },
      givenName: {
        path: {
          location: `name given-names`,
        },
      },
      surname: {
        path: {
          location: `name surname`,
        },
      },
      suffix: {
        path: {
          location: `name suffix`,
        },
      },
    }
  }
}

module.exports = Contributor
