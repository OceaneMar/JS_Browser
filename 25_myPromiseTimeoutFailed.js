const sleepError = (milliseconds) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (milliseconds > 1999) {
            reject("error")
        } else {
            resolve(setTimeout(resolve, milliseconds))
        }
    }, milliseconds))
};

const btn = document.querySelector("button");
let content = document.body;

btn.addEventListener("click", async () => {
    await sleepError(2000);
    let p = document.createElement("p");
    p.textContent = "add-me";
    content.appendChild(p);
});

module.exports = sleepError;