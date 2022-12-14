<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      tv: [],
      overview: [],
    };
  },
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
  async created() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${this.id}?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-br`
    );
    this.tv = res.data;
    this.overview = res.data;
  },
};
</script>

<template>
  <div class="place-self-center">
    <div
      class="flex flex-col place-self-center bg-green-300 shadow-md md:flex-row w-3/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        class="object-cover w-full h-96 md:h-full md:w-96"
        :src="getImageUrl(tv.poster_path)"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ tv.name }}
        </h5>
        <p class="overview">
          {{ tv.overview }}
        </p>
        <p class="Titulo">Título Original: {{ tv.original_title }}</p>
        <p class="release_date">Data de Lançamento: {{ tv.release_date }}</p>
        <p class="runtime">Duração: {{ tv.runtime }} minutos</p>
        <p class="vote">Avaliação: {{ tv.vote_average }}</p>
        <p>Gênero(s):</p>
        <div v-for="(value, index) in tv.genres" :key="'value' + index">
          <p class="genero">{{ value.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h5 {
  color: white;
}

img {
  width: 280px;
  border-radius: 20px;
}

div {
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: center;
}

main {
  display: flex;
  width: 1100px;
  align-items: center;
}

span {
  margin: 1rem;
}
</style>
