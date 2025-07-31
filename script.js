// Logikanya sederhana:
// 1. Ambil elemen hamburger dan menu dari HTML.
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navbar-menu');

// 2. Beri 'pendengar acara' (event listener) pada hamburger.
// Jika hamburger di-klik, jalankan sebuah fungsi.
hamburger.addEventListener('click', () => {
    // 3. Fungsi ini akan menambah atau menghapus class 'active' 
    // pada elemen hamburger dan menu.
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});