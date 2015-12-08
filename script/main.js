"use strict";


var mon_image = document.getElementById("img7");
mon_image.addEventListener("click", click_img7);
function click_img7() {
    console.log("click_image");
    console.log(this);
    this.src = "images/img3.jpg";

}

function colorer() {
    this.classList.add("survole"); // Ajouter la classe survole
}

// Decolorer l'élément qui reçoit l'évenement
function decolorer() {
    this.classList.remove("survole"); // Retire la classe survole
}

// Va inverser la classe "survole" sur l'élément qui reçoit l'évenement
function colorer_decolorer() {
    this.classList.toggle("survole"); // Inverse la classe survole
}
var les_divs = document.querySelectorAll("div"); // Fournit l'ensemble des divs qui sont dans un div
console.log(les_divs); // La liste des divs qui répondent au sélecteur
console.log(les_divs.length); // Nombre d'éléments
console.log(les_divs[2]); // Le troisième élément div

for (var i = 0; i <= les_divs.length - 1; i++) {
    //les_divs[i] est le div qui est à l'indice i'
    les_divs[i].addEventListener("mouseover", colorer_decolorer);
    les_divs[i].addEventListener("mouseout", colorer_decolorer);
}
