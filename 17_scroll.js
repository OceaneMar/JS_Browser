const currentDate = new Date;
const dateTime = currentDate.toGMTString();

document.addEventListener("scroll", () => {
let contenant = document.body;

let p = document.createElement("p");
p.innerHTML = dateTime;

contenant.appendChild(p);
});