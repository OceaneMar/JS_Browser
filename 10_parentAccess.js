function parentAccess(node) { 
    return node.parentElement;
   } 

//const elt = document.getElementsById("menu");

//console.log(parentAccess(elt));
//console.log(parentAccess().innerHTML);

parentAccess(); 

module.exports = parentAccess;