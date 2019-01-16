function switchStatement() {
    var drink = prompt("What is your favorite drink?");
    switch (drink) {
        case 'water':
            var txt = "Water is healthy for you!";
            break;
        case 'beer':
            var txt = "Beer is not so healthy for you, not at all!";
            break;
        default:
            var txt = "Yeah, I dont like that.";
            break;
    }
    document.getElementById("userChoice").innerHTML = txt;
}