const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

const btn = document.querySelector("button");
let content = document.body;

btn.addEventListener("click", async () => {
    await sleep(2000);
    let p = document.createElement("p");
    p.textContent = "add-me";
    content.appendChild(p);
});