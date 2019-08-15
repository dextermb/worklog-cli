exports.command = 'activities <command>'
exports.describe = 'Manage activities'

exports.builder = yargs => (
  yargs.commandDir('activities')
)
