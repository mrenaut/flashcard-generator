//dependencies ================================================================
// dependency for inquirer npm package 
'use strict';
var inquirer = require("inquirer");

// dependency for basic card javascript page
var Basic = require("./basicCard.js");

// dependency for cloze card javascript page
var ClozeCard = require("./clozeCard.js");


//global variablees and arrays ================================================
//array to hold clozecard flashcards
var clozeCards = [];

//array to hold basic flashcards
var basicCards = [
//	{
//	//sample question for testing	
//	front: "What is the third planet from the sun?",
//	back: "Earth"
//	},
];

// array to hold all flashcards
var allCards = [];

//counts number of correct questions
var correct = 0;

//counts number of incorrect guesses
var incorrect = 0;

//counts the cards up
var i = 0;


//functions ===================================================================
// function that presents user with a menu
var start = function () {
	inquirer.prompt([
		{
			type: "list",
			name: "menu",
			message: "Please select an option",
			choices: [
		"Make a basic flash card",
		"Make a cloze-delete flash card",
		"Test your knowledge using your basic flash cards",
		"Test your knowledge using your cloze-delete flash cards"
		
		//wishlist option if I have time		
		//"Test your knowledge using your all flash cards"
	    ]

	}]).then(function (answers) {

		//makes a command out of menu selection
		var userCommand = answers.menu;
		console.log(userCommand);

		//switch case to change what happens next based on user menu selection
		switch (userCommand) {
			// causes user command to make basic flash cards/makeBasic function to run
			case 'Make a basic flash card':
				//console log we're making a basic card for debugging
				makeBasic();
				break;

				// causes user command to make cloze-delete flash cards/makeBasic function to run
			case 'Make a cloze-delete flash card':
				makeClozeDelete();
				break;

				// causes user command to make run basic flash cards/runBasic function to run
			case 'Test your knowledge using your basic flash cards':
				runBasic();
				break;

				// causes user command to make run cloze-delete flash cards/runClozeDelete function to run
			case 'Test your knowledge using your cloze-delete flash cards':
				runClozeDelete();
				break;

				// causes user command to make run all flash cards/runAll function to run
			case 'Test your knowledge using your all flash cards':
				runAll();
				break;

		};
	});
}

//brings user to start menu
start();



//function to make a basic flash card
////===========================================================================

//if user selects make basic flash card instructions pop up for how to do it and input is requested for front of card then for back of card, constructs an object out of the input, then adds both to the basic quesions array
var makeBasic = function () {
	//	
	inquirer.prompt([
		{
			//asks for input for front of basic flash card
			type: "input",
			name: "front",
			message: "A basic flash card is simply a question for the front of the card with an answer for the back.  What would you like as a question for the front of the card?  Type question now.",
	},

		{
			//asks for answer for back of basic flash card
			type: "input",
			name: "back",
			message: "Please type the answer to your question now."
	},

		{
			//asks if user wants to make another card
			type: "confirm",
			name: "makeAnother",
			message: "Would you like to make another basic flashcard?",
			default: false
		},


]).then(function (answers) {

		//a function to push the cards into basicCards array
		var addBasicCard = new Basic(answers.front, answers.back);
		basicCards.push(addBasicCard);
		

		//if user selects make another, the makeBasic funtion starts over again
		if (answers.makeAnother == true) {
			makeBasic();
		}
		//if user does not want to make another card, user is returned to the main menu
		if (answers.makeAnother == false) {
			start();
			console.log(basicCards);
		}
	})


//end of make basic function
}

//need an onption on the switch case where if user selects cloze-delete flash card instructions pop up for how to do it and requests input for what the full sentence should be and then for what the missing part should be then adds both to the basic quesions array
////function to make a cloze-delete flash card
////=========================================================
var makeClozeDelete = function () {

	inquirer.prompt([
		{
			type: "input",
			name: "text",
			message: "A cloze-delete flash card is simply a sentence with a piece missing that the guesser would fill in as an answer later.  What would you like as a statement for your cloze-delete flash card? Type statement now.",
		},

		{
			type: "input",
			name: "cloze",
			message: "Please type the part of the sentence to be removed and guessed later as an answer."
		},

		{
			type: "confirm",
			name: "makeAnother",
			message: "Would you like to make another cloze-delete flashcard?",
			default: false
		},


	]).then(function (answers) {
		
		if (answers.text.includes(answers.cloze) === false) {
			console.log("error!");
		} else {  

		//a function to push the cards into basicCards array
		var addClozeCard = new ClozeCard(answers.text, answers.cloze);
		clozeCards.push(addClozeCard);
		}


		//if user selects make another, the makeBasic funtion starts over again
		if (answers.makeAnother == true) {
			makeClozeDelete();
		}
		//if user does not want to make another card, user is returned to the main menu
		if (answers.makeAnother == false) {
			start();
		}
		
		
	})



	//end of make clozeDelete function
}


////function to run basic flash cards
////===========================================================================


var runBasic = function () {
	//console.log(basicCards[0].front);
	//need for loop to run through all the cards

//======================================================================================================================================================

		//asks user question on flash card
		inquirer.prompt([
			{
				type: "input",
				name: "question",
				message: basicCards[i].front,
			
		},

	//after asking question on flash card, answer gets processed.
	]).then(function (answers) {
			//if user answers matches, message says correct and increments score
			if (answers.question == basicCards[i].back) {
				console.log("Correct!");
				correct++;
			} else {
				//if user answer does not match, message says incorrect and increments incorrect score	
				console.log("Incorrect!");
				incorrect++;
			}
			//displays answer for user
			console.log("The answer is " + basicCards[i].back);
			
			if (i<basicCards.length) {
				i++;	
				runBasic();
			}

			
			
		});
	//end of for loop	
	//};


//end of runBasic function
}





//need an option on the switch case where if user selects test your knowledge using your cloze-delete flash cards function will run that will present the front side of a cloze-delete card, take a user guess, then determine if it is right or wrong, change the score accordingly, then display the back side of the flash card. then after loop completes, show score and ask if they want to restart

////function to run cloze-delete flash cards
////=========================================================
var runClozeDelete = function () {
	inquirer.prompt([
		{
			type: "input",
			name: "question",
			message: clozeCards[i].partial,
		},


	]).then(function (answers) {

		if (answers.question == clozeCards[i].cloze) {
			console.log("Correct!");
			correct++;
		} else {
			console.log("Incorrect!");
			incorrect++;
		}
		console.log(clozeCards[i].cloze);
		console.log("your answer was: " + answers.question);
		console.log("The answer is " + clozeCards[i].cloze);
		
		if (i<clozeCards.length) {
			i++;	
			runClozeDelete();
		} else {
			console.log("correct: " + correct);
			console.log("incorrect: " + incorrect);
		}

	})
}



//need an option on the switch case where if user selects test your knowledge using all flash cards function will run that will present the front side of a cloze-delete card, take a user guess, then determine if it is right or wrong, change the score accordingly, then display the back side of the flash card. then after loop completes, show score and ask if they want to restart
////function to run all flash cards
//wishlist option if I have time	
////=========================================================================
//var runAll = function () {
//	console.log("still building this part");
//}
