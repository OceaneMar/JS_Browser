const btn = document.getElementById("clickme");
const div = document.querySelector(".content");

btn.addEventListener("click", () => {
    const addP = document.createElement("p");
    addP.id = "result";
    addP.textContent = "clicked";
    div.appendChild(addP);
});