let btn = document.querySelectorAll(".btn");
btn = [...btn];
btn.forEach(elt => elt.style.backgroundColor = "blue");

btn = document.querySelectorAll(".secondary");
btn = [...btn];
btn.forEach(elt => elt.style.backgroundColor = "grey");

btn = document.querySelectorAll(".warning");
btn = [...btn];
btn.forEach(elt => elt.style.backgroundColor = "yellow");

btn = document.querySelectorAll(".danger");
btn = [...btn];
btn.forEach(elt => elt.style.backgroundColor = "red");