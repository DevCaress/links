<script setup lang="ts">
import instagram from "~/assets/instagram.png";
import tiktok from "~/assets/tiktok.png";
import github from "~/assets/github.png";
import linkedin from "~/assets/linkedin.png";
import youtube from "~/assets/youtube.png";
import twitter from "~/assets/twitter.png";
import facebook from "~/assets/facebook.png";
import MainLayout from "~/layouts/MainLayout.vue";

const btns = ref([
  { 
    text: "Mejora tu inglés con Clubs de Conversación",
    link: "https://growmo.tech",
  },
  {
    text: 'Crea Apps con AI - Rocket',
    link: 'https://www.rocket.new/?utm_source=tiktok&utm_medium=social&utm_campaign=tiktok&utm_term=devcaress
  },
  { 
    text: "Asesorías personalizadas 🚀🚀🚀",
    link: "https://caress.dev/asesorias",
  },
  {
    text: 'Playeras de programación 💻💻💻',
    link: 'https://www.cerebrots.com/discount/DEVCARESS?redirect=%2Fcollections%2Fdevcaress'
  },
  {
    text: "Guía para entrevistas de programación 💻💻💻",
    link: "https://github.com/DevCaress/guia-entrevistas-de-programacion",
  },
  {
    text: "Mi conferencía sobre NPM y manejo de dependencias 🤫🤫🤫",
    link: "https://youtu.be/RBbCjDF1lUM?si=jy0d9-xDmU8u_lGI",
  },
  {
    text: "Mi curso de programación básica (Gratis) 🚀🚀🚀",
    link: "https://www.youtube.com/watch?v=RtudmQ5rLCg&list=PLxvYdwV3tpkCwPcMyQslsXWFsVfY7P584",
  },
  {
    text: "Mi Curriculum (resume) 📄📄📄",
    link: "https://caress.dev/DanielEnriquezCV.pdf",
  },
  {
    text: "Grupo de whatsapp 😎😎😎",
    link: "https://chat.whatsapp.com/CPCxwccekLO8po57XTdAsA",
  },
  {
    text: "LinkedIn del dude que comparte Interships 🤓🤓🤓",
    link: "https://www.linkedin.com/in/markbenliyan/",
  },
]);

const icons = [
  { name: instagram, link: "https://www.instagram.com/DevCaress" },
  { name: tiktok, link: "https://www.tiktok.com/@DevCaress" },
  { name: github, link: "https://github.com/DevCaress" },
  { name: linkedin, link: "https://linkedin.com/in/daniel-enriquez-lucas/" },
  {
    name: youtube,
    link: "https://www.youtube.com/channel/UCX1BEJAE6Mx9Tz6ty28oJWQ",
  },
  { name: twitter, link: "https://twitter.com/DevCaress" },
  { name: facebook, link: "https://www.facebook.com/DevCaress" },
];
</script>

<template>
  <MainLayout class="bg-black min-h-screen pt-10">
    <section class="img-container mb-4">
      <img class="w-40 h-40 rounded-full" src="~/assets/caress.jpg" alt="Profile picture" />
    </section>

    <section class="img-container gap-4">
      <IconBtn v-for="(item, index) in icons" :key="index" :name="item.name" :link="item.link" />
    </section>

    <section class="links-container">
      <LinkBtn v-for="(item, index) in btns" :key="index" :text="item.text" :link="item.link" />
    </section>
  </MainLayout>
</template>
<style>
.links-container {
  @apply flex flex-col items-center justify-center gap-4 mt-4 w-11/12 md:w-4/6 max-w-screen-md mx-auto;
}

.img-container {
  @apply flex items-center justify-center;
}
</style>
