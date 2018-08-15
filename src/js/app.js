
var animationEnd = (function(el) {
    var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
    };

    for (var t in animations) {
        if (el.style[t] !== undefined) {
        return animations[t];
        }
    }
})(document.createElement('div'));
var headingButton = document.querySelector("#headingButton");
headingButton.addEventListener(animationEnd, function(){
    headingButton.classList.remove("fadeInUp");
    headingButton.classList.add("flash", "infinite", "slower", "animation-none");
    headingButton.style.animationDuration = "5s";
    headingButton.removeEventListener(animationEnd, function(){});
    
});
/////////////////SLIDESHOW//////////////////////////

import slideshow from "./slideshow";

slideshow("slideshow", "slideshow-root");
