<template>
  <main class="main">
    <Nav />
    <router-view />
  </main>
</template>

<script>
import Nav from "./components/Nav/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style></style>
