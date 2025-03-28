<template>
  <section id="contact" class="section py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to start your project? Contact us today for a free consultation
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact form -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h3 class="text-xl font-semibold mb-6">Send us a message</h3>
          
          <form @submit.prevent="submitForm">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                required
              />
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                class="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="px-5 py-2 rounded-full font-medium transition-colors bg-primary text-white"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
        
        <!-- Contact information -->
        <div>
          <h3 class="text-xl font-semibold mb-6">Contact Information</h3>
          
          <div class="space-y-6">
            <div v-for="info in contactInfo" :key="info.title" class="flex items-start">
              <div class="bg-primary/10 rounded-full p-3 mr-4">
                <component :is="info.icon" class="w-6 h-6 text-primary" />
              </div>
              
              <div>
                <h4 class="font-medium ">{{ info.title }}</h4>
                <p class="text-gray-600">{{ info.value }}</p>
              </div>
            </div>
          </div>
          
          <!-- Social media links -->
          <div class="mt-10">
            <h4 class="font-medium text-gray-900 mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.platform"
                :href="social.url" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="bg-gray-100 dark:text-dark hover:bg-primary hover:text-white transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center"
              >
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <!-- Map or image -->
          <div class="mt-10 bg-gray-200 rounded-lg h-64 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our office building" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';

// Form state
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const isSubmitting = ref(false);

// Simple icon components
const LocationIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' 
  }),
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' 
  })
]);

const PhoneIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' 
  })
]);

const EmailIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' 
  })
]);

const ClockIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  fill: 'none', 
  viewBox: '0 0 24 24', 
  stroke: 'currentColor' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' 
  })
]);

// Social icons
const FacebookIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' 
  })
]);

const TwitterIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' 
  })
]);

const InstagramIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' 
  })
]);

const LinkedInIcon = () => h('svg', { 
  xmlns: 'http://www.w3.org/2000/svg', 
  width: '24', 
  height: '24', 
  viewBox: '0 0 24 24', 
  fill: 'currentColor' 
}, [
  h('path', { 
    d: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' 
  })
]);

// Contact information
const contactInfo = [
  {
    icon: LocationIcon,
    title: 'Our Location',
    value: '10/9 Grigor Hasratyan St, Yerevan, Armenia'
  },
  {
    icon: PhoneIcon,
    title: 'Phone Number',
    value: '+374 94 79 85 70'
  },
  {
    icon: EmailIcon,
    title: 'Email Address',
    value: 'info@nova-tix.com'
  },
  {
    icon: ClockIcon,
    title: 'Working Hours',
    value: 'Monday - Friday: 10:00 AM - 7:00 PM'
  }
];

// Social media links
const socialLinks = [
  {
    platform: 'Facebook',
    icon: FacebookIcon,
    url: 'https://facebook.com'
  },
  {
    platform: 'Twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com'
  },
  {
    platform: 'Instagram',
    icon: InstagramIcon,
    url: 'https://instagram.com'
  },
  {
    platform: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://linkedin.com'
  }
];

// Form submission handler
const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    isSubmitting.value = false;
    
    // Would normally show a success message here
    alert('Form submitted successfully! (This is just a demo)');
  }, 1500);
};
</script>