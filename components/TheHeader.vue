<template>
  <header class="header shadow-sm sticky top-0 z-50 backdrop-blur-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <span class="text-primary font-bold text-2xl">
              <img src="~assets/images/logo-purple.png" alt="Logo" class="h-12 w-auto" />
            </span>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="flex items-center p-2 rounded-md  hover:text-primary focus:outline-none">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:items-center md:space-x-6">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="hover:text-primary transition-colors px-3 py-2 text-md font-medium">
            {{ $t(item.name) }}
          </a>
          <a href="#contact" class="hover:text-primary transition-colors px-3 py-2 text-md font-medium">Contact Us</a>
          <LangSwitcher />
          <DarkModeToggle />
        </nav>
      </div>
      
      <!-- Mobile navigation -->
      <div v-if="isMenuOpen" class="md:hidden py-3 border-t border-gray-200">
        <div class="space-y-1">
          <a v-for="item in navigation" :key="item.name" :href="item.href" 
            class="block py-2 hover:text-primary transition-colors text-base font-medium">
            {{ item.name }}
          </a>
          <a href="#contact" class="btn btn-primary w-full mt-3 py-2">Contact Us</a>
          <br>
          <LangSwitcher />
          <DarkModeToggle />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DarkModeToggle from './ui/DarkModeToggle.vue';
import LangSwitcher from './ui/LangSwitcher.vue';

const isMenuOpen = ref(false);

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
];
</script>

<style scoped>
.btn-sm {
  @apply py-2 px-4 text-sm;
}
</style>