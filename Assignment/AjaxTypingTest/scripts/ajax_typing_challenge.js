// JavaScript source code

var Request1 = false;
var Request2 = false;
var Request3 = false;

var sentense1 = "";
var sentense2 = "";
var sentense3 = "";

var numberCorrect;

// create the XMLHttpRequest objects
Request1 = new XMLHttpRequest();
Request2 = new XMLHttpRequest();
Request3 = new XMLHttpRequest();

function startQuiz() {
	document.getElementById("inputField1").value = "";
	document.getElementById("inputField2").value = "";
	document.getElementById("inputField3").value = "";
	document.getElementById("trgtP").innerHTML = "";

	if (Request1) {
		var RequestObj1 = document.getElementById("trgtDiv1");
		Request1.open("GET", "challenge1.txt");
		// define the function to be called when the readyState property changes
		Request1.onreadystatechange = function() {
			// readyState 4 => request finished and response is ready
			// status 200   => successful HTTP requests
			if (Request1.readyState == 4 && Request1.status == 200) {
				RequestObj1.innerHTML = Request1.responseText;
				sentense1 = Request1.responseText;
			}
		}
		Request1.send(null);
	}

	if (Request2) {
		var RequestObj2 = document.getElementById("trgtDiv2");
		Request2.open("GET", "challenge2.txt");
		Request2.onreadystatechange = function() {
			if (Request2.readyState == 4 && Request2.status == 200) {
				RequestObj2.innerHTML = Request2.responseText;
				sentense2 = Request2.responseText;
			}
		}
		Request2.send(null);
	}

	if (Request3) {
		var RequestObj3 = document.getElementById("trgtDiv3");
		Request3.open("GET", "challenge3.txt");
		Request3.onreadystatechange = function() {
			if (Request3.readyState == 4 && Request3.status == 200) {
				RequestObj3.innerHTML = Request3.responseText;
				sentense3 = Request3.responseText;
			}
		}
		Request3.send(null);
	}
	
} // end of function startQuiz()

function gradeQuiz() {

	numberCorrect = 0;

	var result1 = document.getElementById("inputField1").value;
	var result2 = document.getElementById("inputField2").value;
	var result3 = document.getElementById("inputField3").value;
	var score = document.getElementById("trgtP");

	if (sentense1 == result1) {
		numberCorrect++
	}

	if (sentense2 == result2) {
		numberCorrect++
	}

	if (sentense3 == result3) {
		numberCorrect++
	}

	score.innerHTML = "To pass you must type at least 2 out " + "of 3 " + 
					  "sentences correctly. You got " + numberCorrect + " correct.";

} // end of function gradeQuiz()