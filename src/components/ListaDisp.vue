<script>
import axios from "axios";

import ListaDois from "./ListaDois.vue";
import CardFilme from "./CardFilme.vue";

export default {
  components: { CardFilme, ListaDois },
  data() {
    return {
      popular: [],
      title: [],
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR&page=1`;
    const { data } = await axios.get(url);
    this.popular = data.results;
    this.title = data.results;
  },
};
</script>

<template>
  <main>
    <div class="container text-light" id="Filmes">
      <h2>Populares</h2>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-md-3"
          v-for="filme of popular.slice(0, 16)"
          :key="filme.id"
        >
          <CardFilme :filme="filme" />
        </div>
      </div>
    </div>

    <br /><br />

    <ListaDois />
  </main>
</template>
<style>
@import "@/assets/base.css";
</style>
