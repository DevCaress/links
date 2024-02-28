<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
    required: true,
  },
  link: {
    type: String,
    default: "",
    required: true,
  },
});

</script>

<template>
  <a :href="props.link">
    <div class="w-7 sm:w-9 cursor-pointer">
      <img :src="props.name" class="w-full" />
    </div>
  </a>
</template>