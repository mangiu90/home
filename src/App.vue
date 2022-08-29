<script setup lang="ts">
import { ref } from 'vue';
import PokemonPage from './pages/PokemonPage.vue';

const showMenu = ref(false)
</script>

<template>
  <div class="banner-1">
    <!-- NavBar -->
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <div class="relative w-16 h-16">
          <img class="rounded-full shadow-sm" src="./assets/icon-soul-eater-death-mask.png" alt="user image" />
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
              </path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
        <li class="menu-button"><a href="#">Home</a></li>
        <li class="menu-button"><a href="#work" v-smooth-scroll>Pokemon</a></li>
        <li class="menu-button"><a href="#about" v-smooth-scroll>Acerca</a></li>
      </ul>
    </nav>
    <!-- End Navbar -->

    <div class="flex items-center mt-5">
      <div class="w-11/12 space-y-5 md:space-y-10">

      </div>

      <div class="w-8/12 flex justify-end">
        <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/death-chop.png" alt="user image" />
      </div>
    </div>
  </div>

  <div class="banner-2 space-y-10 pb-20" id="work">
    <h3 class="heading3 my-5">Pokemon</h3>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="">Quien es ese pokemon?</h4>

        <PokemonPage class=""/>

      </div>

    </div>

  </div>

  <div class="banner-2 md:flex items-center md:justify-evenly" id="about">
    <img class="md:h-[500px] h-[400px]" src="./assets/kid.png" alt="user image" />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item">Manuel Giudici</h4>
      <p class="font-work_sans">
        hola hola hola
        <br />
        chau chau chau
      </p>
    </div>
  </div>

  <div class="banner-1 h-full">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-6xl text-2xl font-Eczar mb-5 font-bold">
        algo algo algo
      </h2>
      <a class="underline text-2xl text-blue-600 font-work_sans">giudicimanuel@gmail.com</a>
    </div>
  </div>
</template>

<style scoped>
</style>
