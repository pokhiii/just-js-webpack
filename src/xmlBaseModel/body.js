/* eslint-disable no-return-await */
/* eslint-disable array-callback-return */
/* eslint-disable handle-callback-err */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')
const Sec = require('./section')

class Body extends XmlBase {
  get OverwriteSchema() {
    return true
  }

  schema() {
    return {
      content: {
        path: {
          location: `*`,
        },
      },
      section: {
        path: {
          children: ['sec'],
          location: `body`,
        },
      },
    }
  }

  section(value) {
    const section = []

    if (this.options.parseSectionChildren === true) {
      value
        .filter((i, el) => {
          return (
            el.attribs['sec-type'] !== 'figs-and-tables' &&
            el.attribs['sec-type'] !== 'link-group'
          )
        })
        .map((index, v) => {
          // Check ONLY direct children of a section for a label tag
          //
          let sec_label = ''

          this.xmlObject(v.children).map((index2, sec_child) => {
            if (this.xmlObject(sec_child).is('label')) {
              sec_label = this.xmlObject(sec_child).html()
            }
          })

          section.push(new Sec(v.children, v.attribs.id, sec_label))
        })
    }

    return section
  }
}

module.exports = Body
