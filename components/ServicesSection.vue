<template>
  <section id="services" class="section py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold  mb-4">{{ $t('services.title') }}</h2>
        <p class="text-lg  max-w-2xl mx-auto">
          {{ $t('services.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.key" 
          class="card p-8 border-t-4 border-primary"
        >
          <div class="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
            <component :is="service.icon" class="h-7 w-7 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3 ">{{ $t(service.title) }}</h3>
          <p class="mb-4">{{ $t(service.description) }}</p>
          <a href="#contact" class="text-primary font-medium inline-flex items-center">
            {{ $t('services.learnMore') }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue';

// Simple icon components
const WebIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 2, d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
]);

const MobileIcon = () => h('svg', { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': 2, d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
]);

// Service data with i18n keys
const services = [
  { key: 'webDevelopment', icon: WebIcon, title: 'services.list.webDevelopment.title', description: 'services.list.webDevelopment.description' },
  { key: 'mobileAppDevelopment', icon: MobileIcon, title: 'services.list.mobileAppDevelopment.title', description: 'services.list.mobileAppDevelopment.description' },
  { key: 'uiUxDesign', icon: WebIcon, title: 'services.list.uiUxDesign.title', description: 'services.list.uiUxDesign.description' },
  { key: 'seoOptimization', icon: WebIcon, title: 'services.list.seoOptimization.title', description: 'services.list.seoOptimization.description' },
  { key: 'ecommerceSolutions', icon: WebIcon, title: 'services.list.ecommerceSolutions.title', description: 'services.list.ecommerceSolutions.description' },
  { key: 'maintenanceSupport', icon: WebIcon, title: 'services.list.maintenanceSupport.title', description: 'services.list.maintenanceSupport.description' }
];
</script>
