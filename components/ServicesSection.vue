<template>
  <section id="services" class="section bg-white py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of web development services to meet your business needs
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="service in services" :key="service.title" class="card p-8 border-t-4 border-primary">
          <div class="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
            <component :is="service.icon" class="h-7 w-7 text-primary" />
          </div>
          <h3 class="text-xl font-semibold mb-3 text-gray-900">{{ service.title }}</h3>
          <p class="text-gray-600 mb-4">{{ service.description }}</p>
          <a href="#contact" class="text-primary font-medium inline-flex items-center">
            Learn More 
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

// Simple icon components using h rendering function
const WebIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
  })
]);

const MobileIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' 
  })
]);

const DesignIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' 
  })
]);

const SeoIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' 
  })
]);

const EcommerceIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' 
  })
]);

const SupportIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' 
  })
]);

// Service data
const services = [
  {
    icon: WebIcon,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.'
  },
  {
    icon: MobileIcon,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless experiences across all devices.'
  },
  {
    icon: DesignIcon,
    title: 'UI/UX Design',
    description: 'Human-centered design that creates intuitive, engaging user experiences that drive conversion and satisfaction.'
  },
  {
    icon: SeoIcon,
    title: 'SEO Optimization',
    description: 'Strategic SEO services to improve your website visibility in search engines and increase organic traffic.'
  },
  {
    icon: EcommerceIcon,
    title: 'E-commerce Solutions',
    description: 'Comprehensive online store setups with payment processing, inventory management, and secure checkout.'
  },
  {
    icon: SupportIcon,
    title: 'Maintenance & Support',
    description: 'Continuous technical support, regular updates, and maintenance to keep your digital products running smoothly.'
  }
];
</script>