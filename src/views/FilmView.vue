<script>
import CardMovie from "../components/CardFilme.vue";
import MoviesAPI from "../api/movies.js";
const moviesAPI = new MoviesAPI();
export default {
  components: { CardMovie },
  data() {
    return {
      acoes: [],
      comedias: [],
      romances: [],
      ficcoes: [],
    };
  },
  async created() {
    this.acoes = await moviesAPI.getAcoes();
    this.comedias = await moviesAPI.getComedias();
    this.romances = await moviesAPI.getRomances();
    this.ficcoes = await moviesAPI.getFiccoes();
  },
};
</script>

<template>
  <main class="flex flex-column p-50">
    <div>
      <h1 class="text-green-300 font-bold pb-4">Ação</h1>
      <div class="flex flex-wrap">
        <CardMovie
          v-for="filme of acoes.slice(0, 4)"
          :key="filme.id"
          :movie="filme"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold pb-4">Comédia</h1>
      <div class="flex flex-wrap">
        <CardMovie
          v-for="filme of comedias.slice(0, 4)"
          :key="filme.id"
          :movie="filme"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold pb-4">Romance</h1>
      <div class="flex flex-wrap">
        <CardMovie
          v-for="filme of romances.slice(0, 4)"
          :key="filme.id"
          :movie="filme"
        />
      </div>
    </div>
    <div>
      <h1 class="text-green-300 font-bold pb-4">Ficção Científica</h1>
      <div class="flex flex-wrap">
        <CardMovie
          v-for="filme of ficcoes.slice(0, 4)"
          :key="filme.id"
          :movie="filme"
        />
      </div>
    </div>
  </main>
</template>

<style>
body {
  background-color: #000;
}
header {
  height: 15%;
  width: 100%;
}
main {
  height: 70%;
}
</style>
