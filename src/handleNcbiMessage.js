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
      parsedData = new Book(this.content.toString())
    } catch (e) {
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
