function parentAccess(node) { 
    return node.parentElement;
   } 

//console.log(parentAccess("p.x-wing"));
//console.log(parentAccess().innerHTML);

parentAccess(); 

module.exports = parentAccess;