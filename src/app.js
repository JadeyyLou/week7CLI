const yargs = require('yargs');

const { Movie, movieArr } = require('./utils')


// argument vector
// console.log(process.argv)
// console.log(yargs.argv)


// new keyword referes to imported Movie class.
const app = (yargsObj) => {
	if(yargsObj.add) {
		const movie = new Movie(yargsObj.title, yargsObj.actor);
		movie.add();
		console.log(movieArr)
	} else {
		console.log('Incorrect command!')
	}
}

app(yargs.argv)