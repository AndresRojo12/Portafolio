<template>
  <v-app class="container">
    <v-main>
      <NuxtPage />
    </v-main>
    <v-footer>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style>
.container {
  background-color: black;
}
</style>
