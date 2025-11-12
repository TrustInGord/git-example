//let userInput = 0; // Tracking user input - probably change to local variable in playerChoice function. 
// Probably not working.


//Need an input window with text box.
//	"Choose one from Rock, Paper, or Scissors'
//		Make input lowercase


function playGame() {
	let compScore = 0;
	userScore = 0;
	comScore = 0;

	let compMaxScore = 3;
	let userMaxScore = 3;

	console.log("Welcome to Paper, Rock, Scisors. The score is user: " + userScore + " comp: " + compScore);
	
	//Starts game round of Paper Rock scissors.

	while (userScore < userMaxScore && comScore < compMaxScore) {
		//Start The Game Round
		let gameScore = gameRound();
		
		//Get Result and assign points
		if (gameScore == "W") {
			userScore++;
		}
		else if (gameScore == "L") {
			comScore++;
		}
		else if (gameScore == "T") {
			// console.log("Tie");
		}
		else {
			console.log("Unknown game result");
		}

		/* Potential Switch Case 
		switch (userInput) {
		case "L":
			comScore++;
			break;
		case "W":
			userScore++;
			break;
		case "T":
			console.log("Tie");
			break;
		}
		*/
		console.log(`Score so far: Human: ${userScore} and Computer: ${comScore}`);
	}
	console.log("Game is now over.");
}

function gameRound() {
	
	let playChoice = playerChoice();

	let compGuess = compThrow();
	let smash = compThrow();

	let compThrow1 = compThrow();
	
	let victor = whoWon(playChoice, compGuess);
	
	return victor;
	
}

function compThrow() {
	const maxNumber = 3;
	let compNumber = Math.floor(Math.random() * maxNumber);
		if (compNumber == 0) {
			compChoice = "rock";
		}
		else if (compNumber == 1) {
			compChoice = "paper";
		}
		else {
			compChoice = "scissors";
		}

//	console.log("Comp Throw: " + compChoice + compNumber);
	return compChoice;
}

function playerChoice() {
	let gameControl = 0;
	let funTimeReturn;
	while (gameControl == 0) {
		let userInput = prompt("Rock, Paper, or Scissors", "Paper").toLowerCase();

//		console.log("User Choice: " + userInput);

// takes input of rock, paper, scisors from the user
// if rock, paper, or scissors put that as the return and leave while loop
// else ask user for input again

		if (userInput == "rock") {
			gameControl++;
			funTimeReturn = userInput;
		}
		else if (userInput == "paper") {
			gameControl++;
			funTimeReturn = userInput;
		}
		else if (userInput == "scissors") {
			gameControl++;
			funTimeReturn = userInput;
		}
		else {
			userInput = "error";
		}

	}
	return funTimeReturn;
}

function whoWon (choice, compChoice) {
//	console.log("Who won options: " + choice + " " + compChoice);

	if (choice == "scissors" && compChoice == "scissors") {
			console.log(`It is tied. You chose ${choice} and computer's choice is ${compChoice}`);
			return "T";
		}
	else if (choice == "scissors" && compChoice == "rock") {
		console.log(`You lose! You chose ${choice} and computer's choice is ${compChoice}`);
		return "L";
	}
	else if (choice == "scissors" && compChoice == "paper") {
		console.log(`You win! You chose ${choice} and computer's choice is ${compChoice}`);
		return "\W";
	}	
	else if (choice == "rock" && compChoice == "rock") {
		console.log(`It is tied. You chose ${choice} and computer's choice is ${compChoice}`);
		return "T";
	}
	else if (choice == "rock" && compChoice == "paper") {
		console.log(`You lose! You chose ${choice} and computer's choice is ${compChoice}`);
		return "L";
	}
	else if (choice == "rock" && compChoice == "scissors") {
		console.log(`You win! You chose ${choice} and computer's choice is ${compChoice}`);
		return "W";
	}	
	else if (choice == "paper" && compChoice == "paper") {
		console.log(`It is tied. You chose ${choice} and computer's choice is ${compChoice}`);
		return "T";
	}
	else if (choice == "paper" && compChoice == "scissors") {
		console.log(`You lose! You chose ${choice} and computer's choice is ${compChoice}`);
		return "L";
	}
	else if (choice == "paper" && compChoice == "rock") {
		console.log(`You win! You chose ${choice} and computer's choice is ${compChoice}`);
		return "W";
	}	
	else {
		console.log("Catch not made on choice.");
		return "T";
	}
}

let contGame = false;
	while (contGame == false) {

		// Start game with loop condition so they're prompted at end if they want to replay.
		playGame();

		let playAgain = prompt("Would you like to play again? (Y/N)", "Y").toLowerCase();
		if (playAgain == "y") {
			contGame = false;
		}
		else if (playAgain == "n") {
			contGame = true;
		}
		else {
			playAgain = "error";
		}
	}

	