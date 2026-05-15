<!-- src/components/SubjectCard.vue -->
<template>
  <article class="subject-card">
    <div class="card-header">
      <h3>{{ subject.name }}</h3>
      <span class="badge">{{ subject.code }}</span>
    </div>
    <div class="card-body">
      <!-- :style binds a JS object to inline CSS -->
      <div class="grade-badge" :style="{ background: gradeColor }">
        {{ subject.grade }}% &mdash; {{ gradeLetter }}
      </div>
      <p class="credits">Credits: {{ subject.credits }}</p>
    </div>
    <div class="card-actions" style="padding: 0 18px 16px; display: flex; gap: 8px;">
      <button class="btn btn-sm" @click="$emit('edit', subject)">Edit</button>
      <button class="btn btn-sm btn-danger" @click="$emit('delete', subject.id)">Delete</button>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

// Props: data passed IN from parent
const props = defineProps({
  subject: {
    type: Object,
    required: true
  }
})

// Emits: events sent OUT to parent
defineEmits(['edit', 'delete'])

// Computed: automatically recalculates when props.subject.grade changes
const gradeLetter = computed(() => {
  const g = props.subject.grade
  if (g >= 90) return 'A'
  if (g >= 80) return 'B'
  if (g >= 70) return 'C'
  if (g >= 60) return 'D'
  return 'F'
})

const gradeColor = computed(() => {
  const g = props.subject.grade
  if (g >= 90) return '#10b981'
  if (g >= 80) return '#2563eb'
  if (g >= 70) return '#f59e0b'
  if (g >= 60) return '#f97316'
  return '#ef4444'
})
</script>
