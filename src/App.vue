<script>
import HomeView from "./views/HomeView.vue";
export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<template>
  <div class="container">
    <HomeView />
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100%;
}

.navbar {
  display: flex;
  justify-content: space-around;
}
</style>
