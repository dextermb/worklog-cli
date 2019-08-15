const { tags } = require('../../helpers/options')

exports.command = 'list'
exports.describe = 'List activities'

exports.builder = {
  tags
}

exports.handler = ({ tags }) => {
  console.log(tags)
}
