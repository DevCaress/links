<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
    required: true,
  },
  link: {
    type: String,
    default: "",
    required: true,
  },
  thumbnail: {
    type: String,
    default: "",
    required: true,
  },
});
</script>

<template>
  <a :href="props.link" target="_blank" rel="noopener" class="block w-full">
    <div
      class="h-full p-0.5 overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 text-white">
      <div class="h-full bg-gray-900 rounded-md p-2 transition-all ease-in duration-75 hover:bg-opacity-80">
        <img :src="props.thumbnail" :alt="props.title" loading="lazy"
          class="w-full aspect-video object-cover rounded-md" />
        <p class="mt-2 text-sm font-medium line-clamp-2">{{ props.title }}</p>
      </div>
    </div>
  </a>
</template>
