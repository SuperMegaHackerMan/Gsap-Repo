import gsap from "gsap";

const cardFront = document.querySelector(".card-front");
const cardBack = document.querySelector(".card-back");
const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(cardFront, {
    duration: 0.5,
    rotateY: -180,
    ease: "power2.out",
  });
  gsap.to(cardBack, {
    duration: 0.5,
    rotateY: 0,
    ease: "power2.out",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(cardFront, {
    duration: 0.5,
    rotateY: 0,
    ease: "power2.out",
  });
  gsap.to(cardBack, {
    duration: 0.5,
    rotateY: 180,
    ease: "power2.out",
  });
});
