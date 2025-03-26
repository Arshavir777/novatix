<template>
  <section id="about" class="section py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- About image -->
        <div class="lg:w-1/2">
          <div class="relative">
            <div class="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-lg"></div>
            <div class="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                :alt="$t('about.companyName')" 
                class="w-full h-auto" 
              />
            </div>
          </div>
        </div>

        <!-- About content -->
        <div class="lg:w-1/2">
          <h2 class="text-3xl font-bold mb-6">{{ $t('about.companyName') }}</h2>
          <p class="text-lg mb-6">
            {{ $t('about.description') }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div 
              v-for="stat in stats" 
              :key="stat.value" 
              class="bg-white p-6 rounded-lg shadow-sm"
            >
              <div class="text-3xl font-bold text-primary mb-2">{{ stat.value }}</div>
              <div>{{ $t(stat.label) }}</div>
            </div>
          </div>

          <p class="text-lg  mb-8">
            {{ $t('about.teamDescription') }}
          </p>

          <a href="#contact" class="px-5 py-2 rounded-full font-medium transition-colors bg-primary text-white">
            {{ $t('about.buttonText') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '100+', label: 'about.stats.projectsCompleted' },
  { value: '50+', label: 'about.stats.happyClients' },
  { value: '8+', label: 'about.stats.yearsExperience' },
  { value: '15+', label: 'about.stats.teamMembers' }
];
</script>
