$(document).ready(function () {
	// creating a random number between 19 and 120
	var goal = Math.floor(Math.random()*101) + 19;
	var crystalValues = [0,0,0,0];
		//creating the crystal values to be randomized with numbers 1-12
		for (var i=0; i < crystalValues.length; i++) {
			crystalValues[i] = Math.floor(Math.random()*12) + 1;
		}
	var totalScore = 0;
	var wins = 0;
	var losses = 0;


	$('#blueCrystal').val(crystalValues[0]);
	$('#redCrystal').val(crystalValues[1]);
	$('#orangeCrystal').val(crystalValues[2]); 
	$('#greenCrystal').val(crystalValues[3]);

	// function for win and loss results including the modal alerts that are bootstrapped
	function results() {
		if (totalScore == goal) {
			wins++;
			$('#myWinModal').modal('show');
			$("#wins").html(wins);
			reset();
		} else if (totalScore > goal) {
			$("#totalScore").html(totalScore);
			losses++;
			$('#myLossModal').modal('show');
			$("#losses").html(losses);
			reset();
		}
	}

	// function for resetting the game
	function reset() {
		goal = Math.floor(Math.random()*101) + 19;
		$("#goal").html(goal);
		for (var i=0; i < crystalValues.length; i++) {
			crystalValues[i] = Math.floor(Math.random()*12) + 1;
		}
		totalScore = 0;
		$("#totalScore").html(totalScore);
	};

	// random number for each crystal clicked
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
	$("#goal").html(goal);
	$("#totalScore").html(totalScore);
	$("#wins").html(wins);
	$("#losses").html(losses);
});

