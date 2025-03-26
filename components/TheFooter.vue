<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Footer top section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Company info -->
        <div>
          <div class="flex items-center mb-6">
            <img src="~assets/images/logo-white.png" alt="Logo" class="h-12 w-auto" />
          </div>
          <p class="text-gray-400 mb-6">
            {{ $t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.platform"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="bg-gray-800 hover:bg-primary transition-colors duration-300 rounded-full w-10 h-10 flex items-center justify-center"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <!-- Quick links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.text">
              <a :href="link.url" class="text-gray-400 hover:text-primary transition-colors">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-6">{{ $t('footer.ourServices') }}</h3>
          <ul class="space-y-3">
            <li v-for="service in serviceLinks" :key="service.text">
              <a :href="service.url" class="text-gray-400 hover:text-primary transition-colors">
                {{ service.text }}
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-6">{{ $t('footer.newsletter') }}</h3>
          <p class="text-gray-400 mb-4">{{ $t('footer.newsletterDescription') }}</p>
          <form @submit.prevent="subscribeNewsletter" class="flex">
            <input 
              type="email" 
              v-model="newsletterEmail" 
              placeholder="Your email" 
              class="flex-grow px-4 py-2 rounded-l-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button 
              type="submit" 
              class="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition-colors"
            >
              {{ $t('footer.subscribe') }}
            </button>
          </form>
        </div>
      </div>
      
      <!-- Footer bottom section -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row md:justify-between items-center">
          <div class="text-gray-400 mb-4 md:mb-0">
            &copy; {{ new Date().getFullYear() }} {{ $t('footer.companyName') }} {{ $t('footer.companySuffix') }}. {{ $t('footer.copyright') }}
          </div>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#" class="text-gray-400 hover:text-primary text-sm transition-colors">{{ $t('footer.privacyPolicy') }}</a>
            <a href="#" class="text-gray-400 hover:text-primary text-sm transition-colors">{{ $t('footer.termsOfService') }}</a>
            <a href="#" class="text-gray-400 hover:text-primary text-sm transition-colors">{{ $t('footer.cookiePolicy') }}</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, h } from 'vue';

// Newsletter subscription email
const newsletterEmail = ref('');

// Social media icons
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

// Similar social icons definitions

const socialLinks = [
  { platform: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' },
  // { platform: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
  // { platform: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
  // { platform: 'LinkedIn', icon: LinkedInIcon, url: 'https://linkedin.com' }
];

const quickLinks = [
  { text: 'Home', url: '#home' },
  { text: 'About Us', url: '#about' },
  { text: 'Portfolio', url: '#portfolio' },
  { text: 'Testimonials', url: '#testimonials' },
  { text: 'Contact', url: '#contact' }
];

const serviceLinks = [
  { text: 'Web Development', url: '#services' },
  { text: 'Mobile App Development', url: '#services' },
  { text: 'UI/UX Design', url: '#services' },
  { text: 'E-commerce Solutions', url: '#services' },
  { text: 'Maintenance & Support', url: '#services' }
];

const subscribeNewsletter = () => {
  alert(`Thanks for subscribing with: ${newsletterEmail.value}! (This is just a demo)`);
  newsletterEmail.value = '';
};
</script>
