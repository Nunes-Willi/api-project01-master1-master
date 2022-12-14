<script>
import axios from "axios";

import CardSerie from "./CardSerie.vue";

export default {
  components: { CardSerie },
  data() {
    return {
      serie: [],
      name: [],
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=e459257500dba9d31f1002e2efdc21ac&language&language=pt-BR&page=1`;
    const { data } = await axios.get(url);
    this.serie = data.results;
    this.name = data.results;
  },
};
</script>

<template>
  <main>
    <div class="container text-light" id="Series">
      <h2>SÉRIES</h2>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-md-3"
          v-for="serie of serie.slice(0, 16)"
          :key="serie.id"
        >
          <CardSerie :serie="serie" />
        </div>
      </div>
    </div>

    <br /><br />
  </main>
</template>
