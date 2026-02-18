const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Функция для перемещения кнопки
function moveButton() {
    // Вычитаем ширину и высоту кнопки, чтобы она не улетала за край экрана
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Работает на ПК (наведение мышки)
noBtn.addEventListener("mouseover", moveButton);

// Работает на телефонах (касание пальцем)
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Чтобы экран не дергался при нажатии
    moveButton();
});

yesBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});