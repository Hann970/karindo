// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Menuu di klik
document.querySelector("#menuu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// ... kode lama kamu ...

// TAMBAHKAN DI SINI (DI BAWAH SENDIRI)
document.addEventListener("DOMContentLoaded", () => {
  // Kode animasi counter dan fix navigasi
});

// Click di luar side bar unutk menghilangkan nav
const menuu = document.querySelector("#menuu");

document.addEventListener("click", function (e) {
  if (!menuu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const navbarLogo = document.querySelector(".navbar-logo");

navbarLogo.onclick = (e) => {
  e.preventDefault(); // Mencegah pindah ke #

  // Feedback visual saat klik
  navbarLogo.style.transform = "scale(0.95)";

  setTimeout(() => {
    window.location.reload();
  }, 300); // Durasi delay yang pas dengan transisi CSS
};

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 100; // Semakin kecil angka, semakin cepat

  counters.forEach((counter) => {
    const animate = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/,/g, "");
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(animate, 20); // Delay antar angka
      } else {
        counter.innerText = target.toLocaleString() + "+";
      }
    };

    animate(); // Jalankan fungsi animasi
  });
});
