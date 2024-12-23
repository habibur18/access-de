const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = "POWER BY ZENOR BD";
const fontSize = 10;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Translucent background
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff00"; // Green text
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0; // Reset drop to the top
    }
    drops[i]++;
  }
}

setInterval(draw, 35); // Draw every 35 milliseconds
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const audioPath = "./end.mp3";

function playAudioThreeTimes() {
  const audio = new Audio(audioPath);
  let playCount = 0;
  const maxPlays = 3;

  audio.addEventListener("ended", () => {
    playCount++;
    if (playCount < maxPlays) {
      audio.currentTime = 0;
      audio.play();
    }
  });

  audio.play().catch((error) => {
    console.error("Autoplay was prevented:", error);
  });
}

playAudioThreeTimes();

setInterval(playAudioThreeTimes, 300000);
