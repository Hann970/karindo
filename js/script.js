document.addEventListener("DOMContentLoaded", () => {
  // 1. Selector Elemen Utama
  const navbarNav = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#menuu");
  const navbarLogo = document.querySelector(".navbar-logo");
  const counters = document.querySelectorAll(".counter");
  const detailBtns = document.querySelectorAll(".detail-btn");

  // 2. Fungsi Klik Hamburger Menu (Pop Up Sidebar Mobile)
  if (hamburger && navbarNav) {
    hamburger.onclick = (e) => {
      navbarNav.classList.toggle("active");
      e.stopPropagation(); // Mencegah klik tembus ke elemen dokumen lain
    };

    // Klik di luar sidebar untuk menyembunyikan menu kembali
    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
      }
    });
  }

  // 3. Animasi Logo Karindo saat Diklik (Reload Halaman)
  if (navbarLogo) {
    navbarLogo.onclick = (e) => {
      e.preventDefault(); // Mencegah pindah ke #
      navbarLogo.style.transform = "scale(0.95)"; // Efek visual klik
      
      setTimeout(() => {
        window.location.reload();
      }, 300);
    };
  }

  // 4. Animasi Counter Angka Stats
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

  // 5. Inisialisasi Ulang Feather Icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // 6. Cek Status Login Pengguna (Menampilkan Nama User)
  const userData = JSON.parse(localStorage.getItem("loggedInUser"));
  if (userData) {
    const userIcon = document.getElementById("user");
    if (userIcon) {
      userIcon.innerHTML = `
        <span style="color:white; font-size:14px; font-weight:600; font-family:'Montserrat',sans-serif;">
          ${userData.name}
        </span>
      `;
    }
  }

  // 7. Proteksi Tombol Detail Lowongan Kerja (Harus Login)
  detailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentSelection = JSON.parse(localStorage.getItem("loggedInUser"));

      if (!currentSelection) {
        alert("Silakan login terlebih dahulu!");
        window.location.href = "login.html";
        return;
      }
      alert("Berhasil membuka detail lowongan!");
    });
  });
});