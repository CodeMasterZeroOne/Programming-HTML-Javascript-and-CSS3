var userName;
var x = document.getElementById("geolocationDemo");
var map = document.getElementById("map");
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
  x.innerHTML = "Your Latitude: " + position.coords.latitude +
    " and Longitude: " + position.coords.longitude + " check on this map. :)";
    // var pos = {
    //   lat: position.coords.latitude,
    //   lng: position.coords.longitude
    // };

    // map.setPosition(pos)
    // map.setCenter(pos);
    // map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 6
    // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA-5px9IvD9XjxTBh5EpJwYRp4XC7zaMTg&q=Space+Needle,Seattle+WA"
}
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}

//  function for web form
function addItemToList() {
  var list = document.querySelector('ul');
  var input = document.querySelector('input');
  var myItem = input.value;
  input.value = '';
  var listItem = document.createElement('li');
  var listText = document.createElement('span');
  var listBtn = document.createElement('button');
  listItem.style.padding = "10px";
  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);
  listBtn.onclick = function (e) {
    list.removeChild(listItem);
  }
  input.focus();
}