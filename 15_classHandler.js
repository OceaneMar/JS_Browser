const btn = document.getElementById("toggle");
const div = document.querySelector("#modal");



btn.addEventListener("click", () => {
    div.classList.toggle("is-open");   
});