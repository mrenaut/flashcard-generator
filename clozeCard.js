//The constructor should throw or log an error when the cloze deletion does not appear in the input text.
//
//Use prototypes to attach these methods, wherever possible.

//var Basic = require("./basicCard.js");

function ClozeCard(text, cloze) {
	//this is the full sentence the user inputs 
	this.text = text;
	//this is the part of the sentence the user would like to be the answer.  it gets removed from the user's sentence to make a question out of a sentence.
	this.cloze = cloze;
	//this replaces the answer part of the user's input sentence with "..."
	this.partial = this.text.replace(this.cloze, "...")
//	
//	this.print = function() {
//		console.log(this);
//	}
	
}

//variable that creates example of the first cloze type card
var cloze1 = new ClozeCard(
	"George Washington was the first president of the United States.", "George Washington");
//
//// "George Washington"
//console.log(cloze1.cloze); 
//
//// " ... was the first president of the United States.
//console.log(cloze1.partial); 
//
//// "George Washington was the first president of the United States.
//console.log(cloze1.text);


//// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
//var brokenCloze = new ClozeCard("This doesn't work", "oops");
//
//console.log (brokenCloze);

//exports close card object
module.exports = ClozeCard;

