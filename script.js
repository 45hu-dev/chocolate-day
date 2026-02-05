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
