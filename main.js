// dependency for inquirer npm package 
'use strict';
var inquirer = require("inquirer");

// dependency for basic card javascript page
var Basic = require("./basicCard.js");

// dependency for cloze card javascript page
var ClozeCard = require("./clozeCard.js");


// presents user with a menu
inquirer.prompt([
	{
		type: "list",
		name: "Menu",
		message: "Please select an option",
		choices: ["Make a basic flash card",
		"Make a cloze-delete flash card",
		"Test your knowledge using your basic flash cards",
		"Test your knowledge using your cloze-delete flash cards",
		"Test your knowledge using your all flash cards",
	    ]
		
}]).then(function (answers) {

//	// console logs user answer for debugging
//	userCommand = JSON.stringify(answers, null, '  ');
//	console.log(userCommand);
//	
	
	console.log (answers);
	
});

//
//var menuSelection = function () {
//	switch (userCommand) {
//
//			// causes user command to make basic flash cards/makeBasic function to run
//		case 'Make a basic flash card':
//			makeBasic();
//			//console log we're making a basic card for debugging
//			console.log("we're making a basic card!")
//			break;
//
//			// causes user command to make cloze-delete flash cards/makeBasic function to run
//		case 'Make a cloze-delete flash card':
//			makeClozeDelete();
//			break;
//
//			// causes user command to make run basic flash cards/runBasic function to run
//		case 'Test your knowledge using your basic 	flash cards':
//			runBasic();
//			break;
//
//			// causes user command to make run cloze-delete flash cards/runClozeDelete function to run
//		case 'Test your knowledge using your cloze-delete flash cards':
//			runClozeDelete();
//			break;
//
//			// causes user command to make run all flash cards/runAll function to run
//		case 'Test your knowledge using your all flash cards':
//			runAll();
//			break;
//
//				    }}
//	
	//need switch case to determine which function will run based on what option user selected on menu
	
	
	//need an option on switch case where if user selects basic flash card instructions pop up for how to do it and requests input for front of card then for back of card and adds both to the basic quesions array

	//need an onption on the switch case where if user selects cloze-delete flash card instructions pop up for how to do it and requests input for what the full sentence should be and then for what the missing part should be then adds both to the basic quesions array
	
	//need an option on the switch case where if user selects test your knowledge using your basic flash cards function will run that will present the front side of a basic card, take a user guess, then determine if it is right or wrong, change the score accordingly, then display the back side of the flash card. then after loop completes, show score and ask if they want to restart.
	
	//need an option on the switch case where if user selects test your knowledge using your cloze-delete flash cards function will run that will present the front side of a cloze-delete card, take a user guess, then determine if it is right or wrong, change the score accordingly, then display the back side of the flash card. then after loop completes, show score and ask if they want to restart

	



//function to make a basic flash card
//=========================================================
var makeBasic = function () {
	
inquirer.prompt([
	{
		type: "input",
		name: "front",
		message: "A basic flash card is simply a question for the front of the card with an answer for the back.  What would you like as a question for the front of the card?  Type question now.",
		
	} 
	
	{
	
	}

]).then(function (answers) {

	// puts out answer that user chose on menu
	console.log(JSON.stringify(answers, null, '  '));
		
	});
}

//makeBasic ();
//
////function to make a cloze-delete flash card
////=========================================================
//var makeClozeDelete = function () {
//
//}
//
////function to run basic flash cards
////=========================================================
//var runBasic = function () {
//
//}
//
////function to run cloze-delete flash cards
////=========================================================
//var runClozeDelete = function () {
//
//}
//
////function to run all flash cards
////=========================================================
//var runAll = function () {
//
//}


////function to select which command from the menu we will execute
//=========================================================
//var menuChoice1 = function() {
//	switch ()
//}