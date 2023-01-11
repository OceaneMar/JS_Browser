let inputEvent = document.getElementsByClassName("ex20");

console.log("inputEvent :" inputEvent);

inputEvent.addEventListener("submit", () => {

    // Récupérer la valeur du champ pour la taille de la police
let sizeFont = document.querySelector("#fontsize")[0].value;

//Sélectionner les éléments et leur appliquer la size
let eltClass = document.querySelectorAll(".controlled_fontsize");
eltClass = [...eltClass];
eltClass.map(i => i.style.fontSize = sizeFont + "px");
});

