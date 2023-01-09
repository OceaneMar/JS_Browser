let btn = document.querySelectorAll( "button.warning, button.danger, button.secondary, button" );

//console.log(btn);

btn.map(function(elt) {
    if (elt=elt.warning) {
        return elt.style.backgroundColor="red";
    } else {
        return elt.style.backgroundColor="blue";
    }
});
