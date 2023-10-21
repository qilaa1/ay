const lyrics = [
    {
        text: "...",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 1000
    },
    {
        text: "Kan Kuarungi tujuh laut samudra",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 5500
    },
    {
        text: "Kan ku daki pegunungan Himalaya",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 5000
    },
    {
        text: "apapun kan ku lakukan 'tuk dirimu sayangg",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 4000
    },
    {
        text: "Kau Penjaga Hatiku",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 3500
    },
    {
        text: "hoo..",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 2000
    },
    {
        text: "Karna bersamamu semua terasa indah",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 5500
    },
    {
        text: "Gundah gulana hatiku telah hancur semua",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 4500
    },
    {
        text: "janji ku takkan kulepas",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 1500
    },
    {
        text: "wahai",
        y: 450,
        fromCurrentPosition: false,
        delay: 600,
        duration: 600
    },
    {
        text: "kau bidadari ku dari surga",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 3500
    },
    {
        text: "Tuk Selamanyaa",
        y: 450,
        fromCurrentPosition: false,
        delay: 1000,
        duration: 3000
    },
];

let currentLine = 0;

function showLyrics() {
    if (currentLine < lyrics.length) {
        const line = lyrics[currentLine];
        const lyricsLine = document.querySelector(`#line${currentLine + 1}`);
        const lyricsSpan = lyricsLine.querySelector('span');
        const text = line.text;
        const y = line.y;
        const fromCurrentPosition = line.fromCurrentPosition;
        const delay = line.delay;
        const duration = line.duration;

        lyricsLine.style.opacity = 1;
        lyricsLine.style.top = `${y}px`;

        if (fromCurrentPosition) {
            lyricsLine.style.left = "50%";
            lyricsLine.style.transform = "translateX(-50%)";
        }

        lyricsSpan.textContent = `"${text}"`;

        setTimeout(() => {
            lyricsLine.style.opacity = 0;
            currentLine++;
            showLyrics();
        }, duration + delay);
    } else {
        // Setelah selesai, ulangi lirik pertama
        currentLine = 12;
        showLyrics();
    }
}

const audio = new Audio('Penjagahati.mp3');
audio.addEventListener('loadedmetadata', function () {
    // Mengatur waktu awal audio pada menit ke-1
    audio.currentTime = 165; // 60 detik setara dengan 1 menit
    audio.play();
    showLyrics();
});
