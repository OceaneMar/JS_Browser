let btn1 = document.querySelectorAll(".btn");
btn1 = [...btn1];
btn1.map(elt => elt.style.backgroundColor = "blue");

let btn2 = document.querySelectorAll(".secondary");
btn2 = [...btn2];
btn2.map(elt => elt.style.backgroundColor = "grey");

let btn3 = document.querySelectorAll(".warning");
btn3 = [...btn3];
btn3.map(elt => elt.style.backgroundColor = "yellow");

let btn4 = document.querySelectorAll(".danger");
btn4 = [...btn4];
btn4.map(elt => elt.style.backgroundColor = "red");