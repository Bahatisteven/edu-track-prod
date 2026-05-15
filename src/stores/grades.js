// src/stores/grades.js
import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useGradesStore = defineStore('grades', () => {
    
    // --- STATE ---
    const studentName = ref('Jean Paul')
    
    const savedSubjects = localStorage.getItem('edutrack-subjects')
    const subjects = ref(savedSubjects ? JSON.parse(savedSubjects) : [
        { id: 1, name: 'JavaScript Fundamentals', code: 'SWDJF301', grade: 85, credits: 3 },
        { id: 2, name: 'Vue.js Framework',         code: 'SWDVF301', grade: 78, credits: 3 },
        { id: 3, name: 'Version Control',          code: 'SWDVC301', grade: 92, credits: 2 },
        { id: 4, name: 'Website Development',      code: 'SWDWD301', grade: 88, credits: 3 },
    ])

    // --- GETTERS (computed) ---
    const totalCredits = computed(() => 
        subjects.value.reduce((sum, s) => sum + s.credits, 0)
    )

    const average = computed(() => {
        if (subjects.value.length === 0) return '0.00'
        const weighted = subjects.value.reduce((sum, s) => sum + s.grade * s.credits, 0)
        return (weighted / totalCredits.value).toFixed(2)
    })

    const gpa = computed(() => {
        const avg = parseFloat(average.value)
        if (avg >= 90) return '4.0'
        if (avg >= 85) return '3.7'
        if (avg >= 80) return '3.3'
        if (avg >= 75) return '3.0'
        if (avg >= 70) return '2.7'
        if (avg >= 65) return '2.3'
        if (avg >= 60) return '2.0'
        return '0.0'
    })

    // --- ACTIONS ---
    function addSubject(subject) {
        subjects.value.push({ ...subject, id: Date.now() })
    }

    function updateSubject(updated) {
        const i = subjects.value.findIndex(s => s.id === updated.id)
        if (i !== -1) subjects.value[i] = updated
    }

    function removeSubject(id) {
        subjects.value = subjects.value.filter(s => s.id !== id)
    }

    // --- PERSIST: auto-save to localStorage on any change ---
    watch(subjects, (newVal) => {
        localStorage.setItem('edutrack-subjects', JSON.stringify(newVal))
    }, { deep: true })

    return {
        studentName, subjects,
        totalCredits, average, gpa,
        addSubject, updateSubject, removeSubject
    }
})
