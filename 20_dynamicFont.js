let inputEvent = document.querySelector("input#fontsize");

//console.log("inputEvent :", inputEvent);

inputEvent.addEventListener("input", (event) => {
    event.preventDefault() //<= si un formulaire est envoyé, empêche le rechargement complet de la page
    // Récupérer la valeur du champ pour la taille de la police
    let sizeFont = document.getElementById("fontsize").value;

    //Sélectionner les éléments et leur appliquer la size
    let eltClass = document.querySelectorAll(".controlled_fontsize");
    eltClass = [...eltClass];
    eltClass.forEach(i => i.style.fontSize = sizeFont + "px");
});