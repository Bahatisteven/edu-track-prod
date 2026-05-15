<!-- src/views/CalculatorView.vue -->
<template>
  <div class="page">
    <div class="page-header">
      <div class="container">
        <h2>Grade Calculator</h2>
      </div>
    </div>

    <div class="container">
      <!-- Summary cards -->
      <div class="stats-grid" style="margin-bottom: 32px;">
        <div class="stat-card">
          <div class="stat-number">{{ store.average }}%</div>
          <div class="stat-label">Weighted Average</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ store.gpa }}</div>
          <div class="stat-label">GPA / 4.0</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ gradeLetter }}</div>
          <div class="stat-label">Overall Grade</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ store.totalCredits }}</div>
          <div class="stat-label">Total Credits</div>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="progress-section" style="margin-bottom: 40px;">
        <div class="progress-label" style="display: flex; justify-content: space-between; font-weight: 700;">
          <span>Overall Progress</span>
          <strong>{{ store.average }}%</strong>
        </div>
        <div class="progress-track">
          <!-- Width binds to store.average -->
          <div class="progress-bar" :style="{ width: store.average + '%' }"></div>
        </div>
      </div>

      <!-- Subject breakdown table -->
      <table class="breakdown-table" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="text-align: left; border-bottom: 2px solid #e2e8f0;">
            <th style="padding: 12px;">Subject</th>
            <th style="padding: 12px;">Code</th>
            <th style="padding: 12px;">Grade</th>
            <th style="padding: 12px;">Credits</th>
            <th style="padding: 12px;">Letter</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in store.subjects" :key="s.id" style="border-bottom: 1px solid #e2e8f0;">
            <td style="padding: 12px;">{{ s.name }}</td>
            <td style="padding: 12px;">{{ s.code }}</td>
            <td style="padding: 12px;">{{ s.grade }}%</td>
            <td style="padding: 12px;">{{ s.credits }}</td>
            <td style="padding: 12px;">
              <span class="grade-badge" :style="{ background: getGradeColor(s.grade), padding: '4px 10px', fontSize: '0.8rem' }">
                {{ getLetter(s.grade) }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGradesStore } from '../stores/grades'

const store = useGradesStore()

const gradeLetter = computed(() => getLetter(parseFloat(store.average)))

function getLetter(g) {
  if (g >= 90) return 'A'
  if (g >= 80) return 'B'
  if (g >= 70) return 'C'
  if (g >= 60) return 'D'
  return 'F'
}

function getGradeColor(g) {
  if (g >= 90) return '#10b981'
  if (g >= 80) return '#2563eb'
  if (g >= 70) return '#f59e0b'
  if (g >= 60) return '#f97316'
  return '#ef4444'
}
</script>
