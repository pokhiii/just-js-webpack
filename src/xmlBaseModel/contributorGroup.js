/* eslint-disable array-callback-return */
/* eslint-disable class-methods-use-this */
const XmlBase = require('./xmlBase')
const Contributor = require('./contributor')

class ContributorGroup extends XmlBase {
  get OverwriteSchema() {
    return true
  }

  schema() {
    return {
      author: {
        path: {
          children: [`contrib`],
          location: `contrib-group`,
        },
      },
      editor: {
        path: {
          children: [`contrib`],
          location: `contrib-group`,
        },
      },
      collaborativeAuthors: {
        path: {
          children: [`contrib`],
          location: `contrib-group`,
        },
      },
    }
  }

  author(value) {
    const author = []

    this.xmlObject(value).map((index, v) => {
      if (
        this.xmlObject(v).html() &&
        this.xmlObject(v).attr('contrib-type') === 'author' &&
        this.xmlObject(v).has('collab').length === 0
      ) {
        author.push(new Contributor(v))
      }
    })

    return author
  }

  editor(value) {
    const editor = []

    this.xmlObject(value).map((index, v) => {
      if (
        this.xmlObject(v).html() &&
        this.xmlObject(v).attr('contrib-type') === 'editor' &&
        this.xmlObject(v).has('collab').length === 0
      ) {
        editor.push(new Contributor(v))
      }
    })

    return editor
  }

  collaborativeAuthors(value) {
    const collabAuthors = []

    this.xmlObject(value).map((index, v) => {
      if (this.xmlObject(v).has('collab').length > 0) {
        collabAuthors.push(this.xmlObject(v).find('collab').text())
      }
    })

    return collabAuthors
  }
}

module.exports = ContributorGroup
