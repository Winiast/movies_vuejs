<template>
  <div class="card">
    <img
      class="card-img"
      v-bind:src="`https://image.tmdb.org/t/p/w300/${filme.poster_path}`"
    />
    <div class="card-body">
      <h2 class="card-body-title">{{ filme.title }}</h2>
      <p class="card-body-average">{{ filme.dataMovie }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    filme: Object,
  },
};
</script>

<style>
.card {
  background-color: red;
}
</style>
