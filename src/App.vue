<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <RouterView />  <!-- each page renders here -->
    </main>
    <footer class="footer">
      <p>&copy; 2026 EduTrack &middot; Built with Vue.js 3</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
</script>
