//Онлайн-Карта Google
function initialize() {
    var x = 59.938726;
    var y = 30.322620;
    var mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
		disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var image = "img/map-marker.png";
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);


//Всплывающая форма
var link = document.querySelector(".map-btn");
var popup = document.querySelector(".feedback");
var form = document.querySelector(".feedback-form");
var close = popup.querySelector(".feedback-circle-btn");
var cancel = popup.querySelector(".feedback-cancel");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
    popup.classList.remove("feedback-error");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
            popup.classList.remove("feedback-error");
        }
    }
});

form.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !text.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});
