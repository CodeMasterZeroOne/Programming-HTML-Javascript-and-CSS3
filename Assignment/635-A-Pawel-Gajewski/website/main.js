var userName;
var x = document.getElementById("geolocationDemo");

window.onload = drawRectangle();

function getSetUserName() {
}

function drawRectangle() {
        var c = document.getElementById('newCanvas');
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#7cce2b';
        ctx.fillRect(20, 20, 150, 80);
}
function something() {
    //userName = document.getElementById("field1").innerText;
    document.getElementById("labelUser").innerHTML = "Paweeeeee";
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
