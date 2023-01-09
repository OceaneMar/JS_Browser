//récupérer les boutons
let btn = document.querySelectorAll( "button.warning, button.danger, button.secondary, button" );

btn = [...btn]; //transformer en tableau

console.log(btn);


btn.map(elt => {
    if (elt = elt[3]) {
        return elt.style.backgroundColor="red";
    } else {
        return elt.style.backgroundColor="blue";
    }
});
