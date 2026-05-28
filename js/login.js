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



// ==========================
// REGISTER
// ==========================

registerForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // cek email sudah ada atau belum
  const userExists = users.find(user => user.email === email);

  if (userExists) {
    alert("Email sudah terdaftar!");
    return;
  }

  // simpan user baru
  users.push({
    name,
    email,
    password
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Pendaftaran berhasil!");

  registerForm.reset();

  showLogin();
});



// ==========================
// LOGIN
// ==========================

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // cari user
  const validUser = users.find(
    user => user.email === email && user.password === password
  );

  if (!validUser) {
    alert("Email atau password salah!");
    return;
  }

  // simpan session login
  localStorage.setItem("loggedInUser", JSON.stringify(validUser));

  alert("Login berhasil!");

  window.location.href = "index.html";
});