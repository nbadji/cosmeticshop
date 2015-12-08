/**
 * Created by nbadji on 2015-12-03.
 */
"use strict";


var mon_image=document.querySelector("img");
function ecoute_click_img(){
    console.log("ecoute_click_img est appelee!");
    this.src="images/alternativ2.jpg";
}

mon_image.addEventListener("over",ecoute_click_img);