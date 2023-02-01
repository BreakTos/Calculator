
const display = document.getElementById("display");
const button1 = document.getElementById("one");
button1.addEventListener("click", (e) => {
    display.textContent += button1.textContent;
});
