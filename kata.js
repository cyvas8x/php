var kata = ["Jangan lupa makan",
  "Turu..",
  "Jangan lupa bersyukur",
  "ea",
  "Belajar memang melelahkan, namun akan lebih melelahkan lagi bila kita belajar dengan giat :)",
  '"Barangsiapa yang pergi untuk menuntut ilmu, maka dia telah termasuk golongan sabilillah (orang yang menegakkan agama Allah) hingga ia pulang kembali.” (HR. Tirmidzi).',
  '“Sesungguhnya dunia itu terlaknat, terlaknat segala isinya, kecuali zikir kepada Allah dan amalan-amalan ketaatan, demikian pula seorang yang alim atau yang belajar.” (HR.Tirmidzi)',
  '"Barangsiapa yang menempuh satu jalan untuk mendapatkan ilmu, maka Allah memudahkan baginya jalan menuju surga.” (HR.Muslim)',
  '“Mengapa kamu suruh orang lain (mengerjakan) kebaikan, sedang kamu melupakan dirimu sendiri, padahal kamu membaca al-kitab (taurat)? Maka tidaklah kamu berfikir” (Q.S. Al-baqoroh: 44)',
  "sk mikir..",
  "Opo yo?",
  "Bila gagal coba lagi, sampai kapan? sampai pegel..",
  "Kegagalan adalah proses menuju kesuksesan, ea",
  "Kegagalan terjadi karena terlalu banyak berencana tapi sedikit berpikir",
  "Tetap dijalan yang lurus kawan",
  "Stay halal kawan",
  "Tetap berada di jalan Allah kawan",
  "Perjalanan jauh lebih mudah jika kamu tidak membawa beban hidup",
  "Belajar adalah pintu menuju kesuksesan, sementara pintu dikelas adalah pintu untuk masuk kelas",
  "Refresh untuk lihat kata-kata lainnya",
  "Jangan berbohong hanya untuk candaan !!",
  '"Aku juga bercanda namun aku tetap berkata yang benar.” (HR. Thobroni)',
  '"Celakalah bagi yang berbicara lantas berdusta hanya karena ingin membuat suatu kaum tertawa. Celakalah dia, celakalah dia." (HR. Abu Daud no. 4990 dan Tirmidzi no. 3315)',
  '“Janganlah banyak tertawa karena banyak tertawa dapat mematikan hati.” (Shahih Al Jami’ no. 7435, dari Abu Hurairah)',
  "Berfikirlah positif",
  "Jangan lupa Sholat",
  "Jangan lupa Sholawat",
  "Jangan lupa Turu",
  "Kyoke wes akeh kata-kata hari ini, cukub yo",
  "Jangan suka bohong ya kawan",
  "tes",
  "Carilah <del>cinta,</del> kebahagiaan, dan kesuksesan di setiap langkahmu hari ini!",
  "Hidup itu penuh dengan pelajaran",
  "Jangan pernah menyerah pada kegagalan",
  "Aib Berasal dari salah, dosa yg dilakukan. Bertumpuknya dosa sama dengan menumpuk aib. Namun, ada waktu untuk memperbaiki",
  "Jaga ucapan, karena “Tiada suatu ucapan pun yang diucapkannya, kecuali di dekatnya ada malaikat pengawas yang selalu hadir.” (QS. Qaf: 18)",
  '“Barang siapa menutupi aib seorang, Allah akan menutupi aibnya di dunia dan akhirat” (HR Muslim)',
  "var getKata = kata[Math.random() * kata.length | 0]",
]
/* var getKata = kata[Math.floor(Math.random()*kata.length>>0)] */
var getKata = kata[Math.random() * kata.length | 0]

document.getElementById('teks').innerHTML = getKata