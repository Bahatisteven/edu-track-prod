<!-- src/views/HomeView.vue -->
<template>
  <div class="page">
    <div class="hero">
      <h1>Welcome back, <span>{{ store.studentName }}</span>!</h1>
      <p class="subtitle">Here is your academic overview</p>
    </div>

    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">{{ store.subjects.length }}</div>
            <div class="stat-label">Subjects</div>
          </div>
          <div class="stat-card">
            <!-- Dynamic class for color coding -->
            <div class="stat-number" :class="averageClass">
              {{ store.average }}%
            </div>
            <div class="stat-label">Average Grade</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ store.gpa }}</div>
            <div class="stat-label">GPA / 4.0</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{{ store.totalCredits }}</div>
            <div class="stat-label">Total Credits</div>
          </div>
        </div>
      </div>
    </section>

    <div class="container quick-links" style="display: flex; gap: 16px; margin-top: 40px; justify-content: center;">
      <RouterLink to="/subjects" class="btn btn-primary">View Subjects</RouterLink>
      <RouterLink to="/notes" class="btn">Open Notes</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGradesStore } from '../stores/grades'

const store = useGradesStore()

const averageClass = computed(() => {
  const avg = parseFloat(store.average)
  if (avg >= 80) return 'text-green'
  if (avg >= 70) return 'text-blue'
  return 'text-red'
})
</script>

<style scoped>
.text-green { color: #10b981; }
.text-blue  { color: #2563eb; }
.text-red   { color: #ef4444; }
</style>
