/**
 * Created by nbadji on 2015-11-27.
 */
"use strict";
function colorer_decolorer() {
    this.classList.toggle("survole"); // Inverse la classe survole
}
var les_listes = document.querySelectorAll("li");

for (var i = 0; i <= les_listes.length; i++) {
    les_listes[i].addEventListener("mouseover" , colorer_decolorer);
    les_listes[i].addEventListener("mouseout" , colorer_decolorer);
}