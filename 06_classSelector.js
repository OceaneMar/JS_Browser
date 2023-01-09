function classSelector() { 
        return document.querySelectorAll("p.x-wing")[2].textContent;
    } 

  //console.log(classSelector());
  //console.log(classSelector().innerHTML);
   
classSelector(); 

module.exports = classSelector;