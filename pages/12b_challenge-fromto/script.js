import gsap from "gsap";

const clickAnimation = (target) => {
  gsap.fromTo(
    target,
    { scale: 1 },
    {
      scale: 1.3,
      duration: 1,
      y: -20,
      rotation: 15,
      opacity: 0.7,
      ease: "sine.inOut",
    }
  );
};
