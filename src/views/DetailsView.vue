<template>
  <h1>Detalhes</h1>
</template>

<script>
export default {
  name: "DetailsView",
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
