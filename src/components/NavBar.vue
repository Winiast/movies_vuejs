<template>
  <div class="navbar">
    <nav class="navbar-content">
      <img src="../assets/logo.png" alt="logo" />
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.navbar {
  padding: 20px;
  background-color: #5c16c5;
}

.navbar-content {
  display: flex;
  justify-content: center;
  padding: 20px;
}

@media screen and (min-width: 768px) {
  .navbar-content img {
    width: 180px;
  }
}
</style>
