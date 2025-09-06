import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  scale: 0.8,
  delay: 0.2,
  stagger: 0.2, //will add delay between each animation. perfect for lists and grids.
  ease: "power2.out",
});

repeat.addEventListener("click", () => {
  animation.restart();
});
