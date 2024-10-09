
const youtubr = document.getElementById("youtuber");
const instagraam = document.getElementById("instagram");
const Tiktok = document.getElementById("tiktok");
const github = document.getElementById("github"); 
const out = new Date();
const description = document.querySelector(".description");

description.innerHTML = ["<p>" + /// --------- DISINGKAT BIAR JELAS --------- ///
        "Hai Nama ku NexdyMC aku seorang kontent creator minecraft dan pembuat texture pack mini java dan bedrock" 
        + "</p> "];

function tanggal() {
    const tanggal = document.getElementById("tanggal");
    const out = new Date();
    const haritext = ["minggu", "Senin", "Selasa", "Rabu", "Kamis", "jumat", "sabtu"];
    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "juli", "Agustus", "September", "Oktober", "November", "desember"];
    const month = bulan[out.getMonth()];
    const hari = haritext[out.getDay()];
    const harinomer = String(out.getDate()).padStart(2, "0");
    const tahun = String(out.getFullYear()).padStart(2, "0");

    tanggal.textContent = hari + " " + harinomer + " " + month + " " + tahun ;
    tanggal.style.fontSize = '1.5rem' ;
}

function clock() {
    const clock = document.getElementById("clock");
    const out = new Date();
    const jam = String(out.getHours()).padStart(2, "0");
    const menit = String(out.getMinutes()).padStart(2, "0");
    const detik = String(out.getSeconds()).padStart(2, "0")

    clock.textContent = (jam + ':' + menit + ':' + detik);
    clock.style.fontSize = '1.5rem' ;
}
setInterval(tanggal, 1000);
setInterval(clock, 1000);
tanggal();
clock();

