var timeout;

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

function circleSqueezer() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleSqueezer();
circleMouseFollower();
firstPageAnim();

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

// document.querySelectorAll(".elem").forEach(function (elem) {
//   var rotate = 0;
//   var diffrot = 0;

//   elem.addEventListener("mouseleave", function (dets) {
//     gsap.to(elem.querySelector("img"), {
//       opacity: 0,
//       ease: Power3,
//       duration: 0.5,
//     });
//   });

//   elem.addEventListener("mousemove", function (dets) {
//     var diff = dets.clientY - elem.getBoundingClientRect().top;
//     diffrot = dets.clientX - rotate;
//     rotate = dets.clientX;
//     gsap.to(elem.querySelector("img"), {
//       opacity: 1,
//       ease: Power3,
//       top: diff,
//       left: dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//     });
//   });
// });






// document.addEventListener("DOMContentLoaded", function() {
//   var backgroundImages = [
//       'url("ixperience.png")',
//       'url("hudu.png")',
//       'url("Screenshot\ \(2\).png")'
//       // Add more image URLs as needed
//   ];

//   var currentIndex = 0;

//   function changeBackground() {
//       document.body.style.backgroundImage = backgroundImages[currentIndex];
//       currentIndex = (currentIndex + 1) % backgroundImages.length;
//   }

//   // Change background every 5 seconds (adjust as needed)
//   setInterval(changeBackground, 1000);
// });


// document.addEventListener("DOMContentLoaded", function () {
//   var backgroundImages = [
//     'url("ixperience.png")',
//     'url("hudu.png")',
//     'url("Screenshot (2).png")'
//     // Add more image URLs as needed
//   ];

//   var currentIndex = 0;
//   var body = document.body;

//   function changeBackground() {
//     var img = new Image();
//     img.src = backgroundImages[currentIndex];

//     img.onload = function () {
//       body.style.opacity = 0; // Fade out the body
//       setTimeout(function () {
//         body.style.backgroundImage = backgroundImages[currentIndex];
//         body.style.opacity = 1; // Fade in the body
//         currentIndex = (currentIndex + 1) % backgroundImages.length;
//       }, 500); // Adjust this delay as needed
//     };
//   }

//   // Change background every 5 seconds (adjust as needed)
//   setInterval(changeBackground, 5000);
// });
