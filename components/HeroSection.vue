<template>
  <section id="home" class="bg-gradient-to-b from-white to-gray-50 py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-10">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Building Digital <span class="text-primary">Experiences</span> That Transform
          </h1>
          <p class="text-lg text-gray-600 dark:text-white mb-8 max-w-xl">
            We create cutting-edge web solutions to help businesses succeed in the digital world. 
            Our expert team delivers custom web applications that drive results.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#services" class="btn btn-primary btn-lg">
              Our Services
            </a>
            <a href="#portfolio" class="btn btn-outline btn-lg">
              View Portfolio
            </a>
          </div>
        </div>
        <div class="md:w-1/2 mt-12 md:mt-0">
          <div class="relative">
            <div class="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-lg"></div>
            <div class="relative rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Web development team at work" 
                class="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No additional script needed
</script>