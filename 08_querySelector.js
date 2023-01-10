//récupérer les boutons
let btn = document.querySelectorAll("button");

btn = [...btn]; //transformer en tableau

//boucle à travers le tableau de bouton pour récupérer la classe de chaque bouton
for (let i = 0; i < btn.length; i++) {
    let btnClass = btn[i].classList;
};

//Appliquer style à chaque bouton selon sa classe + priorité
if (btnClass.contains("danger")) {
    btn[i].style.backgroundColor = "red";
} else if (btnClass.contains("warning")) {
    btn[i].style.backgroundColor = "yellow";
} else if (btnClass.contains("secondary")) {
    btn[i].style.backgroundColor = "grey";
} else {
    btn[i].style.backgroundColor = "blue";
};