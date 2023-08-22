const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signBtn = document.getElementById("sign-btn");

signBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    userName.value === "" ||
    email.value === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("please enter all fields!");
  } else if (password.value !== confirmPassword.value) {
    alert("Password doesn't match!");
    resetInput();
  } else {
    setLocalStorage();
  }
});

function setLocalStorage() {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}

function resetInput() {
  userName.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
}

const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const cEmail = document.getElementById("cEmail");
  const cPassword = document.getElementById("cPassword");
  var getEmail = localStorage.getItem("email", email.value);
  var getPwd = localStorage.getItem("password", password.value);
  if (getEmail === cEmail.value && getPwd === cPassword.value) {
    alert("Login Successfully");
  } else {
    alert("Invaild login");
  }
});
