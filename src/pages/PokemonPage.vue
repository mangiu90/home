<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else class="">
        
        <PokemonPicture class="mb-3 mx-auto"/>
        <PokemonOptions class="mb-3" />

        <template v-if="showAnswer" class="mb-3">
            <h2 class="fade-in mb-3">{{ message }}</h2>
            <button @click="newGame" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Nuevo Juego
            </button>
        </template>

    </div>
    
</template>


<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';


const { pokemon,showAnswer, message, mixPokemonArray, newGame } = usePokemons();
    
mixPokemonArray();

</script>

