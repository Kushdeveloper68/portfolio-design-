
    document.addEventListener("DOMContentLoaded", function () {
      const toggleBtn = document.getElementById("navToggle");
      const navLinks = document.querySelector(".nav-links");
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      const hero = document.querySelector(".hero");
      hero.addEventListener("mousemove", (e) => {
        const trail = document.createElement("div");
        trail.className = "trail";
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;

        const randomColor = `hsla(${Math.floor(Math.random() * 360)}, 100%, 70%, 0.6)`;
        trail.style.background = `radial-gradient(circle, ${randomColor}, transparent 60%)`;

        hero.appendChild(trail);

        setTimeout(() => {
          trail.remove();
        }, 1000);
      });
    });
  