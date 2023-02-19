<template>
  <header>
    <NavBar />

    <div class="content">
      <div class="content-title">
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
      </div>

      <div class="content-filter">
        <p>Filtre Por:</p>
        <div class="content-filter-types">
          <button class="content-filter-types-btn">Populares</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Header",
  components: {
    NavBar,
  },
};
</script>

<style></style>
