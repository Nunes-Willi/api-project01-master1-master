<script>
export default {
  props: ["filme"],
  methods: {
    getImageUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
  },
};
</script>

<template>
  <ul>
    <li>
      <RouterLink :to="`/film/${filme.id}`">
        <img :src="getImageUrl(filme.poster_path)" />
      </RouterLink>

      <span>{{ filme.title }}</span>
    </li>
  </ul>
</template>
<style scoped>
@import "@/assets/base.css";

img {
  width: 180px;
  border-radius: 20px;
  margin-bottom: 2rem;
}
</style>
