const btn = document.getElementById("hoverme");
const div = document.querySelector(".content");

btn.addEventListener("mouseover", () => {
    const addP = document.createElement("p");
    addP.id = "result";
    addP.textContent = "hovered";
    div.appendChild(addP);
});