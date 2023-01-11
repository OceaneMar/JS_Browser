//récupérer les champs
let nameForm = document.getElementsByName("name")[0].value;
let ageForm = document.getElementsByName("age")[0].value;
let birthdateForm = document.getElementsByName("birthdate")[0].value;

//ajouter le texte + valeurs champs dans un <p>
let newP = document.body;

let p = document.createElement("p");
p.id="result";
p.textContent = `name: ${nameForm}, age: ${ageForm}, birthdate: ${birthdateForm}`;

newP.appendChild(p);