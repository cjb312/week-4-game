$(document).ready(function () {
	// variables
	// calcuates a random number between 19 and 120
	var randomNumber = Math.floor(Math.random()*101) + 19;
	var crystalValues = [0,0,0,0];
		// assigns random numbers between 1 and 12 for each crystal in the array
		for (var i=0; i < crystalValues.length; i++) {
			crystalValues[i] = Math.floor(Math.random()*12) + 1;
		}
	// total score based on button choices
	var totalScore = 0;
	// wins and losses
	var wins = 0;
	var losses = 0;

	// assigning random values created to the buttons
	$('#blueCrystal').val(crystalValues[0]);
	$('#redCrystal').val(crystalValues[1]);
	$('#orangeCrystal').val(crystalValues[2]); 
	$('#greenCrystal').val(crystalValues[3]);

	// function for win and loss results
	function results() {
		if (totalScore == randomNumber) {
			wins++;
			$('#myWinModal').modal('show');
			$("#wins").html(wins);
			reset();
		} else if (totalScore > randomNumber) {
			$("#totalScore").html(totalScore);
			losses++;
			$('#myLossModal').modal('show');
			$("#losses").html(losses);
			reset();
		}
	}

	// function for resetting the game
	function reset() {
		randomNumber = Math.floor(Math.random()*101) + 19;
		$("#randomNumber").html(randomNumber);
		for (var i=0; i < crystalValues.length; i++) {
			crystalValues[i] = Math.floor(Math.random()*12) + 1;
		}
		totalScore = 0;
		$("#totalScore").html(totalScore);
	};

	// generate a random number for each crystal clicked
	$("#blueCrystal").on("click", function(){
		totalScore = totalScore + crystalValues[0];
		$("#totalScore").html(totalScore);
		results();
	});
	$("#redCrystal").on("click", function(){
		totalScore = totalScore + crystalValues[1];
		$("#totalScore").html(totalScore);
		results();
	});
	$("#orangeCrystal").on("click", function(){
		totalScore = totalScore + crystalValues[2];
		$("#totalScore").html(totalScore);
		results();
	});
	$("#greenCrystal").on("click", function(){
		totalScore = totalScore + crystalValues[3];
		$("#totalScore").html(totalScore);
		results();
	});

	// variables pushed into html page
	$("#randomNumber").html(randomNumber);
	$("#totalScore").html(totalScore);
	$("#wins").html(wins);
	$("#losses").html(losses);
});

