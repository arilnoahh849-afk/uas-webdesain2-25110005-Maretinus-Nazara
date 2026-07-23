// Menangani Event Submit pada Form Kontak
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Mencegah reload halaman cetakan default
            
            // Mengambil value input form dari kontak.html
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const pesan = document.getElementById('pesan').value; // Mengambil isi pesan jika diperlukan
            
            // Menampilkan feedback interaktif JavaScript khas Pekanbaru
            alert(`Terima kasih Kak ${nama}!\nPesan Anda telah sukses dikirim ke tim Pairing Coffee. Kami akan membalas secepatnya melalui email: ${email}`);
            
            // Mereset isi form agar kembali kosong dan rapi
            contactForm.reset();
        });
    }
});
