// ease: "back.in"      // pulls backward first, then moves forward
// ease: "back.out"     // moves past the destination, then comes back
// ease: "back.inOut"   // combines both: pulls back, overshoots, settles
import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const indcator = document.querySelector(".indicator");
const tabRow = document.querySelector(".tab-row");

const updateIndicator = (element) => {
  const tabBounds = element.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();
  /* im getting the left cordinates of the element 
       and comparing it to the  the left corner of it father to know  where to use indacator  */
  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;
  gsap.to(indcator, {
    x: offset,
    width: width,
    duration: 1,
    ease: "back.out(1.7)", // the number is the overshoot amount , default is 1.70158
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    updateIndicator(tab);
  });
});
