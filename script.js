const tombolWhatsApp = document.querySelector('.tombol-whatsapp');

tombolWhatsApp.addEventListener('mouseover', () => {
  tombolWhatsApp.style.backgroundColor = '#20c997'; // Ubah warna latar saat mouse hover
});

tombolWhatsApp.addEventListener('mouseout', () => {
  tombolWhatsApp.style.backgroundColor = '#25d366'; // Kembalikan warna latar semula
});

// Tambahan: Menampilkan notifikasi saat tombol diklik
tombolWhatsApp.addEventListener('click', () => {
  alert('Terima kasih telah menghubungi kami!');
