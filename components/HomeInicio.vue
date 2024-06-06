<template>
  <v-app class="container">
    <nav class="navegation">
      <div class="nav-content">
        <img src="../util/logo.png" alt="Logo" class="logo"/>
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

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 2%;
}

.logo {
  width: 300px;
  border-radius: 50%;
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
  gap: 60px;
}

.skill {
  font-size: 300px;
}

.footer {
  background-color: black;
  color: white;
  
  text-align: center;
}

.footer-top {
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
  
}

.footer-icon {
  margin: 0 10px;
  margin-top: 5%;
 
}

.footer-bottom {
  margin-left: 50px;
  margin-top: 30px;
}


@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
  }

  .logo {
    width: 80px;
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
</style>
