<template>
  <v-app class="container">
    <nav class="navegation">
      <div class="nav-content">
        <img src="../util/logo.png" alt="Logo" class="logo" />
        <div class="nav-buttons">
          <v-btn variant="text" :class="{ active: activeSection === 'presentation' }" @click="setActiveSection('presentation')">Presentación</v-btn>
          <v-btn variant="text" @click="service">Servicios</v-btn>
          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
        </div>
      </div>
    </nav>

    <section class="section1">
      <h1>HOLA MI NOMBRE ES ANDRES</h1>
      <h2>Desarrollo aplicaciones web</h2>
      <p>Soy desarrollador de software, desde que me adentré en el mundo de la programación he estado obsesionado con encontrar soluciones creativas a problemas complejos y crear productos tecnológicos que impacten de manera positiva en la vida de las personas.</p>
    </section>

    <section class="section2">
      <h3>Habilidades destacadas</h3>
      <div class="images">
        <div class="skill"><icon icon="logos:javascript" alt="JavaScript" /></div>
        <div class="skill"><icon icon="logos:nodejs" alt="Node.js" /></div>
        <div class="skill"><icon icon="simple-icons:express" alt="Express" /></div>
        <div class="skill"><icon icon="logos:vue" alt="Vue.js" /></div>
        <div class="skill"><icon icon="logos:vuetifyjs" alt="Vuetify.js" /></div>
      </div>
    </section>
    <hr class="separator" />
    <v-footer class="footer">
      <div class="footer-top">
        <strong>Contacto</strong>
        <v-spacer></v-spacer>
        <a v-for="icon in icons" :key="icon.name" :href="icon.url" target="_blank">
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
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';
const CONFIG = useRuntimeConfig().public;
const router = useRouter();

const icons = ref([
  { name: "mdi-github", url: CONFIG.GIT_HUB },
  { name: "mdi-gmail", url: `mailto:${CONFIG.CORREO}` },
  { name: "mdi-linkedin", url: CONFIG.LINKEDIN }
]);

const activeSection = ref("presentation");

const setActiveSection = (section) => {
  activeSection.value = section;
};

const service = () => {
  router.push("/servicio/servicio");
};

const proyect = () => {
  router.push("/proyectos/proyecto");
};
</script>

<style scoped>
body, .container {
  background-color: #000;
  color: azure;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
}

.logo {
  border-radius: 50%;
  width: 40vw;
  max-width: 500px;
  min-width: 400px;
}

.separator {
  border: none;
  height: 1px;
  background-color: rgb(59, 62, 64);
  margin: 2rem 0;
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

.section1, .section2 {
  padding: 5% 10%;
  text-align: center;
}

.section1 h1, .section1 h2, .section1 p {
  margin: 20px 0;
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.skill {
  font-size: 50px;
}

.footer {
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
}

.footer-top {
  display: flex;
  flex-direction:row;
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


@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
  }

  .logo {
    width: 300px;
    
  }

  .section1 h1, .section1 h2, .section1 p {
    font-size: 18px;
  }

  .skill {
    font-size: 40px;
  }
}

@media (max-width: 480px) {
  .nav-buttons {
    flex-direction: column;
  }

  .section1 h1, .section1 h2, .section1 p {
    font-size: 16px;
  }

  .skill {
    font-size: 30px;
  }
}

/* Estilos para pantallas de escritorio */
@media (min-width: 1024px) {
  .container {
    max-width: 1500px; /* Ancho máximo del contenedor principal */
   /* Centra el contenedor en la pantalla */
  }

  /* Ajustes de alineación y tamaño de texto */
  .section1 h1 {
    font-size: 2rem;
    color: aqua; /* Tamaño de fuente más pequeño */
  }
  .section1 h2 {
    font-size: 5rem; /* Tamaño de fuente más pequeño */
  }
  .section1 p {
    font-size: 1.6rem; /* Tamaño de fuente más pequeño */
  }

  /* Ajustes de alineación y espaciado de botones de navegación */
  .navegation {
    padding: 20px 0; /* Espaciado interior de la barra de navegación */
  }
  .navegation .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navegation img {
    width: 150px; /* Tamaño de imagen reducido */
  }
  .navegation .right-buttons {
    display: flex;
    gap: 20px;
  }
  .navegation .right-buttons v-btn {
    font-size: 1.4rem; /* Tamaño de fuente más pequeño para los botones */
  }

  /* Ajustes de imágenes */
  .section2 .images img {
    width: 150px; /* Tamaño de imagen reducido */
  }

  /* Ajustes de separadores */
  .separator {
    margin: 40px 0; /* Espaciado más grande entre secciones */
  }
}

@media (min-width: 438px) {
  .container {
    max-width: 1500px; /* Ancho máximo del contenedor principal */
   /* Centra el contenedor en la pantalla */
  }

  /* Ajustes de alineación y tamaño de texto */
  .section1 h1 {
    font-size: 2rem;
    color: aqua; /* Tamaño de fuente más pequeño */
  }
  .section1 h2 {
    font-size: 5rem; /* Tamaño de fuente más pequeño */
  }
  .section1 p {
    font-size: 1.6rem; /* Tamaño de fuente más pequeño */
  }

  /* Ajustes de alineación y espaciado de botones de navegación */
  .navegation {
    padding: 20px 0; /* Espaciado interior de la barra de navegación */
  }
  .navegation .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navegation img {
    width: 150px; /* Tamaño de imagen reducido */
  }
  .navegation .right-buttons {
    display: flex;
    gap: 20px;
  }
  .navegation .right-buttons v-btn {
    font-size: 1.4rem; /* Tamaño de fuente más pequeño para los botones */
  }

  /* Ajustes de imágenes */
  .section2 .images img {
    width: 150px; /* Tamaño de imagen reducido */
  }

  /* Ajustes de separadores */
  .separator {
    margin: 40px 0; /* Espaciado más grande entre secciones */
  }
}

/* Estilos para los iconos */
.images div,
.fr div {
  font-size: 200px; /* Tamaño de fuente para los iconos */
}

.images .js,
.images .node,
.images .ex,
.images .vue,
.fr .nuxt,
.fr .vuetify {
  margin-top: 2%; /* Espaciado entre los iconos */
}

/* Estilos para los iconos en la sección de proyectos */
.proyectos img {
  width: 400px; /* Ancho fijo para las imágenes de proyectos */
  height: 400px; /* Altura fija para las imágenes de proyectos */
}

/* Estilos para los iconos de enlaces */
.enlaces a {
  padding: 10px 20px; /* Espaciado alrededor de los botones de enlaces */
}
.enlaces .git,
.enlaces .app {
  font-size: 1.4rem; /* Tamaño de fuente para los botones de enlaces */
}
</style>
