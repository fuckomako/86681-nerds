var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".writeus-form");
var user_name = popup.querySelector("[name=user-name]");
var user_email = popup.querySelector("[name=user-email]");
var user_text = popup.querySelector("textarea");
var storage = localStorage.getItem("user_name");
						
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");

	if (storage) {
		user_name.value = storage;
		user_email.focus();
	} else {
		user_name.focus();
	}
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	popup.classList.remove("writeus-form-error");
});

form.addEventListener("submit", function(event) {
	if (!user_name.value || !user_email.value || !user_text.value) {
	event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("writeus-form-error");
	} else {
		localStorage.setItem("user_name", user_name.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
			popup.classList.remove("modal-content-show");
			popup.classList.remove("writeus-form-error");
		}
	}
});
	