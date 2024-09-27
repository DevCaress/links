<script lang="ts" setup>
import { ref } from "vue";

import AppHeader from "~/components/AppHeader.vue";
import MainLayout from "~/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <AppHeader />
    <div class="container mx-auto px-4 text-center">
      <section class="md:flex">
        <div class="flex flex-col items-center justify-center">
          <h1
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-white"
          >
            Asesorías chingonas con el Caress
          </h1>
          <p
            class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-20 text-gray-400"
          >
            Ya para que te pongas chingon, ahora si llegaron las asesorías tanto para gente que va empezando y no sabe que pedo con su vida
            como para los que ya andan chambeando pero no saben como verga avanzar en su carrera 
          </p>
        </div>
        <div class="rounded-lg mb-5">
          <figure>
            <img src="~/assets/devcaress.jpeg" alt="" />
          </figure>
        </div>
      </section>

      <section class="md:flex">
        <div
          class="md:w-1/2 md:order-2 flex flex-col justify-center items-center"
        >
          <h2
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white"
          >
            Mejora tu CV y LinkedIn
          </h2>
          <p
            class="mb-6 text-lg font-normal lg:text-xl sm:px-16 text-gray-400"
          >
            Deja de poner pura mmda en tu CV y aprende a hacerlo bien,
            redactando de la forma correcta, destacando experiencia y
            habilidades, además aprende a venderte usando este misma info
          </p>
        </div>
        <div class="md:w-1/2 md:order-1">
          <figure class="flex justify-center items-center">
            <img
              src="~/assets/cv.jpg"
              class="w-7/12 md:w-full max-w-[450px] shadow-[0_10px_20px_10px_rgba(_219,_25,_67,_0.5)]"
              alt=""
            />
          </figure>
        </div>
      </section>

      <section class="md:flex">
        <div class="md:w-1/2 flex flex-col justify-center items-center">
          <h2
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight  text-white"
          >
            Define tu perfil profesional
          </h2>
          <p
            class="mb-6 text-lg font-normal lg:text-xl sm:px-16 text-gray-400"
          >
            Te puedo ayudar a definir tu camino ninja para que ya dejes de
            aprender y tomar cursos a lo pendejo porque no sabes en que
            enfocarte
          </p>
        </div>
        <div class="md:w-1/2">
          <figure class="flex justify-center items-center">
            <img
              src="~/assets/naruto.webp"
              class="w-7/12 md:w-full max-w-[450px] shadow-[0_10px_20px_10px_rgba(_219,_25,_67,_0.5)]"
              alt=""
            />
          </figure>
        </div>
      </section>

      <section class="md:flex">
        <div
          class="md:w-1/2 md:order-2 flex flex-col justify-center items-center"
        >
          <h2
            class="mb-4 text-4xl font-extrabold leading-none tracking-tight  text-white"
          >
            Mock Interview
          </h2>
          <p
            class="mb-6 text-lg font-normal lg:text-xl sm:px-16 text-gray-400"
          >
            Si siempre te quedas en la última ronda de entrevistas probablemente
            estes medio pendejo para responder pero ntp yo te ayudo
          </p>
        </div>
        <div class="md:w-1/2 md:order-1">
          <figure class="flex justify-center items-center">
            <img
              src="~/assets/interview.jpg"
              class="w-7/12 md:w-full max-w-[450px] shadow-[0_10px_20px_10px_rgba(_219,_25,_67,_0.5)]"
              alt=""
            />
          </figure>
        </div>
      </section>

      <section>
        <div class="block w-full max-w-[700px] cursor-pointer mx-auto">
          <div
            class="link-btn relative items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-red-700 to-purple-500 group group-hover:from-red-700 group-hover:to-purple-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-300 focus:ring-blue-800"
          >
            <a href="https://www.paypal.com/ncp/payment/LY5UVXS73DMCL">
              <p
                class="text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Agendar asesoría
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>

<style>
section {
  @apply my-[120px] max-w-[1024px] mx-auto;
}


</style>
