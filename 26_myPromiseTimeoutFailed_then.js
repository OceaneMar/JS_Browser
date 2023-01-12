const sleepThrow = (milliseconds) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (milliseconds > 1999) {
            reject("error: temps supérieur à 1999 millisecondes.")
        } else {
            resolve(setTimeout(resolve, milliseconds))
        }
    }, milliseconds))
};

const btnSuccess = document.querySelector("button#success");
const btnFail = document.querySelector("button#fail");
let content = document.body;

btnSuccess.addEventListener("click", async () => {
    sleepThrow(1998)
        .then(() => {
            let p = document.createElement("p");
            p.classList.add("success");
            p.textContent = "J'ai réussi";
            content.appendChild(p);
        })
        .catch((e) => {
            console.log("une erreur est survenue:", e);
            let p = document.createElement("p");
            p.classList.add("error");
            p.textContent = "J'ai échoué";
            content.appendChild(p);
        })
});

btnFail.addEventListener("click", async () => {
    sleepThrow(2000)
        .then(() => {
            let p = document.createElement("p");
            p.classList.add("success");
            p.textContent = "J'ai réussi";
            content.appendChild(p);
        })
        .catch((e) => {
            console.log("une erreur est survenue:", e);
            let p = document.createElement("p");
            p.classList.add("error");
            p.textContent = "J'ai échoué";
            content.appendChild(p);
        })
});