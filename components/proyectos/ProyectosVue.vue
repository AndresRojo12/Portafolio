<template>
  <v-app style="background-color: #000">
    <section class="proyectos">
      <h1>Mis Proyectos</h1>
      <hr class="separator" />

      <br />

      <v-row class="cards" style="display: flex; justify-content: center">
        <v-col cols="12" md="2">
          <v-card
            class="zoom-card"
            :href="massalud"
            target="_blank"
            text="El proyecto massalud, consta de una plataforma, la cual sirva
            para agendar citas médicas e incluso solicitar medicamentos."
            title="Massalud"
          >
            <v-img
              style="width: 400px; height: 233px"
              src="/perfil paciente.png"
            >
            </v-img>
          </v-card>
        </v-col>

        <v-col cols="12" md="2">
          <v-card
            class="zoom-card"
            :href="chespirito"
            text="La aplicación Antigüedades Chespirito trata del interés por la
                  compra y venta de billetes y monedas, nacionales e internacionales."
            title="Antiguedades Chespirito"
            target="_blank"

          >
            <v-img style="width: 400px" src="/logos.png"> </v-img>
          </v-card>

        </v-col>

        <v-col cols="12" md="2">
          <v-card
            class="zoom-card"
            :href="store"
            text="La tienda ARM trata de un e-comerce, el cual trata de montar todo tipo
          de categorias de productos y hacer su compra."
            title="ARM STORE"
            target="_blank"
          >
            <v-img style="width: 400px; height: 233px" src="/store.png">
            </v-img>
          </v-card>

        </v-col>
      </v-row>
    </section>
  </v-app>
</template>

<script setup>
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
const massalud = CONFIG.MASS_SALUD;
const chespirito = CONFIG.CHESPIRITO;
const store = CONFIG.STORE;

</script>

<style scoped>
.presentacion {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
}

.presentacion .left,
.presentacion .right {
  width: 100%;
  padding: 20px;
}

.presentacion .left p {
  color: aliceblue;
  font-size: 1rem;
  line-height: 1.5;
}

.presentacion .right {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.presentacion .right img {
  width: 80%;
  max-width: 400px;
  height: auto;
  margin-top: 20px;
}


.proyectos {
  margin-top: 2%;
}


.proyectos h1 {
  font-size: 2rem;
  margin-top: 2%;
  text-align: center;
  color: azure;
}

.proyectos h2 {
  font-size: 1.5rem;
  margin-top: 4%;
  color: rgb(193, 186, 186);
  text-align: center;
  border-radius: 8px;
}

.proyectos p {
  margin-left: 10%;
  margin-top: 4%;
  color: aliceblue;
  font-size: 1rem;
  line-height: 1.5;
}

.proyectos img {
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
}

.enlaces {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  gap: 1rem;
}

.enlaces .git,
.app {
  background-color: aqua;
}


.zoom-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.zoom-card:hover {
  transform: scale(1.1); /* Ampliar la tarjeta */
  box-shadow: 0 8px 20px rgba(14, 67, 165, 0.3); /* Aumentar sombra */
}

@media (min-width: 768px) {
  .nav-buttons {
    gap: 4rem;
  }

  .container {
    max-width: 1500px;
  }

  .presentacion .left,
  .presentacion .right {
    width: 50%;
  }

  .presentacion .left p {
    font-size: 1.25rem;
  }

  .proyectos h1 {
    font-size: 3rem;
  }

  .proyectos h2 {
    font-size: 2rem;
  }

  .proyectos p {
    font-size: 1.25rem;
  }
}

@media (max-width: 1024px) {
  .logo {
    width: 10vw;
    max-width: 80px;
  }

  .nav-buttons v-btn {
    font-size: 0.9rem;
  }

  .presentacion .left p {
    font-size: 0.9rem;
  }

  .proyectos img {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .nav-buttons {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }

  .nav-content {
    flex-direction: column;
  }

  .presentacion .left p {
    font-size: 0.8rem;
  }

  .cards{
    padding:20px 100px;
  }

  .enlaces a {
    padding: 1%;
    margin: 1%;
  }
}
</style>
