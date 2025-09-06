import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  //seems like i dont need to define duration to from since they share the same duration
  gsap.fromTo(
    bar,
    { scaleY: 0.4 },
    {
      scaleY: 1.6,
      duration: 0.5,
      ease: "sine.inOut",
      delay: index * 0.1,
      repeat: -1,
      yoyo: true,
    }
  );
});
