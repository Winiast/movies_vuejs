<template>
  <header>
    <NavBar />

    <div class="content">
      <div class="content-title">
        <h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2>
      </div>

      <div class="content-filter">
        <p>FILTRE POR:</p>
        <div class="content-filter-types">
          <div
            class="content-filter-types-container"
            v-for="category in categories"
          >
            <button
              v-on:click="filterPopular(category)"
              class="content-filter-types-btn"
            >
              {{ category }}
            </button>
          </div>
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

  data() {
    return {
      categories: [
        "Ação",
        "Aventura",
        "Animação",
        "Comédia",
        "Crime",
        "Documentário",
        "Drama",
        "Familia",
        "Fantasia",
        "Ficção Científica",
        "Romance",
        "Terror",
      ],
    };
  },
  methods: {
    filterPopular(category) {
      console.log(category);
    },
  },
};
</script>

<style>
.content {
  background-color: #2d0c5e;
  padding: 1rem;
}

.content-title {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 40px;
  padding-top: 20px;
  padding-bottom: 25px;
  color: #ffffff;
  text-align: start;
}

.content-filter {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #ffffff;
}

.content-filter-types {
  display: flex;
  flex-wrap: wrap;
}

.content-filter-types-container {
  margin: 0;
  padding: 0;
}

.content-filter-types-btn {
  background: #ffffff;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ffffff;
  color: #323232;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }
  .content-title {
    text-align: center;
    font-size: 2rem;
    width: 900px;
    margin: 30px;
    line-height: 60px;
  }

  .content-filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
