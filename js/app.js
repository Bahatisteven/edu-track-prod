// 1. Student data object
const student = {
    name: "Jean Paul",
    class: "Level 3 Software Development",
    year: 2026
};

// 2. Utility: get time-based greeting
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
}

// 3. Utility: convert numeric grade to letter
function getGradeLetter(grade) {
    if (grade >= 90) return { letter: "A", css: "grade-a" };
    if (grade >= 80) return { letter: "B", css: "grade-b" };
    if (grade >= 70) return { letter: "C", css: "grade-c" };
    if (grade >= 60) return { letter: "D", css: "grade-d" };
    return { letter: "F", css: "grade-f" };
}

// 4. Update the DOM with student data
function initHomePage() {
    // Update name in hero
    const nameEl = document.getElementById("student-name");
    if (nameEl) {
        nameEl.textContent = student.name;
    }

    // Update greeting (if element exists)
    const greetEl = document.getElementById("greeting");
    if (greetEl) {
        greetEl.textContent = `${getGreeting()}, ${student.name}!`;
    }
}

// 5. Wait for DOM to load before running
document.addEventListener("DOMContentLoaded", initHomePage);
