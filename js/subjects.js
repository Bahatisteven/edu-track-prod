// js/subjects.js

// 1. Render all subject cards into #subjects-container
function renderSubjects(list) {
    const container = document.getElementById("subjects-container");
    if (!container) return;
    
    container.innerHTML = ""; // Clear existing content

    if (list.length === 0) {
        container.innerHTML = '<p class="empty-msg">No subjects found.</p>';
        return;
    }

    list.forEach(function(subject) {
        const gradeInfo = getGradeLetter(subject.grade); // from app.js

        // Create the card element
        const card = document.createElement("article");
        card.className = "subject-card";
        card.dataset.id = subject.id;

        // Build the inner HTML
        card.innerHTML = `
            <div class="card-header">
                <h3>${subject.name}</h3>
                <span class="badge">${subject.code}</span>
            </div>
            <div class="card-body">
                <div class="grade-badge ${gradeInfo.css}">
                    ${subject.grade}% — ${gradeInfo.letter}
                </div>
                <p class="credits">Credits: ${subject.credits}</p>
                <p class="description">${subject.description || ''}</p>
            </div>
            <div class="card-actions" style="padding: 0 18px 16px; display: flex; gap: 8px;">
                <button class="btn btn-sm" onclick="editSubject(${subject.id})" style="padding: 4px 8px; font-size: 0.8rem;">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteSubject(${subject.id})" style="padding: 4px 8px; font-size: 0.8rem; background: var(--danger); color: white;">Delete</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// 2. Add/Edit Subject Form Handling
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const subjectForm = document.getElementById("subject-form");

function openForm(subject = null) {
    if (subject) {
        modalTitle.textContent = "Edit Subject";
        document.getElementById("f-name").value = subject.name;
        document.getElementById("f-code").value = subject.code;
        document.getElementById("f-grade").value = subject.grade;
        document.getElementById("f-credits").value = subject.credits;
        subjectForm.dataset.editId = subject.id;
    } else {
        modalTitle.textContent = "Add Subject";
        subjectForm.reset();
        delete subjectForm.dataset.editId;
    }
    modal.classList.add("open");
}

function closeForm() {
    modal.classList.remove("open");
}

if (document.getElementById("add-btn")) {
    document.getElementById("add-btn").addEventListener("click", () => openForm());
}

if (document.getElementById("modal-close")) {
    document.getElementById("modal-close").addEventListener("click", closeForm);
}

if (subjectForm) {
    subjectForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("f-name").value.trim();
        const code = document.getElementById("f-code").value.trim();
        const grade = parseFloat(document.getElementById("f-grade").value);
        const credits = parseInt(document.getElementById("f-credits").value);

        // Validation
        if (!name) return alert("Please enter a subject name.");
        if (isNaN(grade) || grade < 0 || grade > 100) return alert("Grade must be between 0 and 100.");
        if (isNaN(credits) || credits < 1) return alert("Credits must be at least 1.");

        const editId = subjectForm.dataset.editId;
        if (editId) {
            const index = subjects.findIndex(s => s.id === parseInt(editId));
            if (index !== -1) {
                subjects[index] = { ...subjects[index], name, code, grade, credits };
            }
        } else {
            const newSubject = {
                id: Date.now(),
                name, code, grade, credits,
                description: ""
            };
            subjects.push(newSubject);
        }

        renderSubjects(subjects);
        closeForm();
    });
}

function editSubject(id) {
    const subject = subjects.find(s => s.id === id);
    if (subject) openForm(subject);
}

function deleteSubject(id) {
    if (!confirm("Are you sure you want to delete this subject?")) return;
    const index = subjects.findIndex(s => s.id === id);
    if (index !== -1) subjects.splice(index, 1);
    renderSubjects(subjects);
}

// 3. Search/Filter
const searchInput = document.getElementById("search-input");
if (searchInput) {
    searchInput.addEventListener("input", function(event) {
        const query = event.target.value.toLowerCase().trim();
        const filtered = subjects.filter(function(subject) {
            return (
                subject.name.toLowerCase().includes(query) ||
                subject.code.toLowerCase().includes(query)
            );
        });
        renderSubjects(filtered);
    });
}

// Initial render
document.addEventListener("DOMContentLoaded", function() {
    renderSubjects(subjects);
});
