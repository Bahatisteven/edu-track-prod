<!-- src/views/SubjectsView.vue -->
<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h2>My Subjects</h2>
        <button class="btn btn-primary" @click="showForm = true">+ Add Subject</button>
      </div>
    </div>

    <div class="container">
      <!-- Search bar -->
      <input v-model="searchQuery" type="text" class="search-input" placeholder="Search subjects...">

      <!-- Subject grid -->
      <div v-if="filteredSubjects.length > 0" class="subjects-grid">
        <SubjectCard 
          v-for="subject in filteredSubjects" 
          :key="subject.id"
          :subject="subject"
          @edit="openEdit"
          @delete="confirmDelete"
        />
      </div>
      <p v-else class="empty-msg">No subjects found for "{{ searchQuery }}"</p>
    </div>

    <!-- Modal Form -->
    <Transition name="modal">
      <div v-if="showForm" class="modal-overlay" @click.self="closeForm">
        <div class="modal">
          <h3>{{ editingSubject ? 'Edit Subject' : 'Add Subject' }}</h3>
          <form @submit.prevent="saveSubject">
            <div class="form-group">
              <label>Subject Name</label>
              <input v-model="form.name" type="text" required placeholder="e.g. JavaScript">
            </div>
            <div class="form-group">
              <label>Code</label>
              <input v-model="form.code" type="text" required placeholder="e.g. SWDJF301">
            </div>
            <div class="form-group">
              <label>Grade (%)</label>
              <input v-model.number="form.grade" type="number" min="0" max="100" required>
            </div>
            <div class="form-group">
              <label>Credits</label>
              <input v-model.number="form.credits" type="number" min="1" max="10" required>
            </div>
            <div class="form-actions">
              <button type="button" class="btn" @click="closeForm">Cancel</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { useGradesStore } from '../stores/grades'
import SubjectCard from '../components/SubjectCard.vue'

const store = useGradesStore()
const searchQuery = ref('')
const showForm = ref(false)
const editingSubject = ref(null)

const form = reactive({
  name: '',
  code: '',
  grade: 0,
  credits: 3
})

const filteredSubjects = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return store.subjects.filter(s => 
    s.name.toLowerCase().includes(query) || 
    s.code.toLowerCase().includes(query)
  )
})

function openEdit(subject) {
  editingSubject.value = subject
  Object.assign(form, subject)
  showForm.value = true
}

function closeForm() {
  showForm.value = false
  editingSubject.value = null
  Object.assign(form, { name: '', code: '', grade: 0, credits: 3 })
}

function saveSubject() {
  if (editingSubject.value) {
    store.updateSubject({ ...form, id: editingSubject.value.id })
  } else {
    store.addSubject({ ...form })
  }
  closeForm()
}

function confirmDelete(id) {
  if (confirm('Delete this subject?')) {
    store.removeSubject(id)
  }
}
</script>

<style scoped>
/* Local modal styles */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal {
  background: white;
  padding: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 450px;
}
.form-group { margin-bottom: 16px; }
.form-group label { display: block; margin-bottom: 4px; font-weight: 600; }
.form-group input { width: 100%; padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px; }
.form-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 24px; }

.modal-enter-active, .modal-leave-active { transition: opacity 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>
