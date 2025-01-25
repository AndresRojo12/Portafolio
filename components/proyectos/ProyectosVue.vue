<template>
  <v-app style="background-color: #000">
    <nav class="navigation">
      <div class="nav-content">
        <img class="logo" src="../../util/logo.png" alt="Logo" />
        <div class="nav-buttons">
          <v-btn @click="home" variant="text">Presentación</v-btn>
          <v-btn variant="text" @click="servi">Servicios</v-btn>
          <v-btn
            variant="text"
            :class="{ active: activeSection === 'proyect' }"
            @click="setActiveSection('proyect')"
            >Proyectos</v-btn
          >
          <v-btn variant="text" @click="contacto">Contacto</v-btn>
        </div>
      </div>
    </nav>

    <section class="presentacion">
      <div class="left">
        <p>
          En mi trayectoria como desarrollador de software, he tenido el rol de
          desarrollador fullstack. Desde mi experiencia como fullstack, he
          tenido la oportunidad de trabajar con diferentes herramientas tanto
          para backend como para frontend. <br /><br />
          Entre estas herramientas se encuentran las siguientes: <br /><br />
          <span class="highlight">Backend</span> <br /><br />
          - Javascript <br />
          - Node Js <br />
          - Express <br />
          - Sequelize-orm <br />
          - PostgreSQL <br />
          - Postman-Administrador de rutas http <br /><br />
          <span class="highlight">Frontend</span> <br /><br />
          - Nuxt <br />
          - Vue js <br />
          - Vuetify <br />
          - Pinia-para guardado de estado <br /><br />
          Con Sequelize-orm, he logrado comprender su funcionamiento, ¿para qué
          sirve? Más que todo para hacer migraciones a una base de datos sin
          necesidad de utilizar SQL, partiendo desde un modelo hecho con la
          sintaxis de "sequelize", donde se ejecuta una migración y se crea una
          tabla con el nombre del modelo en automático en la base de datos.
          <br /><br />
          En mi experiencia con el desarrollo de API´S y a medida que iba
          aprendiendo y comprendiendo su funcionamiento, me encontraba con
          problemas que para mi experiencia se tornaban difíciles de solucionar,
          pero durante el desarrollo iba comprendiendo el ¿por qué? del problema
          y a su vez iba dando solución con documentación asociada a las
          herramientas que utilicé para el desarrollo. <br /><br />
          He realizado proyectos propios, para así tener experiencia en el
          desarrollo en los cuales me han ayudado mucho para poder despegar y
          poder estar en un buen nivel de código. <br /><br />
          Mi pasión por el desarrollo de software va más allá de escribir
          código; me apasiona crear soluciones innovadoras que resuelvan
          problemas reales y mejoren la vida de las personas. Estoy
          constantemente buscando oportunidades para aprender y crecer
          profesionalmente, ya sea explorando nuevas tecnologías o participando
          en proyectos desafiantes.
        </p>
      </div>
      <div class="right">
        <img
          src="/util/desarrollo-aplicaciones-web.png"
          alt="Imagen descriptiva"
        />
        <img src="/util/apiss.png" alt="Imagen descriptiva" />
        <img src="/util/apps.png" alt="Imagen descriptiva" />
        <img src="/util/javascript.png" alt="Imagen descriptiva" />
        <img src="/util/vuess.jpeg" alt="Imagen descriptiva" />
      </div>
    </section>
    <hr class="separator" />
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

    <hr class="separator" />
    <v-footer class="footer">
      <div class="footer-top">
        <strong>Contacto</strong>
        <v-spacer></v-spacer>
        <a
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.url"
          target="_blank"
        >
          <v-btn :icon="icon.name" class="footer-icon"></v-btn>
        </a>
      </div>
      <div class="footer-bottom">
        {{ new Date().getFullYear() }} — <strong>Andres Rojo</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
const router = useRouter();
const massalud = CONFIG.MASS_SALUD;
const chespirito = CONFIG.CHESPIRITO;
const store = CONFIG.STORE;


const icons = ref([
  { name: "mdi-github", url: CONFIG.GIT_HUB },
  { name: "mdi-gmail", url: `mailto:${CONFIG.CORREO}` },
  { name: "mdi-linkedin", url: CONFIG.LINKEDIN },
]);

const activeSection = ref("proyect");

const setActiveSection = (section) => {
  activeSection.value = section;
};

const home = () => {
  router.push("/");
};

const servi = () => {
  router.push("/servicio/servicio");
};

const contacto = () => {
  router.push("/contact/contact");
};
</script>

<style scoped>
.container {
  background-color: #000;
  padding: 0;
  margin: 0;
}

.highlight {
  color: aqua;
  font-weight: bold;
}

.nav-content {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
}

.logo {
  border-radius: 50%;
  max-width: 300px;
  min-width: 300px;
  padding: 15px 30px;
}

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

/* .separator {
  border: none;
  height: 1px;
  background-color: rgb(59, 62, 64);
  margin: 2rem 0;
} */

/* .proyectos {
  width: 50%;
} */

.salud {
  width: 50%;
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

.footer {
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
}

.footer-top {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.footer-icon {
  margin: 0 10px;
}

.footer-bottom {
  margin-top: 10px;
  font-size: 14px;
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
