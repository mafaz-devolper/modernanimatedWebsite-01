const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var main = document.querySelector("#main");
var crsr = document.querySelector("#minicircle");

main.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
});

function firstpageAnimation() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: "0",
      ease: Expo.easeInOut,
      duration: 2,
      delay1: -1,
      stagger: 1,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay1: -1,
      ease: Expo.easeInOut,
    });
}

firstpageAnimation();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffe = 0;


  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });




  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffe = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffe*0.5),
    });
  });
});
