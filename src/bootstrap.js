require('pretty-error').start()

const yargs = require('yargs')

yargs
  .scriptName('worklog')
  .commandDir('commands')
  .demandCommand()

exports.yargs = yargs
