<!-- src/components/NavBar.vue -->
<template>
  <header class="navbar">
    <RouterLink to="/" class="logo">🎓 EduTrack</RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/subjects">Subjects</RouterLink>
      <RouterLink to="/calculator">Calculator</RouterLink>
      <RouterLink to="/notes">Notes</RouterLink>
    </nav>
  </header>
</template>

<script setup>
// RouterLink automatically adds class="router-link-active"
// when the link matches the current URL - no extra code needed
</script>

<style scoped>
/* Copy navbar styles from css/style.css here */
</style>
