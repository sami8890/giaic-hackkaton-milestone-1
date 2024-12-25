document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  const toggleButton = document.getElementById("toggle-skills");

  if (skillsSection && toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isHidden =
        skillsSection.style.display === "none" || !skillsSection.style.display;

      skillsSection.style.display = isHidden ? "block" : "none";
      skillsSection.style.opacity = "0";

      if (isHidden) {
        void skillsSection.offsetWidth;
        skillsSection.animate(
          [
            { opacity: 0, transform: "translateY(-20px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 300,
            easing: "ease-out",
            fill: "forwards",
          }
        );
      }
    });
  }

  // Add scroll reveal animation
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.5s ease-out";
    observer.observe(section);
  });
});
