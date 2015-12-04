/**
 * Created by agarand on 2015-12-04.
 */

"use strict";


var caroussel = null; // Element contenant le caroussel
var caroussel_items = null; // Elements individuels (les li) do caroussel

var duree_transition = 1000; // 1 seconde
var duree_affichage = 4000; // 4 secondes
var timer = null; // Le timer des setTimeout;

var sens_avant = 0; // Défilement vers l'avant
var sens_arriere = 1; // Défilement vers l'arrière

function montrer_elem(elem) {
    // Donner la classe "actif" à l'élément (ce qui permet de l'identifier au tour prochain)
    elem.classList.add('actif');
    // Afficher progressivement (avec jQuery) le nouvel élément
    $(elem).fadeIn(duree_transition);
}

/**
 * Cacher un élément
 */
function cacher_elem(elem) {
    // Oter la classe "actif" de l'élément
    elem.classList.remove('actif');
    // Le cacher progressivement
    $(elem).fadeOut(duree_transition);
}

/**
 * Fonction principale de chargement
 */
document.addEventListener('DOMContentLoaded', function () {
    caroussel = document.getElementsByClassName('caroussel')[0];
    console.log(caroussel);
    caroussel_items = caroussel.getElementsByClassName('img_caroussel');
    console.log(caroussel_items);
    for (var i = 0 ; i < caroussel_items.length ; i++) {
        $(caroussel_items[i]).fadeOut();
    }
    montrer_elem(caroussel_items[0]);
    // auto scroll
    timer = setTimeout(changer_img, duree_transition +  duree_affichage);
});

/**
 * Fonction pour retrouver l'indice d'élément dans la liste des éléments
 * @param elem
 * @returns {number}
 */
function getElementIndex(elem) {
    var index = 0;
    // Parcourir les noeuds frères précédents en ne comptant que ceux qui sont des Element (nodeType == 1)
    while ((elem = elem.previousSibling)) {
        if (1 == elem.nodeType) {
            index++;
        }
    }
    return index;
}

/**
 * Faire le changement d'un élément du slider
 */
function changer_img(sens){
    // Arrêter le timer : surtout pour les appels concurrents à la fonction
    if (null != timer) {
        clearTimeout(timer);
        timer = null;
    }
    if (typeof undefined == typeof sens) {
        sens = sens_avant;
    }
    // Rechercher l'élément courant (celui que a la classe "actif"
    var element_courant = caroussel.getElementsByClassName('actif')[0];
    var indice_courant = getElementIndex(element_courant);
    console.log(indice_courant);
    // Effacer doucement l'élément courant
    cacher_elem(caroussel_items[indice_courant]);
    // Incrémenter l'indice de 1 (ou le ramener à 0 si égal au dernier)
    var nb_items = caroussel_items.length;
    indice_courant = (indice_courant + nb_items + (sens == sens_avant ? 1 : -1)) % nb_items;
    montrer_elem(caroussel_items[indice_courant]);
    timer = setTimeout(function(){changer_img(sens)}, duree_transition + duree_affichage);
}


function colorer_decolorer() {
    this.classList.toggle("survole"); // Inverse la classe survole
}
var les_listes = document.querySelectorAll("li");

for (var i = 0; i <= les_listes.length; i++) {
    les_listes[i].addEventListener("mouseover" , colorer_decolorer);
    les_listes[i].addEventListener("mouseout" , colorer_decolorer);
}