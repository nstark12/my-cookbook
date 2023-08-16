const { readFileSync } = require('fs')

const readAndParseFile = (filePath) => {
    const content = readFileSync(filePath, 'utf-8')
    return JSON.parse(content)
}

module.exports = readAndParseFile