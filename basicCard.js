//constructor for basic flash card question
function Basic(front, back) {
	this.front = front;
	this.back = back;
//	this.print = function() {
//		console.log(this);
//	}
}

//variable that creates example of the first basic type card
//var basic1 = new Basic (
//"Who was the first president of the United States:", "George Washington");
//;

//console logging for debugging 
//console.log(basic1.front);
//console.log(basic1.back);


///variable that creates a new basic flash card
//var basicQues1 = new Basic(
//	"who is your mama?", "John Adams");
//
//


//exports Basic object
module.exports = Basic;