<template>
  <Header v-on:filter-popular="filterPopular" v-bind:URL="URL"></Header>
  <div class="movies" v-if="filmes.length != 0">
    <div class="content-movie" v-for="filme in filmes">
      <Card v-bind:filme="filme" v-on:click="showDetailsMovie" />
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
      URL: "https://api.themoviedb.org/3/",
      filter: [],
      teste: 28,
    };
  },
  async created() {
    // Utilizando o async/await para aguardar a resposta da API e depois atribuir os dados.
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
    // Solicitação da API para todos os filmes que estão nos top 50
    async requestMovies() {
      const response = await fetch(
        `${this.URL}trending/movie/day?api_key=${
          import.meta.env.VITE_MOVIES_DB_KEY
        }`
      );
      const result = await response.json();
      return result;
    },

    async requestFilterMovies() {
      const response = await fetch(
        `${this.URL}discover/movie?api_key=${
          import.meta.env.VITE_MOVIES_DB_KEY
        }&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&vote_count.gte=500&with_genres=${this.filter.join(
          ","
        )}&with_watch_monetization_types=flatrate`
      );
      const result = await response.json();
      return result;
    },

    // Adiciona a categoria clicada no array de filtro
    async filterPopular(event) {
      this.filter.push(event.id);
      const updateMovies = await this.requestFilterMovies();
      this.filmes = updateMovies.results.map((item) => {
        return {
          ...item,
          title: item.title,
          posterPath: item.poster_path,
          dataMovie: item.release_date,
        };
      });
    },

    // Mostra os detalhes do filme clicado
    showDetailsMovie(event) {
      this.$router.push({ name: "Details", params: { id: event.id } });
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
