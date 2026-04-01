const toggle = document.getElementById("toggle");
const boo = document.getElementById("boo");
let isVisible = false;

toggle.addEventListener("change", () => {
  isVisible = !isVisible;
  if (isVisible) {
    boo.classList.remove("hide");
    boo.classList.add("show");
  } else {
    boo.classList.remove("show");
    boo.classList.add("hide");
  }
});
