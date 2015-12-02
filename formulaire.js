/**
 * Created by rgueye on 2015-11-27.
 */
"use strict";

function verif_formulaire()
{
    if(document.formulaire.nom.value == "")  {
        alert("Veuillez entrer votre nom!");
        document.formulaire.nom.focus();
        return false;
    }
    if(document.formulaire.lieu.value == "") {
        alert("Veuillez entrer votre lieu de résidence!");
        document.formulaire.lieu.focus();
        return false;
    }
    if(document.formulaire.courriel.value == "") {
        alert("Veuillez entrer votre adresse électronique!");
        document.formulaire.courriel.focus();
        return false;
    }
    if(document.formulaire.courriel.value.indexOf('@') == -1) {
        alert("Ceci n'est pas une adresse électronique!");
        document.formulaire.courriel.focus();
        return false;
    }
    if(document.formulaire.age.value == "") {
        alert("Veuillez entrer votre âge!");
        document.formulaire.age.focus();
        return false;
    }
    var a = 1;
    for(i=0;i<document.formulaire.age.value.length;++i)
        if(document.formulaire.age.value.charAt(i) < "0"
            || document.formulaire.age.value.charAt(i) > "9")
            i = -1;
    if(a == -1) {
        alert("Cette mention n'est pas un nombre!");
        document.formulaire.age.focus();
        return false;
    }
}

var somme = 0;
for (var i = nb ; i <= dernier_entier ; i++) {
    somme = somme + i ; // somme += i
}



var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}
