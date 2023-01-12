let inputEvent = document.querySelector("input#fontsize");

console.log("inputEvent :", inputEvent);

inputEvent.addEventListener("input", (event) => {
    event.preventDefault()
    // Récupérer la valeur du champ pour la taille de la police
    let sizeFont = document.getElementById("fontsize").value;

    //Sélectionner les éléments et leur appliquer la size
    let eltClass = document.querySelectorAll(".controlled_fontsize");
    eltClass = [...eltClass];
    eltClass.map(i => i.style.fontSize = sizeFont + "px");
});