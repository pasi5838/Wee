
const questions = [
  { q: "Hewan berkaki empat yang suka menggonggong?", a: "anjing" },
  { q: "Hewan yang hidup di air dan punya insang?", a: "ikan" },
  { q: "Hewan bertelinga panjang yang suka wortel?", a: "kelinci" },
  { q: "Hewan besar bertaring panjang dan berbulu lebat?", a: "singa" },
  { q: "Hewan yang terbang di malam hari dan bersuara 'hoo'?", a: "burung hantu" },
  { q: "Hewan yang punya belalai panjang?", a: "gajah" },
  { q: "Hewan yang loncat-loncat dan suka terbang di bunga?", a: "kupu-kupu" },
  { q: "Hewan kecil yang berdengung dan suka madu?", a: "lebah" },
  { q: "Hewan peliharaan yang mengeong?", a: "kucing" },
  { q: "Hewan yang suka melompat dan membawa anaknya di kantong?", a: "kanguru" },
  { q: "Hewan yang hidup di kutub dan berwarna putih?", a: "beruang kutub" },
  { q: "Hewan panjang tanpa kaki?", a: "ular" },
  { q: "Hewan dengan cangkang keras yang berjalan lambat?", a: "siput" },
  { q: "Hewan yang melilit mangsanya dan memakannya bulat-bulat?", a: "ular piton" },
  { q: "Hewan malam berbulu dan bersayap, suka buah?", a: "kelelawar" },
  { q: "Hewan bersirip dan bisa menyala di laut dalam?", a: "ikan lentera" },
  { q: "Hewan mirip kucing tapi liar dan berbulu belang?", a: "harimau" },
  { q: "Hewan kecil dengan banyak kaki dan bisa menggulung?", a: "kelabang" },
  { q: "Hewan lucu, makan bambu, dari Cina?", a: "panda" },
  { q: "Hewan laut besar yang menyemburkan air ke atas?", a: "paus" },
  { q: "Hewan laut bertentakel dan bisa menyemprotkan tinta?", a: "cumi-cumi" },
  { q: "Hewan hitam putih yang mirip zebra, tapi bukan?", a: "tapir" },
  { q: "Hewan yang bisa berubah warna?", a: "bunglon" },
  { q: "Hewan yang tinggal di rumah, bertugas menangkap tikus?", a: "kucing" },
  { q: "Hewan berbulu tebal dari Tibet?", a: "yak" },
  { q: "Hewan kecil dengan sayap yang mengganggu saat tidur?", a: "nyamuk" },
  { q: "Hewan cepat di padang pasir, punya punuk?", a: "unta" },
  { q: "Hewan darat tercepat?", a: "cheetah" },
  { q: "Hewan yang mirip kuda tapi belang-belang?", a: "zebra" },
  { q: "Hewan bertaring besar, simbol keberanian?", a: "singa" },
  { q: "Hewan yang suka bernyanyi dan berwarna cerah?", a: "burung" },
  { q: "Hewan amfibi yang melompat dan bersuara 'krok'?", a: "katak" },
  { q: "Hewan laut yang bisa memotong dengan capitnya?", a: "kepiting" },
  { q: "Hewan air bertubuh pipih dan suka di sungai?", a: "ikan lele" },
  { q: "Hewan hutan tropis yang suka bergelantungan?", a: "monyet" },
  { q: "Hewan berkaki banyak dan hidup di darat?", a: "lipan" },
  { q: "Hewan yang bisa menyemprot bau busuk?", a: "sigung" },
  { q: "Hewan lucu dari kutub, berbulu putih dan berenang?", a: "beruang kutub" },
  { q: "Hewan yang dikenal setia dan penjaga rumah?", a: "anjing" },
  { q: "Hewan berbulu putih yang biasa digembalakan?", a: "domba" },
  { q: "Hewan penghasil susu dan suka makan rumput?", a: "sapi" },
  { q: "Hewan laut cerdas dan suka melompat di sirkus?", a: "lumba-lumba" },
  { q: "Hewan laut berlengan banyak seperti bintang?", a: "bintang laut" },
  { q: "Hewan laut yang bisa berubah bentuk?", a: "gurita" },
  { q: "Hewan dengan dua kaki panjang dan bisa menendang kuat?", a: "burung unta" },
  { q: "Hewan kecil bersayap dan bersinar di malam hari?", a: "kunang-kunang" },
  { q: "Hewan yang punya mulut besar dan hidup di sungai?", a: "kuda nil" },
  { q: "Hewan cerdas dari laut dengan suara sonar?", a: "lumba-lumba" },
  { q: "Hewan kecil yang berjalan miring dan punya capit?", a: "kepiting" }
];

let index = 0;
let score = 0;

function displayQuestion() {
  document.getElementById("question").innerText = questions[index].q;
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase().trim();
  if (input === questions[index].a) {
    score++;
    document.getElementById("result").innerText = "Benar!";
    document.getElementById("score").innerText = "Skor: " + score;
    confettiExplosion();
    setTimeout(() => {
      index++;
      if (index < questions.length) {
        displayQuestion();
      } else {
        document.getElementById("question").innerText = "Game Selesai!";
      }
    }, 3000);
  } else {
    document.getElementById("result").innerText = "Salah, coba lagi!";
  }
}

function confettiExplosion() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}

function restartGame() {
  index = 0;
  score = 0;
  document.getElementById("score").innerText = "Skor: 0";
  displayQuestion();
}
window.onload = displayQuestion;
