<script lang="ts" setup>
import AppFooter from '~/components/AppFooter.vue';
</script>

<template>
  <div class="main-bg min-h-screen">
    
    <main>
      <slot></slot>
    </main>

    <AppFooter />
  </div>
</template>

<style>
.main-bg {
  background-image: radial-gradient( farthest-corner at 80% 45%,
    rgba(219, 25, 67, 1) 0%,
    rgba(24, 22, 39, 1) 50%
  );
}
</style>