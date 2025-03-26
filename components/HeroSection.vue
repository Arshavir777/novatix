<template>
  <section id="home" class="section py-20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 md:pr-10">
          <h1 class="sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            v-html="$t('home.title')">
          </h1>
          <p class="text-lg mb-8 max-w-xl">
            {{ $t('home.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#services" class="px-5 py-2 rounded-full font-medium transition-colors bg-primary text-white">
              {{ $t('home.buttons.ourServices') }}
            </a>
            <a href="#portfolio" class="px-5 py-2 rounded-full font-medium transition-colors bg-primary text-white">
              {{ $t('home.buttons.viewPortfolio') }}
            </a>
          </div>
        </div>
        <div class="md:w-1/2 mt-12 md:mt-0">
          <div class="relative">
            <div class="absolute -bottom-4 -right-4 w-full h-full bg-primary/20 rounded-lg"></div>
            <div class="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="~/assets/images/bg.png" 
                :alt="$t('home.imageAlt')" 
                class="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
