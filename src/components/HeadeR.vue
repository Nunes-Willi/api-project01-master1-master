<script>
import axios from "axios";

export default {
  data() {
    return {
      genres: [],
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=e459257500dba9d31f1002e2efdc21ac&language=pt-br`;
    const { data } = await axios.get(url);
    this.genres = data.genres;
  },
};
</script>

<template>
  <header>
    <div class="nome text-center">
      <h1>COPIAFLIX</h1>
    </div>

    <nav class="navbar navbar-expand-lg navbar-light cor1">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/"><p>Home</p></a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <p>Generos</p>
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li v-for="genre of genres" :key="genre.id">
                  <a class="dropdown-item" href="#">{{ genre.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>
<style>
@import "@/assets/base.css";
</style>
