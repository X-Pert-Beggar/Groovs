import { gsap } from "gsap";

"use strict";

const btSliderNext = document.querySelector(".slider__btn--droite");
const btSliderPrev = document.querySelector(".slider__btn--gauche");
const quantiteImg = document.querySelectorAll('.block__img').length;

const btAudita = document.querySelector(".step--a");
const btAuditb = document.querySelector(".step--b");
const btAuditc = document.querySelector(".step--c");

const docAudita = document.querySelector(".balimg--a");
const docAuditb = document.querySelector(".balimg--b");
const docAuditc = document.querySelector(".balimg--c");

const burgerNav = document.querySelector('.burger__page');
const burgerBtn = document.querySelector('.iconburger');
const burgerExitBtn = document.querySelector('.burger__return');


function burgerClick() {
    gsap.to(".burger__page", { left: "0%" });
    console.log('enter')
}

function burgerExit() {
    gsap.to(".burger__page", { left: "100%" });
    console.log('exit')
}


burgerBtn.addEventListener("click", burgerClick);
burgerExitBtn.addEventListener("click", burgerExit);




if (btAudita) {

    btAudita.addEventListener("click", (e) => {
        docAudita.classList.remove("hidden");
        docAuditb.classList.add("hidden");
        docAuditc.classList.add("hidden");
        btAudita.classList.add("select");
        btAuditb.classList.remove("select");
        btAuditc.classList.remove("select");
    });
};

if (btAuditb) {

    btAuditb.addEventListener("click", (e) => {
        docAudita.classList.add("hidden");
        docAuditb.classList.remove("hidden");
        docAuditc.classList.add("hidden");
        btAudita.classList.remove("select");
        btAuditb.classList.add("select");
        btAuditc.classList.remove("select");
    });
};


if (btAuditc) {

    btAuditc.addEventListener("click", (e) => {
        docAudita.classList.add("hidden");
        docAuditb.classList.add("hidden");
        docAuditc.classList.remove("hidden");
        btAudita.classList.remove("select");
        btAuditb.classList.remove("select");
        btAuditc.classList.add("select");
    });
};



let offsetSlider = 0

btSliderNext.addEventListener("click", () => {
    if (Math.abs(offsetSlider) < Math.abs(quantiteImg * setItemSize() - setItemSize() * 2) && setItemSize() == 510) {
        offsetSlider -= setItemSize()
        gsap.to(".container__blocks-img", { x: offsetSlider, duration: 0.3 })
    }

    if (setItemSize() == 330) {
        if (Math.abs(offsetSlider) < Math.abs(quantiteImg * setItemSize() - setItemSize())) {
            offsetSlider -= setItemSize()
            gsap.to(".container__blocks-img", { x: offsetSlider, duration: 0.3 })
        }
    }
})

btSliderPrev.addEventListener("click", () => {
    if (offsetSlider != 0) {
        offsetSlider += setItemSize()
        gsap.to(".container__blocks-img", { x: offsetSlider, duration: 0.3 })
    }
})

function setItemSize() {
    let imgWidth = document.querySelectorAll('.block__img')[0].clientWidth;
    let imgGap = 0;
    if (imgWidth == 300) {
        imgGap = 30
    }
    if (imgWidth == 450) {
        imgGap = 60
    }
    let itemWidth = imgWidth + imgGap
    return itemWidth
}