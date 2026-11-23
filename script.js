
const tombol = document.getElementById("tombolDetail");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function() {
    pesan.textContent =
        "Kami menantikan kehadiran Anda di acara kami. Sampai bertemu!";
});

const tanggalAcara = new Date("2026-12-12T09:00:00+07:00").getTime();

function hitungMundur() {
    const sekarang = new Date().getTime();
    const selisih = tanggalAcara - sekarang;

    if (selisih <= 0) {
        document.querySelector(".countdown").innerHTML =
            "<h3>Acara telah dimulai!</h3>";
        return;
    }

    document.getElementById("hari").textContent =
        Math.floor(selisih / (1000 * 60 * 60 * 24));

    document.getElementById("jam").textContent =
        Math.floor((selisih / (1000 * 60 * 60)) % 24);

    document.getElementById("menit").textContent =
        Math.floor((selisih / (1000 * 60)) % 60);

    document.getElementById("detik").textContent =
        Math.floor((selisih / 1000) % 60);
}

hitungMundur();
setInterval(hitungMundur, 1000);

const formRSVP = document.getElementById("formRSVP");

formRSVP.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("namaTamu").value;
    const kehadiran = document.getElementById("kehadiran").value;
    const hasil = document.getElementById("hasilRSVP");

    hasil.textContent =
        "Terima kasih, " + nama +
        ". Konfirmasi Anda: " + kehadiran + ".";
});

const tombolWhatsApp = document.getElementById("bagikanWhatsApp");

tombolWhatsApp.addEventListener("click", function(event) {
    event.preventDefault();

    const pesanUndangan =
        "Anda diundang ke Seminar Mahasiswa!\n\n" +
        "Tanggal: 12 Desember 2026\n" +
        "Waktu: 09.00 WIB\n" +
        "Tempat: Aula Kampus\n\n" +
        "Kami menantikan kehadiran Anda.";

    const linkWhatsApp =
        "https://wa.me/?text=" + encodeURIComponent(pesanUndangan);

    window.open(linkWhatsApp, "_blank");
});



