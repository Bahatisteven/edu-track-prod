<!-- src/views/NotesView.vue -->
<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h2>Study Notes</h2>
        <button class="btn btn-primary" @click="addNote">+ New Note</button>
      </div>
    </div>

    <div class="container">
      <p v-if="notes.length === 0" class="empty-msg">
        No notes yet. Click "+ New Note" to start!
      </p>
      
      <div class="notes-grid">
        <div v-for="note in notes" :key="note.id" class="note-item">
          <div class="note-header">
            <span class="note-date">📅 {{ note.date }}</span>
            <button class="note-delete" @click="deleteNote(note.id)">&times;</button>
          </div>
          <!-- v-model on textarea: typing auto-saves via watch -->
          <textarea
            v-model="note.text"
            class="note-textarea"
            placeholder="Type your note here..."
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const STORAGE_KEY = 'edutrack-notes'
const notes = ref([])

function addNote() {
  notes.value.unshift({ // unshift adds to the beginning
    id: Date.now(),
    text: '',
    date: new Date().toLocaleDateString()
  })
}

function deleteNote(id) {
  notes.value = notes.value.filter(n => n.id !== id)
}

// Watch: auto-save whenever notes array changes (deep = watch nested objects)
watch(notes, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

// Load from localStorage when component mounts
onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) notes.value = JSON.parse(saved)
})
</script>

<style scoped>
/* Copy note styles from css/style.css here */
</style>
