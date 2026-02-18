const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 100);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});
