//creating variables to be used in game

var randomNumber;
var score = 0;
var crystalValue;
var wins = 0;
var losses = 0;
var crystalNumber = [];
var total = 0;

$(".numberWins").text(wins);
$(".numberLosses").text(losses);

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

//starts new game and resets numbers
function restart() {
	randomNumber = Math.floor(Math.random() * 102) + 19;
	console.log(randomNumber);
	$(".ranNum").text(randomNumber);
	crystalNumber = [];
	randomCrystalNumbers();
	console.log(crystalNumber);
	score = 0;
	total = 0;
	$(".curScore").text(score);
	//$(".declareResult").text("");
}

restart();

//function to add wins to total and set new game
function youWin() {
	wins++;
	$(".declareResult").text("You Win!");
	$(".numberWins").text(wins);
	restart();
}

//function to add losses to total and set new game
function youLose() {
	losses++;
	$(".declareResult").text("You Lose.");
	$(".numberLosses").text(losses);
	restart();
}

//click function and assigning value to crystals
	$("#crystalOne").on("click", function() {
		$(".declareResult").text(" ");
		crystalValue = crystalNumber[0];
		console.log(crystalValue);
		total = total + crystalValue;
		$(".curScore").text(total);
		if (total == randomNumber) {
			youWin();
		}
		else if (total > randomNumber) {
			youLose();
		}
		//$(".declareResult").text(" ");
	})

	$("#crystalTwo").on("click", function() {
		$(".declareResult").text(" ");
		crystalValue = crystalNumber[1];
		total = total + crystalValue;
		$(".curScore").text(total);
		if (total == randomNumber) {
			youWin();
		}
		else if (total > randomNumber) {
			youLose();
		}
		//$(".declareResult").text(" ");
	})

	$("#crystalThree").on("click", function() {
		$(".declareResult").text(" ");
		crystalValue = crystalNumber[2];
		total = total + crystalValue;
		$(".curScore").text(total);
		if (total == randomNumber) {
			youWin();
		}
		else if (total > randomNumber) {
			youLose();
		}
		//$(".declareResult").text(" ");
	})

	$("#crystalFour").on("click", function() {
		$(".declareResult").text(" ");
		crystalValue = crystalNumber[3];
		total = total + crystalValue;
		$(".curScore").text(total);
		if (total == randomNumber) {
			youWin();
		}
		else if (total > randomNumber) {
			youLose();
		}
		//$(".declareResult").text(" ");
	})