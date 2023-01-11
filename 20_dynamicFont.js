let inputEvent = document.getElementsByClassName("ex20")[0];

console.log("inputEvent :", inputEvent);

inputEvent.addEventListener("submit", (event) => {
    event.preventDefault()
    // Récupérer la valeur du champ pour la taille de la police
    let sizeFont = document.getElementById("fontsize").value;

    //Sélectionner les éléments et leur appliquer la size
    let eltClass = document.querySelectorAll(".controlled_fontsize");
    eltClass = [...eltClass];
    eltClass.map(i => i.style.fontSize = sizeFont + "px");
});