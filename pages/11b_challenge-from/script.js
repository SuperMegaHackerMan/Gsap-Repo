import gsap from "gsap";

// const cardFront = document.querySelector(".card-front");
// const cardBack = document.querySelector(".card-back");
// const card = document.querySelector("#card");

// card.addEventListener("mouseenter", () => {
//   gsap.to(cardFront, {
//     duration: 0.5,
//     rotateY: -180,
//     ease: "power2.out",
//   });
//   gsap.to(cardBack, {
//     duration: 0.5,
//     rotateY: 0,
//     ease: "power2.out",
//   });
// });

// card.addEventListener("mouseleave", () => {
//   gsap.to(cardFront, {
//     duration: 0.5,
//     rotateY: 0,
//     ease: "power2.out",
//   });
//   gsap.to(cardBack, {
//     duration: 0.5,
//     rotateY: 180,
//     ease: "power2.out",
//   });
// });

const card = document.getElementById("card");
let flipped = false;

card.addEventListener("mouseenter", () => {
  if (!flipped) {
    gsap.from(card, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    gsap.to(card, {
      rotationY: 180,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    flipped = true;
  }
});

card.addEventListener("mouseleave", () => {
  if (flipped) {
    gsap.from(card, {
      rotationY: 180,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    gsap.to(card, {
      rotationY: 0,
      duration: 0.8,
      ease: "power2.inOut",
      transformOrigin: "center center",
    });
    flipped = false;
  }
});
