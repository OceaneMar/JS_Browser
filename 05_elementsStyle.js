let btn = document.getElementsByTagName("button");
btn = [...btn]; // <= transformer un HTML Collection en tableau(pour faire un .map par ex)
btn.map(elt => elt.style.backgroundColor="red");