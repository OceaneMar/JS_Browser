function parentAccess(elt) { 
    return document.querySelectorAll(elt).parentNode.textContent;
   } 

console.log(parentAccess("p.x-wing"));
//console.log(parentAccess().innerHTML);

parentAccess(); 

module.exports = parentAccess;