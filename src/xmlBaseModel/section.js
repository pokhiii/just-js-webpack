/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')

class Section extends XmlBase {
  constructor(path, id, label) {
    const xml = super(path)
    this.id = id
    this.label = label
    return xml
  }

  get OverwriteSchema() {
    return true
  }

  schema() {
    return {
      p: {
        path: {
          location: `p`,
        },
      },
      title: {
        path: {
          location: `title`,
        },
      },
    }
  }
}

module.exports = Section
