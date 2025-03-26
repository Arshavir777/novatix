<template>
  <section id="testimonials" class="section py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $t('testimonials.title') }}</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {{ $t('testimonials.description') }}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id" 
          class="bg-white p-8 rounded-lg shadow-md"
        >
          <!-- Quote mark -->
          <div class="text-4xl text-primary/20 mb-4">"</div>
          
          <!-- Testimonial content -->
          <p class="text-gray-600 mb-6 italic">{{ $t(testimonial.quote) }}</p>
          
          <!-- Client info -->
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img :src="testimonial.avatarUrl" :alt="`${$t(testimonial.name)}'s avatar`" class="w-full h-full object-cover" />
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">{{ $t(testimonial.name) }}</h4>
              <p class="text-gray-500 text-sm">{{ $t(testimonial.title) }}, {{ $t(testimonial.company) }}</p>
            </div>
          </div>
          
          <!-- Rating stars -->
          <div class="flex mt-4">
            <svg 
              v-for="star in 5" 
              :key="star"
              :class="[
                'w-5 h-5',
                star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
              ]"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Testimonial data with i18n keys
const testimonials = [
  {
    id: 1,
    quote: "testimonials.list.sarahJohnson.quote",
    name: "testimonials.list.sarahJohnson.name",
    title: "testimonials.list.sarahJohnson.title",
    company: "testimonials.list.sarahJohnson.company",
    rating: 5,
    avatarUrl: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    quote: "testimonials.list.michaelChen.quote",
    name: "testimonials.list.michaelChen.name",
    title: "testimonials.list.michaelChen.title",
    company: "testimonials.list.michaelChen.company",
    rating: 5,
    avatarUrl: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    quote: "testimonials.list.emilyRodriguez.quote",
    name: "testimonials.list.emilyRodriguez.name",
    title: "testimonials.list.emilyRodriguez.title",
    company: "testimonials.list.emilyRodriguez.company",
    rating: 4,
    avatarUrl: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];
</script>
