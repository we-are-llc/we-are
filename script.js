const targets = document.querySelectorAll(".fade-in");
const animTargets = document.querySelectorAll(".anim");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-animated");
      }
    });
  },
  {
    threshold: 0.2
  }
);

targets.forEach(target => observer.observe(target));
animTargets.forEach(target => animObserver.observe(target));
