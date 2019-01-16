function promptBox() {
    var person = prompt("Please enter your name", "Harry Potter");

    if (person == null || person == "") {
      txt = "Enter your name please";
    } else {
      txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("userAnswer").innerHTML = txt;
}