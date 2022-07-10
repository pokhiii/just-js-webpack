const BookComponentConversion = require('./bookComponentConversion')

class BookXmlConversion extends BookComponentConversion {
  async handleMessage() {
    const parsedData = await this.extractDatafromConvertedFile()
    console.log('parsedData', parsedData)
  }
}

module.exports = BookXmlConversion
