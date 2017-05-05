function printStars() {
    for (let i = 10; i > 0; i--) {
        setTimeout(function() {
            let colors = require('colors/safe');
            let stars = "";

     for (let j = 0; j < i; j++) {
        stars = stars + "*  ";
    }

            console.log(colors.blue(stars));
        }, 10000 - (i * 1000));
    }
}
module.exports = printStars();
