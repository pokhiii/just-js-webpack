const Book = require('./xmlBaseModel/book')

class HandleNcbiMessage {
  constructor() {
    this.remotePath = ''
    this.bookComponent = null
    this.toc = null
  }

  async extractDatafromConvertedFile() {
    let parsedData = null

    try {
      if (this.checkIfTagExists(this.content.toString().substring(0, 500), 'book')) {
        parsedData = new Book(this.content.toString())
      } else {
        // parsedData = new BookPartWrapper(this.content.toString())
      }

      console.log(`kafka Parsed Message successfully`)
    } catch (e) {
      console.error(`HandleNcbiMessage: error`)
      parsedData = null
    }

    return parsedData
  }

  setContent(content) {
    this.content = content
  }

  checkIfTagExists(src, tag) {
    const re = `\.+<${tag}[> ]\.+`
    return new RegExp(re, 'si').test(src)
  }
}

module.exports = HandleNcbiMessage
