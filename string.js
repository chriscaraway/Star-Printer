function printStars(starCount) {

	let colors = require('colors/safe');
	let stars = "";

	for (let i = 0; i < starCount; i++) {
		stars = stars + " *";
	}

	console.log(colors.blue(stars));

	if (starCount > 1) {
		setTimeout(function() {
			printStars(starCount - 1);
		}, 1000);
	}
}

module.exports = printStars;
