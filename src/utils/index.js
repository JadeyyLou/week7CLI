

// empty array to store data
const movieArr = [];
// create movie class for title and actor object.
// this keyword refers to object it belongs to 
class Movie {
	constructor(title, actor = 'Not specified'){
		this.title = title;
		this.actor = actor;
	}
	// small function to add cli input to arr
	add() {
		movieArr.push(this)
	}
};

// export objects to use elsewhere 
module.exports = {Movie, movieArr};