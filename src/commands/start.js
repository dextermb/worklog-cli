const { tags } = require('../helpers/options')

exports.command = 'start'
exports.describe = 'Begin logging an activity'

exports.builder = {
  name: {
    alias: ['n'],
    type: 'string',
    default: +new Date()
  },
  tags
}

exports.handler = ({ name, tags }) => {
  console.log(name, tags)
}
