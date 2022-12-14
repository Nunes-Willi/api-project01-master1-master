<script>
import HeadeR from "./components/HeadeR.vue";
export default {
  components: { HeadeR },
};
</script>
<template>
  <header>
    <HeadeR />
  </header>
  <main>
    <RouterView />
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
  display: flex;
  padding: 50px;
  flex-wrap: wrap;
}
</style>
