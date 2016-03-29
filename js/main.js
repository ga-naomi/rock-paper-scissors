//wait for the DOM elements to load before executing
$(document).ready(pageReady);

function pageReady() {


	//Bind click listener to Play Game button
	$(".play-button").click(playFunction);
	function playFunction() {
		//prevent default form submission
		event.preventDefault();

	//Set up play again option
	$(".play-again").click(playAgain);
	function playAgain() {
		//prevent default form submission
		event.preventDefault();
		//reset
		$(".results-container").hide();
		$(".game-container").show();
		playFunction();
		computerPlay();
		}


		//Assign variable to keep track of the user's choice
		var userChoice;

		//Show choices
		$(".game-container").show();

		//Bind click listener to choices
		$(".choice").click(userThrow);
		function userThrow() {
			event.preventDefault();
			$(this).show();
			$(this).siblings().hide();
			userChoice = $(this).attr("id");
			console.log(userChoice);
			determineWinner();
		}


		//Assign variable to keep track of the computer's choice
		var computerChoice;

		// Generates random computer choice
		function computerPlay() {
		  var randomNum = getRandomInt(0, 2);
		  var choices = ["rock", "paper", "scissors"];
		  
		  computerChoice = choices[randomNum];
		}

		// Generates random number from range
		function getRandomInt(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		// Demonstration of how to generate random computer choice.
		computerPlay();
		console.log(computerChoice);


		//Assign variable to keep track of outcome
        var outcome;
		
		//Write out logic for determining the winner
		function determineWinner() {

		if (userChoice == computerChoice) {
	    outcome = "It's a tie!";
	  	}
	  	else if (userChoice == "rock") {
	    	if (computerChoice == "paper") {
	    		outcome = "Computer wins!";
	    	}
	    	else {
	     	 outcome = "You win!";
	    	}
	  	}
		else if (userChoice == "paper") {
		    if (computerChoice == "scissors") {
		      outcome = "Computer wins!";
		    }
		    else {
		      outcome = "You win!";
		    }    
	  	}
		else if (userChoice == "scissors") {
		    if (computerChoice == "rock") {
		      outcome = "Computer wins!";
		    }
		    else {
		      outcome = "You win!";
		    }    
		}

		//Show results
		$(".results-container").show();

		$(".user-choice").text(userChoice);
		$(".computer-choice").text(computerChoice);
		$(".results").text(outcome); 
        
	}

	}

}


