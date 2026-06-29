const navLinks = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section-items');

// navbar menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);

        // Efek fade out semua section
        sections.forEach(s => {
            s.style.opacity = '0';
            s.style.transform = 'scale(0.8)';
        });

        // Tunggu animasi fade out selesai (500ms)
        setTimeout(() => {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            // Munculkan kembali (fade in)
            sections.forEach(s => {
                s.style.opacity = '1';
                s.style.transform = 'scale(1)';
            });
        }, 300);
    });
});

// // function tanggal 
// function tanggal() {
//     const out = new Date();
//     const tanggal = document.getElementById("tanggal");
//     const haritext = ["Minggu ", "Senin ", "Selasa ", "Rabu ", "Kamis ", "Jumat ", "Sabtu "];
//     const bulan = [" Januari ", " Februari ", " Maret ", " April ", " Mei ", " Juni ", " juli ",
//                    " Agustus ", " September ", " Oktober ", " November ", " desember "];
//     const month = bulan[out.getMonth()];
//     const hari = haritext[out.getDay()];
//     const harinomer = String(out.getDate()).padStart(2, "0");
//     const tahun = String(out.getFullYear()).padStart(2, "0");
//     tanggal.textContent =  (hari + harinomer + month + tahun);
//     tanggal.style.fontSize = '1.5rem' ;
//     // tanggal.style.cursor = 'default';
// }
// setInterval(tanggal, 1000);
// tanggal();

// // function waktu
// function clock() {
//     const out = new Date();
//     const clock = document.getElementById("clock");
//     const jam = String(out.getHours()).padStart(2, "0");
//     const menit = String(out.getMinutes()).padStart(2, "0");
//     const detik = String(out.getSeconds()).padStart(2, "0");
//     clock.textContent = (jam + ':' + menit + ':' + detik);
//     clock.style.fontSize = '1.5rem' ;
//     // clock.style.cursor = 'default';
// }
// setInterval(clock, 1000);
// clock();
