import gsap from "gsap";

const showToastLoop = (targets, index) => {
  if (index >= targets.length) return;

  gsap.to(targets[index], {
    y: -120,
    opacity: 1,
    duration: 0.5,
    scale: 1,
    ease: "power2.out",
    onComplete: () => {
      gsap.to(targets[index], {
        delay: 2,
        x: -200,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        scale: 0.95,
        onComplete: () => {
          setTimeout(() => showToastLoop(targets, index + 1), 500);
        },
      });
    },
  });
};

const toasts = document.querySelectorAll(".toast");

showToastLoop(toasts, 0);
