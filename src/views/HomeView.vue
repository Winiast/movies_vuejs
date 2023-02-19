<template>
  <Header></Header>
  <div class="movies" v-if="filmes.length != 0">
    <div class="content-movie" v-for="filme in filmes">
      <Card v-bind:filme="filme" />
    </div>
  </div>

  <div v-else>
    <h1>Carregando...</h1>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
export default {
  name: "HomeView",
  components: {
    Header,
    Card,
  },

  data() {
    return {
      filmes: [],
      URL: "https://api.themoviedb.org/3/trending/movie/day?",
    };
  },
  async created() {
    const filterData = await this.requestMovies();
    this.filmes = filterData.results.map((item) => {
      return {
        ...item,
        title: item.title,
        posterPath: item.poster_path,
        dataMovie: item.release_date,
      };
    });
  },

  methods: {
    async requestMovies() {
      const response = await fetch(
        `${this.URL}api_key=${import.meta.env.VITE_MOVIES_DB_KEY}`
      );
      const result = await response.json();
      return result;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.content-movie {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>
