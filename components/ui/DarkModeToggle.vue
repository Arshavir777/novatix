<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Apply stored theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  isDark.value = savedTheme === "dark";
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  }
});
</script>

<template>
  <span
    @click="toggleDarkMode"
    class=" transition-all hover:scale-110 cursor-pointer"
  >
    <span v-if="isDark" class="text-yellow-400">☀️</span>
    <span v-else class="text-gray-900">🌙</span>
  </span>
</template>
