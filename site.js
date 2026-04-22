const revealTargets = [...document.querySelectorAll(".section, .metrics article, .frame")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.14 }
);

revealTargets.forEach((node) => {
  node.classList.add("reveal");
  observer.observe(node);
});
