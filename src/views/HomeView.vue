<script>
import { RouterView } from "vue-router";
import CarCeu from "@/components/CarCeu.vue";
import ListaDisp from "@/components/ListaDisp.vue";

export default {
  components: { CarCeu, ListaDisp, RouterView },
};
</script>
<template>
  <RouterView />
  <CarCeu />
  <ListaDisp />
</template>
<style>
@import "@/assets/base.css";
</style>
