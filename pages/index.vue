<script setup lang="ts">
import instagram from "~/assets/instagram.png";
import tiktok from "~/assets/tiktok.png";
import github from "~/assets/github.png";
import linkedin from "~/assets/linkedin.png";
import youtube from "~/assets/youtube.png";
import twitter from "~/assets/twitter.png";
import facebook from "~/assets/facebook.png";

const btns = ref([
  {
    text: "UGREEN Nexode Pro 160W Cargado",
    link: "https://amzn.to/3Q8ZXSk",
  },
  {
    text: "Conferencía de chismecitos 🤫🤫🤫",
    link: "https://youtu.be/RBbCjDF1lUM?si=jy0d9-xDmU8u_lGI",
  },
  {
    text: "Guía para entrevistas de programación 💻💻💻",
    link: "https://github.com/DevCaress/guia-entrevistas-de-programacion",
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
    text: "LinkedIn del wey que comparte Interships 🤓🤓🤓",
    link: "https://www.linkedin.com/in/markbenliyan/",
  },
]);

const icons = [
  { name: instagram, link: "https://www.instagram.com/DevCaress" },
  { name: tiktok, link: "https://www.tiktok.com/@DevCaress" },
  { name: github, link: "https://github.com/DevCaress" },
  { name: linkedin, link: "https://linkedin.com/in/daniel-enriquez-lucas/" },
  { name: youtube, link: "https://www.youtube.com/channel/UCX1BEJAE6Mx9Tz6ty28oJWQ" },
  { name: twitter, link: "https://twitter.com/DevCaress" },
  { name: facebook, link: "https://www.facebook.com/DevCaress" },
  /* {name: 'streamline:discord-1-solid', link: 'https://discord.gg/DevCaress'},
  {name: 'streamline:whatsapp-1-solid', link: 'https://wa.me/DevCaress'},
  {name: 'streamline:telegram-1-solid', link: 'https://t.me/DevCaress'}, */
];
</script>

<template>
  <section class="dark:bg-black h-screen pt-10">
    <!-- <MainHeader /> -->

    <section class="img-container mb-4">
      <img
        class="w-40 h-40 rounded-full"
        src="~/assets/caress.jpg"
        alt="Profile picture"
      />
    </section>

    <section class="img-container gap-4">
      <IconBtn
        v-for="(item, index) in icons"
        :key="index"
        :name="item.name"
        :link="item.link"
      />
    </section>

    <section class="links-container">
      <LinkBtn
        v-for="(item, index) in btns"
        :key="index"
        :text="item.text"
        :link="item.link"
      />
    </section>

    <footer class="flex items-center justify-center h-16">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        &copy; 2024 DevCaress. All rights reserved.
      </p>
    </footer>
  </section>
</template>
<style>
.links-container {
  @apply flex flex-col items-center justify-center gap-4 mt-4 w-11/12 md:w-4/6 max-w-screen-md mx-auto;
}
.img-container {
  @apply flex items-center justify-center;
}
</style>
