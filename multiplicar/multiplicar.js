const fs = require('fs');
const colors = require('colors');

let createFile = (base, limit = 10) => {
	return new Promise((resolve, reject) => {
		if (!Number(base)){
			reject(`value ${base} is not a number`);
		}

		let data = '';

		for (let i = 1; i <= limit; i++) {
			data += `${base} * ${i} = ${base * i} \n`;
		}


		fs.writeFile(`./tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {
		  	if (err) 
		  		reject(err)
		  	else 
		  		resolve(`tabla-${base}-al-${limit}.txt`);
		});
	});
}

let listFile = (base, limit = 10) => {

	console.log('==================================='.blue);
	console.log(`===========tabla del ${ base}===========`.red);
	console.log('==================================='.green);
	for (let i = 0; i <= limit; i++) {
		console.log(`${base} * ${i} = ${base * i}`);
	}	
}

module.exports = {
	createFile,
	listFile
}
