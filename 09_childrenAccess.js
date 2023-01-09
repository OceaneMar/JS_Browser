function childrenAccess() { 
    return document.getElementById("menu").firstElementChild.textContent;
   } 

//console.log(childrenAccess());
//console.log(childrenAccess().innerHTML);

childrenAccess(); 

module.exports = childrenAccess;