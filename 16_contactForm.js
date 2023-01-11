//récupérer les champs
let nameForm = document.getElementsByName("name")[0].value;
let ageForm = document.getElementsByName("age")[0].value;
let birthdateForm = document.getElementsByName("birthdate")[0].value;

//déclarer que NewP est le body de la page
let newP = document.body;

//variable p qui créé un <p>
let p = document.createElement("p");

//ajouter un ID et un texte à la variable p (qui est un <p>)
p.id="result";
p.textContent = `name: ${nameForm}, age: ${ageForm}, birthdate: ${birthdateForm}`;

//ajouter l'élément la variable p (notre <p>) au body
newP.appendChild(p);