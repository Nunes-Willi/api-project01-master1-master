import { ref } from 'vue'
import { defineStore } from 'pinia'
import MovieSearchApi from '@/api/procurafilm'
const moviesearchApi = new MovieSearchApi()

export const useMovieSearchStore = defineStore('procurafilm', () => {
  const movies = ref([])
  async function get_movies(id) {
    movies.value = await moviesearchApi.getMovieSearchById(id)
  }
  return { movies , get_movies }
})