<template>
  <v-app class="container">
    <section class="section1">
      <h1 style="margin-top: 2%">Formación</h1>
      <v-card href="https://www.iudigital.edu.co/" target="_blank" append-icon="mdi-open-in-new" style="margin-top: 5%; background-color: black;" class="mx-auto" max-width="525">
        
        <v-list style="background-color:#000; color:aliceblue;" lines="two">
          <v-list-subheader style="color:aliceblue">Estudios</v-list-subheader>

          <v-list-item
            prepend-avatar="/iud.png"
            title="Ingenieria en desarrollo de software de datos"
          >
            <template v-slot:subtitle>
              <span class="font-weight-bold">Iu Digital de Antioquia</span>
              
            </template>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            prepend-avatar="/iud.png"
          >
            <template v-slot:title>
              Tecnologia en desarrollo de software<span class="text-grey-lighten-1"></span>
            </template>

            <template v-slot:subtitle>
              <span class="font-weight-bold">Iu Digital de Antioquia</span>
            </template>
          </v-list-item>

          <v-divider  inset></v-divider>

          
        </v-list>
      </v-card>
    </section>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
const router = useRouter();

</script>

<style scoped>
.container {
  background-color: #000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.section1 {
  padding: 5%;
  text-align: center;
}

.section1 h1 {
  color: aqua;
  font-size: 4rem;
}

.section1 p {
  color: azure;
  font-size: 2rem;
  margin-top: 1rem;
  line-height: 1.5;
}

.section2 {
  padding: 5%;
}

.section2 h3 {
  color: azure;
  font-size: 2rem;
  text-align: center;
}

.categories {
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.category {
  width: 80vw;
  max-width: 200px;
  min-width: 100px;
}

.category img {
  width: 100%;
  height: auto;
}

.categories p {
  color: aliceblue;
  font-size: 1rem;
}

.separator {
  border: none;
  height: 1px;
  background-color: rgb(59, 62, 64);
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    text-align: center;
  }

  .nav-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }

  .section1 h1 {
    font-size: 1.5rem;
  }

  .section1 p {
    font-size: 0.875rem;
  }

  .section2 h3 {
    font-size: 1.25rem;
  }

  .categories p {
    font-size: 0.875rem;
  }

  .category {
    width: 90vw;
  }
}

@media (max-width: 480px) {
  .nav-buttons {
    flex-direction: column;
  }

  .section1 p {
    font-size: 0.75rem;
  }

  .section2 h3 {
    font-size: 1rem;
  }

  .categories p {
    font-size: 0.75rem;
  }
}
</style>
