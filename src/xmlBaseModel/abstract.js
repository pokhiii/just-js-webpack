/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')

class Abstract extends XmlBase {
  constructor(path, id) {
    const xml = super(path)
    this.id = id
    return xml
  }

  get OverwriteSchema() {
    return true
  }

  schema() {
    return {
      text: {
        path: {
          location: `p`,
        },
      },
      title: {
        path: {
          children: ['title'],
          location: `abstract`,
        },
      },
    }
  }

  title(value) {
    if (!value || !value[0]) return null
    return this.xmlObject(value[0]).html()
  }
}

module.exports = Abstract
