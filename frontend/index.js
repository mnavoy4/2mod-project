const loginForm = document.querySelector("#login-form");
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const password = searchParams.get("password");
const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#confirm-password");
const createUserButton = document.querySelector("#new-user-form-submit");


createUserButton.addEventListener("click", function(event){
  if (newPassword.value != confirmPassword.value){
    alert("Your passwords do not match!");
    event.preventDefault();
  }
})