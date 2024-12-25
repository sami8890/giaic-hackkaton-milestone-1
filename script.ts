<<<<<<< HEAD
"use strict";

// Function to toggle visibility of the skills section
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills') as HTMLElement | null;
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLElement | null;

    if (skillsSection && toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.style.display === "none" || !skillsSection.style.display) {
                skillsSection.style.display = "block";
            } else {
                skillsSection.style.display = "none";
            }
        });
    }
});
=======
"use strict";

// Function to toggle visibility of the skills section
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills') as HTMLElement | null;
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLElement | null;

    if (skillsSection && toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsSection.style.display === "none" || !skillsSection.style.display) {
                skillsSection.style.display = "block";
            } else {
                skillsSection.style.display = "none";
            }
        });
    }
});
>>>>>>> 8badc3577689dc99cfac1708e3644180884955a1
