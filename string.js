function printStars(starCount) {
	let stars = "";

	for (let j = 0; j < starCount; j++) {
		stars = stars + " *";
	}

	console.log(stars);

	if (starCount > 1) {
		setTimeout(function() {
			printStars(starCount - 1);
		}, 1000);
	}
}

printStars(10);







// for (var i = 10; i >0; i--) {
//
// 		var stars = "";
//
// 		for (var j = 0; j < i; j++) {
// 			stars = stars + " *";
// 		}
//
// 	console.log(stars);
// 	}
