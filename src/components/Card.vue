<template>
  <div class="card">
    <img
      class="card-img"
      v-bind:src="`https://image.tmdb.org/t/p/w200/${filme.poster_path}`"
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
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 350px;
}

.card-img {
  width: 100%;
  height: 300px;
}

.card-body {
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  padding-top: 1rem;
}

.card-body-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.card-body-average {
  font-size: 0.8rem;
  color: #666;
  font-weight: bold;
}
</style>
