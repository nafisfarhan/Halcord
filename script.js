document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'none';
});




document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  const startCountAnimation = (entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";
      const increment = target / 100; // Adjust speed by changing 100

      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue < target) {
          currentValue += increment;
          counter.textContent = Math.floor(currentValue) + suffix;
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + suffix; // Ensure the final value is exact
        }
      };

      updateCounter();
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          counter.textContent = "0"; // Reset counter for restart
          startCountAnimation(entry); // Trigger animation
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
  );

  counters.forEach((counter) => observer.observe(counter));
});
