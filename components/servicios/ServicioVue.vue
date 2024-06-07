<template>
  <v-app class="container">
    <nav class="navegation">
      <div class="nav-content">
        <img
          class="logo"
          src="../../util/logo.png"
          alt="Logo"
        />
        <div class="nav-buttons">
          <v-btn @click="home" variant="text">Presentación</v-btn>
          <v-btn variant="text" :class="{ active: activeSection === 'service' }" @click="setActiveSection('service')">Servicios</v-btn>
          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
        </div>
      </div>
    </nav>

    <section class="section1">
      <h1>SERVICIOS</h1>
      <p>
        Como desarrollador apasionado por la tecnología y la innovación, ofrezco una gama de servicios especializados en el desarrollo de soluciones digitales que incluyen APIs, aplicaciones web y páginas web. Con un compromiso inquebrantable con la calidad y la eficiencia.<br /><br />
        Mi objetivo es proporcionar una solución personalizada que no solo satisfaga necesidades actuales sino que también facilite su crecimiento y éxito futuro.
      </p>
    </section>

    <section class="section2">
      <h3>Servicios que ofrezco</h3>
      <div class="categories">
        <div class="category api">
          <img src="/util/api.jpg" alt="APIs" />
        </div>
        <div class="category web">
          <img src="/util/pagina web.jpg" alt="Páginas Web" />
        </div>
        <div class="category app">
          <img src="/util/desarrollo-aplicaciones-web.png" alt="Aplicaciones Web" />
        </div>
      </div>
      <div class="parrafos">
        <p class="uno">Desarrollo APIs escalables y seguras que permiten la integración eficiente entre diversos sistemas y aplicaciones.</p>
        <p class="dos">Desarrollo páginas web atractivas y funcionales que representan la identidad y los objetivos de tu marca.</p>
        <p class="tres">Diseño y desarrollo aplicaciones web interactivas y responsivas que ofrecen experiencias de usuario excepcionales en todos los dispositivos.</p>
      </div>
    </section>
    <hr class="separator" />

    <v-footer class="d-flex flex-column" style="background-color: black">
      <div class="contact-header">
        <strong>Contacto</strong>
        <v-spacer></v-spacer>
        <a v-for="icon in icons" :key="icon.name" :href="icon.url" target="_blank">
          <v-btn :icon="icon.name" class="icon-btn" size="small" variant="plain"></v-btn>
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
import { useRouter } from 'vue-router';
import { useRuntimeConfig } from '#app';
const CONFIG = useRuntimeConfig().public;
const router = useRouter();

const icons = ref([
  { name: 'mdi-github', url: CONFIG.GIT_HUB },
  { name: 'mdi-gmail', url: `mailto:${CONFIG.CORREO}` },
  { name: 'mdi-linkedin', url: CONFIG.LINKEDIN }
]);

const activeSection = ref('service');

const setActiveSection = section => {
  activeSection.value = section;
};

const home = () => {
  router.push('/');
};

const proyect = () => {
  router.push('/proyectos/proyecto');
};
</script>

<style scoped>
.container {
  background-color: #000;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.nav-content {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
}

.logo {
  border-radius: 50%;
  width: 40vw;
  max-width: 200px;
  min-width: 100px;
}

.nav-buttons {
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
}

.section1 {
  background-color: #000;
  padding: 5%;
  text-align: center;
}

.section1 h1 {
  color: aqua;
  font-size: 2rem;
}

.section1 p {
  color: azure;
  font-size: 1rem;
  margin-top: 1rem;
  line-height: 1.5;
}

.section2 {
  background-color: #000;
  padding: 5%;
}

.section2 h3 {
  color: azure;
  font-size: 1.5rem;
  text-align: center;
}

.categories {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
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

.parrafos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.parrafos p {
  color: aliceblue;
  font-size: 1rem;
}

.separator {
  border: none;
  height: 1px;
  background-color: rgb(59, 62, 64);
  margin: 2rem 0;
}

.contact-header {
  background-color: rgb(151, 157, 142);
  display: flex;
  align-items: center;
  padding: 1rem;
}

.icon-btn {
  margin: 0 0.5rem;
}

.footer-bottom {
  padding: 1rem;
  background-color: #000;
  text-align: center;
  color: white;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
}

/* Media Queries */
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

  .parrafos p {
    font-size: 0.875rem;
  }

  .category {
    width: 90vw;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 60vw;
  }

  .nav-buttons {
    flex-direction: column;
    gap: 0.25rem;
  }

  .section1 h1 {
    font-size: 1.25rem;
  }

  .section1 p {
    font-size: 0.75rem;
  }

  .section2 h3 {
    font-size: 1rem;
  }

  .parrafos p {
    font-size: 0.75rem;
  }
}
</style>
