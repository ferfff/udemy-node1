const options = {
	base: {
		demand: true,
		alias: 'b'
	},
	limit: {
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
			.command('list','Print in console',options)
			.command('create','Create file in console',options)
			.help()
			.argv;

module.exports = {
	argv
}
