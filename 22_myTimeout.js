const btn = document.querySelector("button");

let content = document.body;

btn.addEventListener("click", () => {
    setTimeout(() => {  
        let p = document.createElement("p");
        p.textContent = "add-me";

        content.appendChild(p);
    }, 2000);
});
