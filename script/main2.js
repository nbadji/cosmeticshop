/**
 * Created by nbadji on 2015-12-03.
 */
"use strict";

// je vais chercher l'element JS qui represente l'image du document
var mon_image=document.querySelector("img"); // c est un objet


// declaration d' une fonction JS
function ecoute_click_img(){
    console.log("ecoute_click_image est appelee!");
    // modifier la propriete src de l'objet global mon_img
    console.log(this);
    this.src="image/alternativ2.jpg";
}
//console.log(mon_image.src);// la proprite de l'image(string)
// equivalent a l'attribut html src



// on part de l'objet element (ici c est l image)
// je lui attache un"event listener"=="event handler"
//pour cele je precise:
//1- le type d'evenement(string)
//2- une reference sur la fonction (un nom de fonction)
//<ATTENTION> ne pas mettre des parentheses apres le nom de la fonction </ATTENTION>

mon_image.addEventListener("click",ecoute_click_img); // juste le nom de la fonction
