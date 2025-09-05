import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");
    gsap.to(button, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.2,
    duration: 0.2,
    ease: "sine.inOut",
  });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.2,
    ease: "sine.inOut",
  });
});

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
