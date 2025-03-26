<template>
  <div class="font-inter">
    <!-- Navigation -->
    <TheHeader />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Services Section -->
    <ServicesSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Portfolio Section -->
    <PortfolioSection />

    <!-- Testimonials Section -->
    <TestimonialsSection />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

<style lang="scss">
// .section {
//   // @apply bg-blue-900 text-white;
// }

.section {
  @apply dark:bg-dark dark:text-white ;
}

.header {
  @apply dark:bg-dark dark:text-white ;
}
</style>
