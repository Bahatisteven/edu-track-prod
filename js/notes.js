// js/notes.js

const STORAGE_KEY = "edutrack-notes";

// --- Load notes from localStorage on page start ---
function loadNotes() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const savedNotes = JSON.parse(raw);
    savedNotes.forEach(function(note) {
        addNoteToDOM(note.id, note.text, note.date);
    });
}

// --- Save all current notes to localStorage ---
function saveNotes() {
    const noteElements = document.querySelectorAll(".note-item");
    const notesData = [];

    noteElements.forEach(function(el) {
        notesData.push({
            id: el.dataset.id,
            text: el.querySelector(".note-textarea").value,
            date: el.dataset.date
        });
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(notesData));
}

// --- Add a note element to the DOM ---
function addNoteToDOM(id = Date.now(), text = "", date = new Date().toLocaleDateString()) {
    const container = document.getElementById("notes-container");
    if (!container) return;

    const noteEl = document.createElement("div");
    noteEl.className = "note-item";
    noteEl.dataset.id = id;
    noteEl.dataset.date = date;

    noteEl.innerHTML = `
        <div class="note-header">
            <span>Note ${date}</span>
            <button class="note-delete" onclick="deleteNote(this)">×</button>
        </div>
        <textarea class="note-textarea" 
            placeholder="Write your study notes here..."
            oninput="saveNotes()">${text}</textarea>
    `;

    container.prepend(noteEl); // newest note appears at top
}

// --- Delete a note ---
function deleteNote(btn) {
    const noteEl = btn.closest(".note-item");
    noteEl.remove();
    saveNotes();
}

// --- Wire up the Add Note button ---
const addNoteBtn = document.getElementById("add-note-btn");
if (addNoteBtn) {
    addNoteBtn.addEventListener("click", function() {
        addNoteToDOM();
        saveNotes();
    });
}

// --- Load on start ---
document.addEventListener("DOMContentLoaded", loadNotes);
