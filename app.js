const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { createFile, listFile } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch(command) {
	case 'list':
			listFile(argv.base, argv.limit);
		break;
	case 'create':
			createFile(argv.base, argv.limit)
				.then(file => console.log(`File created`, colors.red(file)))
				.catch(e => console.log(e));
		break;
	default:
		console.log('Doesnt exist');
}

