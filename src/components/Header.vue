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
            v-bind:key="category"
          >
            <!-- Colocar em um componente próprio -->
            <button
              v-if="category.status === false"
              v-on:click="
                $emit('filterPopular', category), alterarEstado(category.name)
              "
              class="content-filter-types-btn"
            >
              {{ category.name }}
            </button>

            <button
              v-else
              v-on:click="$emit('filterPopular', category)"
              class="content-filter-types-btn-others"
            >
              {{ category.name }}
              <img
                src="../assets/sair.png"
                alt="botãoSair"
                v-on:click="alterarEstado(category.name)"
              />
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

  props: ["URL"],

  emits: ["filterPopular"],

  data() {
    return {
      categories: [],
      teste: [{ name: "Ação", status: false }],
      showButtonPressed: false,
    };
  },
  methods: {
    alterarEstado(nameCategory) {
      this.categories.forEach((category) => {
        if (category.name === nameCategory) {
          category.status = !category.status;
        }
      });
    },

    async searchGenres() {
      const response = await fetch(
        `${this.URL}genre/movie/list?api_key=${
          import.meta.env.VITE_MOVIES_DB_KEY
        }`
      );
      const result = await response.json();
      return result;
    },
  },

  async created() {
    const resultGenres = await this.searchGenres();
    this.categories = resultGenres.genres.map((item) => {
      return {
        ...item,
        id: item.id,
        name: item.name,
        status: false,
      };
    });
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

.content-filter-types-btn-others {
  border-radius: 4px;
  text-align: center;
  padding: 10px;
  margin: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  background: #d18000;
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-filter-types-btn-others img {
  width: 20px;
  margin-left: 10px;
  padding-bottom: 5px;
  align-content: center;
}

.content-filter-types-btn:hover {
  background: #d18000;
  color: #ffffff;
  border: none;
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
    width: 70%;
    margin: 30px;
    line-height: 60px;
  }

  .content-filter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content-filter-types {
    width: 80%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
}
</style>
