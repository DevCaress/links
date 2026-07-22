<script lang="ts" setup>
import AppHeader from "~/components/AppHeader.vue";
import MainLayout from "~/layouts/MainLayout.vue";

const individualRates = [
  { platform: "Instagram Reel", description: "60s max, branded content", price: 150 },
  { platform: "TikTok", description: "60s max, branded content", price: 150 },
  { platform: "YouTube Short", description: "60s max, branded content", price: 120 },
  { platform: "YouTube Video", description: "Dedicated integration, 60s min", price: 400 },
  { platform: "Instagram Story", description: "3 slides, branded content", price: 80 },
];

const packages = [
  {
    name: "Starter Pack",
    includes: ["1 Instagram Reel", "1 TikTok"],
    price: 250,
    highlight: false,
  },
  {
    name: "Content Bundle",
    includes: ["1 Instagram Reel", "1 TikTok", "1 YouTube Short"],
    price: 500,
    highlight: true,
  },
  {
    name: "Full Coverage",
    includes: ["1 Instagram Reel", "1 TikTok", "1 YouTube Short", "1 YouTube Video"],
    price: 850,
    highlight: false,
  },
];
</script>

<template>
  <MainLayout>
    <AppHeader />
    <div class="container mx-auto px-4 text-center pb-20">

      <section class="hero-section">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
          Rates & Packages
        </h1>
        <p class="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-20 text-gray-400">
          Transparent pricing for brand collaborations. Pick a single platform or save with a bundle.
        </p>
      </section>

      <section class="rates-section">
        <h2 class="mb-8 text-3xl font-extrabold text-white">Individual Rates</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="rate in individualRates"
            :key="rate.platform"
            class="bg-gray-900 rounded-lg p-6 flex flex-col items-center gap-2 text-center"
          >
            <h3 class="text-xl font-bold text-white">{{ rate.platform }}</h3>
            <p class="text-gray-400 text-sm">{{ rate.description }}</p>
            <p class="text-3xl font-extrabold text-white mt-2">
              ${{ rate.price }}
              <span class="text-base font-normal text-gray-400">USD</span>
            </p>
          </div>
        </div>
      </section>

      <section class="rates-section">
        <h2 class="mb-8 text-3xl font-extrabold text-white">Packages</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="pkg in packages"
            :key="pkg.name"
            class="bg-gray-900 rounded-lg p-8 flex flex-col items-center gap-3 text-center"
            :class="pkg.highlight ? 'border border-red-500 shadow-[0_0_24px_rgba(219,25,67,0.4)]' : ''"
          >
            <span
              v-if="pkg.highlight"
              class="text-xs font-bold uppercase tracking-widest text-red-400 bg-red-900/30 px-3 py-1 rounded-full"
            >
              Most Popular
            </span>
            <h3 class="text-2xl font-bold text-white">{{ pkg.name }}</h3>
            <ul class="text-gray-400 text-sm flex flex-col gap-1 my-2">
              <li v-for="item in pkg.includes" :key="item">{{ item }}</li>
            </ul>
            <p class="text-4xl font-extrabold text-white mt-2">
              ${{ pkg.price }}
              <span class="text-base font-normal text-gray-400">USD</span>
            </p>
          </div>
        </div>
      </section>

      <section class="rates-section">
        <h2 class="mb-4 text-3xl font-extrabold text-white">Interested?</h2>
        <p class="mb-8 text-lg text-gray-400">
          Reach out and let's create something together.
        </p>
        <div class="block w-full max-w-[500px] cursor-pointer mx-auto">
          <div class="link-btn relative items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-red-700 to-purple-500 group group-hover:from-red-700 group-hover:to-purple-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
            <a href="https://www.instagram.com/DevCaress">
              <p class="text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact me on Instagram
              </p>
            </a>
          </div>
        </div>
      </section>

    </div>
  </MainLayout>
</template>

<style scoped>
.hero-section {
  @apply my-16 max-w-[1024px] mx-auto;
}

.rates-section {
  @apply my-16 max-w-[1024px] mx-auto;
}
</style>
