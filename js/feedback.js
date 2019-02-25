var send_btn = document.querySelector(".write-us-btn");
var feedback = document.querySelector(".write-us");
var login = feedback.querySelector("[name=login]");
var email = feedback.querySelector("[name=email]");
var email_text = feedback.querySelector("textarea");
var storage_login = localStorage.getItem("login");
var storage_email = localStorage.getItem("email");
  send_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("modal-show-right");
  email_text.focus();
  if (storage_login || storage_email) {
  login.value = storage_login;
  email.value = storage_email;
  }
});

var feedback_close = document.querySelector(".feedback-close");
  feedback_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("modal-show-right");
  login.classList.remove("modal-error");
  email.classList.remove("modal-error");  
});

var form = feedback.querySelector("form");
  form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value) {
  evt.preventDefault();
  login.classList.add("modal-error");  
  email.classList.add("modal-error"); 
  } else {
  if (isStorageSupport) {
  localStorage.setItem("login", login.value);
  localStorage.setItem("email", email.value);
  }	
  }    
});

 var isStorageSupport = true;
 var storage_login, storage_email = "";  
  try {
  storage_login = localStorage.getItem("login");
  storage_email = localStorage.getItem("email");
  } catch (err) {
  isStorageSupport = false;
}

window.addEventListener("keydown", function (evt) {
  if (feedback.classList.contains("modal-show-right") ||
      map_popup.classList.contains("modal-show-left")) {
  if (evt.keyCode === 27) {   
  evt.preventDefault();
  feedback.classList.remove("modal-show-right");
  map_popup.classList.remove("modal-show-left");
  }
  }
});

var mini_map = document.querySelector(".map");
var map_popup = document.querySelector(".map-popup");
  mini_map.addEventListener("click", function (evt) {
  evt.preventDefault();  
  map_popup.classList.add("modal-show-left");
});

var map_close = document.querySelector(".map-close");
  map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show-left");
});	