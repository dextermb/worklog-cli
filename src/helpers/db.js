const config = require('./config')
const path = require('path')

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const dir = path.dirname(config.path)
const filename = 'db.json'

const adapter = new FileSync(path.join(dir, filename))
const db = low(adapter)

module.exports = db
