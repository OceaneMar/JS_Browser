const btn = document.getElementById("toggle");
const div = document.querySelector("#modal");

btn.addEventListener("click", () => {
    const addClass = document.createElement("p");
    
    div.appendChild(addClass);
});