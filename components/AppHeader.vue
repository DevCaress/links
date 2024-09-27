<script lang="ts" setup></script>

<template>
  <header class="sticky top-0">
    <nav class="border-gray-200 bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-center md:justify-between mx-auto px-4 py-4"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="~/assets/logo-h.png" class="h-10" alt="DevCaress Logo" />
        </NuxtLink>
        <div
          class="hidden w-full md:flex justify-center md:w-auto"
          id="navbar-default"
        >
          <div
            class="link-btn cursor-pointer relative items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-red-700 to-purple-500 group group-hover:from-red-700 group-hover:to-purple-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
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
      </div>
    </nav>
  </header>
</template>
