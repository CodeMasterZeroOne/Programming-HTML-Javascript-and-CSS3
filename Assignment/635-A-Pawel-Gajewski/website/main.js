
var x = document.getElementById("geolocationDemo");
var map, infoWindow;
var globalUser;
window.onload = onLoad(); 

function onLoad() {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  if (filename === 'index.html') {
    getLocation();
  }
  else if (filename === 'svgCanvas.html') {
    drawRectangle();
  }
  else if (filename === 'form.html') {
    hideContent();
  }
}

function drawRectangle() {
  var c = document.getElementById('newCanvas');
  if (c) {
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#7cce2b';
    ctx.fillRect(20, 20, 150, 80);
  }
}

function doCoolStuff() {
  var userName = document.getElementById("inputName").value;
  var userSurname = document.getElementById("inputSurname").value;
  var helloContent = document.getElementById("hideContent");
  document.getElementById("userName").innerHTML = userName + " !";
  document.getElementById("userSurname").innerHTML = userSurname + " !";
  helloContent.style.visibility = "visible";
}

function hideContent() {
  var helloContent = document.getElementById("hideContent");
  helloContent.style.visibility = "hidden";
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Your Latitude: " + position.coords.latitude +
    " and Longitude: " + position.coords.longitude + " check on this map. :)";

  var pos = position.coords.latitude + "," + position.coords.longitude;

  var mapsrc = "https://www.google.com/maps/embed/v1/place?q=" + pos + "&key=AIzaSyA-5px9IvD9XjxTBh5EpJwYRp4XC7zaMTg";


  document.getElementById("map").src = mapsrc;
}

//  function for web form "add item"
function addItemToList() {
  var list = document.querySelector('ul');
  var input = document.querySelector('input');
  var myItem = input.value;
  input.value = '';
  var listItem = document.createElement('li');
  var listText = document.createElement('span');
  var listBtn = document.createElement('button');
  list.style.width = "50%";
  //list.style.margin = "0 auto";
  listText.style.paddingRight = "20px"; // styling span created 
  listItem.style.padding = "10px"; // styling list item created
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.style.cssFloat = "right";
  listBtn.textContent = 'Remove';
  list.appendChild(listItem);
  listBtn.onclick = function (e) {
    list.removeChild(listItem);
  }
  input.focus();
}