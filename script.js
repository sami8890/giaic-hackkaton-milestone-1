"use strict";
// Function to toggle visibility of the skills section
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const toggleSkillsButton = document.getElementById('toggle-skills');
    if (skillsSection && toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.style.display === "none" || !skillsSection.style.display) {
                skillsSection.style.display = "block";
            }
            else {
                skillsSection.style.display = "none";
            }
        });
    }
});
