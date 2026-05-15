// js/calculator.js

// --- Calculate weighted average ---
// Weighted: each grade is multiplied by its credit weight
// Formula: sum(grade * credits) / sum(credits)
function calculateWeightedAverage(subjectList) {
    if (subjectList.length === 0) return 0;

    const totalWeighted = subjectList.reduce(function(sum, s) {
        return sum + (s.grade * s.credits);
    }, 0);

    const totalCredits = subjectList.reduce(function(sum, s) {
        return sum + s.credits;
    }, 0);

    return (totalWeighted / totalCredits).toFixed(2);
}

// --- Convert percentage to GPA (4.0 scale) ---
function calculateGPA(average) {
    const avg = parseFloat(average);
    if (avg >= 90) return 4.0;
    if (avg >= 85) return 3.7;
    if (avg >= 80) return 3.3;
    if (avg >= 75) return 3.0;
    if (avg >= 70) return 2.7;
    if (avg >= 65) return 2.3;
    if (avg >= 60) return 2.0;
    return 0.0;
}

// --- Render results to DOM ---
function renderCalculator() {
    const average = calculateWeightedAverage(subjects);
    const gpa     = calculateGPA(average);
    const grade   = getGradeLetter(parseFloat(average)); // from app.js
    const credits = subjects.reduce((sum, s) => sum + s.credits, 0);

    // Update text elements
    const avgEl = document.getElementById("avg-display");
    const gpaEl = document.getElementById("gpa-display");
    const grEl  = document.getElementById("grade-display");
    const crEl  = document.getElementById("credits-display");

    if (avgEl) avgEl.textContent = average + "%";
    if (gpaEl) gpaEl.textContent = gpa.toFixed(1);
    if (grEl)  grEl.textContent  = grade.letter;
    if (crEl)  crEl.textContent  = credits;

    // Update animated progress bar
    const bar = document.getElementById("progress-bar");
    if (bar) {
        // Width is set via JS after a short delay so CSS transition plays
        setTimeout(function() {
            bar.style.width = average + "%";
        }, 200);
    }

    // Render table rows
    const tbody = document.getElementById("calculator-body");
    if (tbody) {
        tbody.innerHTML = "";
        subjects.forEach(s => {
            const row = document.createElement("tr");
            row.style.borderBottom = "1px solid var(--border)";
            row.innerHTML = `
                <td style="padding: 12px;">${s.name}</td>
                <td style="padding: 12px;">${s.grade}%</td>
                <td style="padding: 12px;">${s.credits}</td>
                <td style="padding: 12px;">${(s.grade * s.credits).toFixed(0)}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

document.addEventListener("DOMContentLoaded", renderCalculator);
