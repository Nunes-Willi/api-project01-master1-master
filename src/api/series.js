import axios from "axios";

export default class SeriesAPI {
  async getPopular() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR&page=1"
    );
    return data.results;
  }
  async getDrama() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate")
    return data.results
  }
  async getComedia() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate")
    return data.results
  }
  async getAcao() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759&with_watch_monetization_types=flatrate")
    return data.results
  }
  async getFiccao() {
    const { data } = await axios.get("https://api.themoviedb.org/3/discover/tv?api_key=81c14ff45faa24817f29db18e13bf3b0&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10765&with_watch_monetization_types=flatrate")
    return data.results
  }
}