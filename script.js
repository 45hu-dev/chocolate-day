const p = new URLSearchParams(window.location.search);

if (p.get("to")) {
  document.getElementById("form").classList.add("hide");
  document.getElementById("show").classList.remove("hide");
  document.getElementById("title").innerText = "🍫 For " + p.get("to");
  document.getElementById("text").innerText =
    p.get("from") + " says:\n" + p.get("msg");
}

function makeLink() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let msg = document.getElementById("msg").value;

  let link = location.origin + location.pathname +
    `?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&msg=${encodeURIComponent(msg)}`;

  navigator.clipboard.writeText(link);
  alert("Link copied 🍫");
}
/* ================= CHOCOLATE OPEN ANIMATION ================= */
function openChoco() {
  const choco = document.querySelector(".chocolate");
  if (choco) {
    choco.classList.toggle("open");
  }
}

/* ================= CHOCOLATE + CANDY RAIN ================= */
const rain = document.getElementById("rain");

if (rain) {
  const items = ["choco.png", "candy.png"];

  for (let i = 0; i < 20; i++) {
    let img = document.createElement("img");
    img.src = items[Math.floor(Math.random() * items.length)];
    img.className = "drop";
    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = (3 + Math.random() * 5) + "s";
    img.style.opacity = Math.random();
    rain.appendChild(img);
  }
}
