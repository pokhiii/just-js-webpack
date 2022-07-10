const cheerio = require('cheerio')
const isArray = require('lodash/isArray')
const decoder = require('html-entities')

class XmlBase {
  constructor(path, options) {
    this.path = path
    this.cheerio = cheerio
    this.options = options || {}
    return this.parseXml()
  }

  parseXml() {
    const { path } = this
    
    this.xmlObject = cheerio.load(path, {
      xmlMode: true,
      decodeEntities: false,
      xml: {
        decodeEntities: false,
      },
    })

    this.root = this.xmlObject('*').get(0)
      ? this.xmlObject('*').get(0).tagName
      : this.xmlObject('*').get(0)

    this.loadFromSchema()

  return this.model
  }

  loadFromSchema() {
    const schema = this.OverwriteSchema
      ? this.schema()
      : Object.assign(this.rootSchema(), this.schema() || {})

    this.fields = Object.keys(schema)
    this.model = {}

    this.fields.forEach(field => {
      const { path } = schema[field]
      let value = {}

      const location = this.chooseExistingPath(path)
      const [node, attribute] = location.split(':')

      if (attribute) {
        value = this.xmlObject(node).attr(attribute)
      } else if (path.children) {
        value = this.xmlObject(node)
          .children()
          .filter((i, el) => el.name.includes(path.children))
      } else {
        value = this.xmlObject(node).html()
      }

      let modelVal

      if (this[field]) {
        modelVal = this[field](value)
      } else if (value) {
        // Decode strings back from html-entities escaping
        // if they are leaf nodes, and not being passed into a method
        modelVal = decoder.decode(value)
      } else {
        modelVal = null
      }

      this.model[field] = modelVal
    })
  }

  chooseExistingPath(path) {
    if (isArray(path.location)) {
      let found = null

      path.location.forEach(loc => {
        const [node, attribute] = loc.split(':')

        if (this.xmlObject('*').is(node)) {
          if (attribute) {
            if (!!this.xmlObject(node).attr(attribute) && !found) {
              found = loc
            }
          } else if (!found) {
            found = loc
          }
        }
      })

      return found || path.location[0]
    }

    return path.location
  }

  rootSchema() {
    return {
      id: {
        path: {
          location: `${this.root}:id`,
        },
      },
    }
  }
}

module.exports = XmlBase
