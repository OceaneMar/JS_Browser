function tagSelector() { 
    return document.querySelector("button");
    //getElementsByTagName("button")[0];
    } 

  console.log(tagSelector());
  console.log(tagSelector().innerHTML);
   
tagSelector(); 

module.exports = tagSelector;