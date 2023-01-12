const btn = document.getElementById("clickme");
const div = document.querySelector(".content");

btn.addEventListener("click", () => {
    const addP = document.createElement("p");
    addP.id = "result";
    addP.textContent = "clicked";
    div.appendChild(addP);
});

//optimize it : 
/*
document.querySelector("button#clickme").addEventListener("click", () => {
    let p = document.createElement("p");
    p.id = "result";
    p.textContent = "clicked";
    document.querySelector("div.content").appendChild(p);
})
*/