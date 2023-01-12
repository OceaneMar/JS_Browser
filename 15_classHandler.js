const btn = document.getElementById("toggle");
const div = document.querySelector("div#modal");



btn.addEventListener("click", () => {
    div.classList.toggle("is-open");   
});