const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

function showLogin() {
  loginForm.classList.add("active-form");
  registerForm.classList.remove("active-form");

  loginBtn.classList.add("active");
  registerBtn.classList.remove("active");
}

function showRegister() {
  registerForm.classList.add("active-form");
  loginForm.classList.remove("active-form");

  registerBtn.classList.add("active");
  loginBtn.classList.remove("active");
}

registerBtn.addEventListener("click", showRegister);
loginBtn.addEventListener("click", showLogin);

goRegister.addEventListener("click", showRegister);
goLogin.addEventListener("click", showLogin);

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Login berhasil!");
  window.location.href = "index.html";
});

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Pendaftaran berhasil!");
  showLogin();
});