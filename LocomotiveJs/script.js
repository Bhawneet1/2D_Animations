// var main = document.querySelector("#main")
// var scroll = new LocomotiveScroll({
//   el:main,
//   //give wrapper or parent here
//   smooth:true,
// }) 

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp:0.1
    //0 to 1 smoothness level
});