<template>
  <section id="portfolio" class="section py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('portfolio.title') }}</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('portfolio.description') }}
        </p>
      </div>
      
      <!-- Portfolio filter buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="activeCategory = category"
          :class="[
            'px-5 py-2 rounded-full font-medium transition-colors',
            activeCategory === category 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ $t(`portfolio.categories.${category}`) }}
        </button>
      </div>
      
      <!-- Portfolio grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="group relative overflow-hidden rounded-lg shadow-md"
        >
          <!-- Project image -->
          <img :src="project.imageUrl" :alt="project.title" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
          
          <!-- Project overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80 transition-opacity duration-300">
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-xl font-semibold text-white mb-2">{{ project.title }}</h3>
              <p class="text-white/80 mb-4">{{ project.description }}</p>
              <span class="inline-block bg-primary/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                {{ project.category }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- View all button -->
      <div class="text-center mt-12">
        <button class="px-5 py-2 rounded-full font-medium transition-colors bg-primary text-white">
          {{ $t('portfolio.viewAll') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Categories
const categories = ['all', 'webDevelopment', 'mobileApps', 'ecommerce', 'uiuxDesign'];
const activeCategory = ref('all');

// Portfolio projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern online store with advanced filtering and payment processing',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Fitness App',
    description: 'Mobile application for workout tracking and nutrition planning',
    category: 'Mobile Apps',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  // (Other projects)
];

// Filtered projects based on active category
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === activeCategory.value);
});
</script>
