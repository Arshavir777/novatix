<template>
  <section id="about" class="section bg-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- About image -->
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-lg"></div>
            <div class="relative rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our team working together" 
                class="w-full h-auto" />
            </div>
          </div>
        </div>
        
        <!-- About content -->
        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">About Novatix LLC</h2>
          <p class="text-lg text-gray-600 mb-6">
            Founded in 2015, Novatix LLC is a leading web development company with a passion for creating exceptional digital experiences that help businesses thrive in the digital age.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div v-for="stat in stats" :key="stat.value" class="bg-white p-6 rounded-lg shadow-sm">
              <div class="text-3xl font-bold text-primary mb-2">{{ stat.value }}</div>
              <div class="text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
          
          <p class="text-lg text-gray-600 mb-8">
            Our team of experienced developers, designers, and digital strategists work collaboratively to deliver solutions that exceed expectations and drive measurable results for our clients.
          </p>
          
          <a href="#contact" class="btn btn-primary btn-lg">
            Get to Know Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Company stats
const stats = [
  { value: '100+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '8+', label: 'Years of Experience' },
  { value: '15+', label: 'Team Members' }
];
</script>