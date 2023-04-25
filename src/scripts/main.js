import { gsap } from "gsap";

const btSliderNext = document.querySelector(".slider__btn--droite");
const btSliderPrev = document.querySelector(".slider__btn--gauche");
const quantiteImg = document.querySelectorAll('.block__img').length;

let offsetSlider = 0 

btSliderNext.addEventListener("click", () => {
    if (Math.abs(offsetSlider) < Math.abs(quantiteImg * setItemSize() - setItemSize() * 2) && setItemSize() == 510) {
        offsetSlider -= setItemSize()
        gsap.to(".container__blocks-img", {x: offsetSlider, duration: 0.3})
    }

    if(setItemSize() == 330){
        if (Math.abs(offsetSlider) < Math.abs(quantiteImg * setItemSize() - setItemSize())) {
            offsetSlider -= setItemSize()
            gsap.to(".container__blocks-img", {x: offsetSlider, duration: 0.3})
        }
    }
})

btSliderPrev.addEventListener("click", () => {
    if (offsetSlider != 0) {
        offsetSlider += setItemSize()
        gsap.to(".container__blocks-img", {x: offsetSlider, duration: 0.3})
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