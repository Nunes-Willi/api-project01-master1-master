<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      movie: [],
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
      `https://api.themoviedb.org/3/movie/${this.id}?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR`
    );
    this.movie = res.data;
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
        :src="getImageUrl(movie.poster_path)"
        alt=""
      />
      <main>
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ movie.title }}
        </h5>
        <p class="overview">
          {{ movie.overview }}
        </p>
        <p class="Titulo">Título Original: {{ movie.original_title }}</p>
        <span>|</span>
        <p class="release_date">Data de Lançamento: {{ movie.release_date }}</p>
        <span>|</span>
        <p class="runtime">Duração: {{ movie.runtime }} minutos</p>
        <span>|</span>
        <p class="vote">Avaliação:{{ movie.vote_average }}</p>
        <span>|</span>
        <p>Gênero(s):</p>
        <div v-for="(value, index) in movie.genres" :key="'value' + index">
          <p class="genero">{{ value.name }}</p>
        </div>
      </main>
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

main{
  display: flex;
  width: 1100px;
  align-items: center;
}

span{
  margin: 1rem;
}
</style>
