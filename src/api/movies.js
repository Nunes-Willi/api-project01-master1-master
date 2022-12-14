import axios from "axios";

export default class MoviesAPI {
  async getPopular() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR&page=1"
    );
    return data.results;
  }
  async getComedias() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate")
    return data.results
  }
  async getAcoes() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate)")
    return data.results
  }
  
  async getRomances() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate")
    return data.results
  }

  async getFiccoes() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate")
    return data.results
  }
}