//creating variables to be used in game

var randomNumber;
var score;
var crystalValue;
var wins;
var losses;
var crystalNumber = [];

//defining randomNumber as a random number between 19-120
randomNumber = Math.floor(Math.random() * 102) + 19;
console.log(randomNumber);

//generating random values between 1-12 for crystals
function randomCrystalNumbers() {
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random() * 11) + 1;
		crystalNumber.push(num);
	}
}

randomCrystalNumbers();
console.log(crystalNumber);