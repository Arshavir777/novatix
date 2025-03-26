<template>
  <section id="portfolio" class="section bg-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our recent projects that showcase our expertise and capabilities
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
          {{ category }}
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
        <button class="btn btn-outline btn-lg">
          View All Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Categories
const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'UI/UX Design'];
const activeCategory = ref('All');

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
  {
    id: 3,
    title: 'Real Estate Website',
    description: 'Property listing platform with advanced search capabilities',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Restaurant Booking System',
    description: 'Online reservation platform with table management',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Travel App Redesign',
    description: 'UI/UX redesign of a popular travel booking application',
    category: 'UI/UX Design',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Fashion Store',
    description: 'E-commerce solution for a clothing brand with inventory management',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

// Filtered projects based on active category
const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === activeCategory.value);
});
</script>