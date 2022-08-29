<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="checkAnswer( pokemon.id )"
          class="px-5 py-1"
          >
          {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

const { pokemonArr: pokemons, checkAnswer } = usePokemons();

</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 200px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>