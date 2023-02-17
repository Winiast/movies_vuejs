<template>
  <div>
    <div class="movies" v-for="filme in filmes">
      <Card v-bind:filme="filme" />
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "HomeView",
  components: {
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

<style>
.movies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
}
</style>
