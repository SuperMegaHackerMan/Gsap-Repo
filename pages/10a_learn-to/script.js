import gsap from "gsap";

//every sap methods have callbacks
const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    duration: 0.5,
    scale: 1,
    ease: "power2.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 2.5,
        y: 0,
        opacity: 0,
        duration: 0.5,
        scale: 0.95,
        onComplete: () => {
          setTimeout(showToastLoop, 1000);
        },
      });
    },
  });
};

showToastLoop();
