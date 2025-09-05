import gsap from "gsap";

gsap.to(".box", {
  y: -150,
  rotation: 360,
  background: "orange",
  borderRadius: "50%",
  scale: 0.5,
  duration: 2,
  repeat: -1,
  yoyo: true,
});
