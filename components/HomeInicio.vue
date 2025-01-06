<template>
  <v-app class="container">
    <nav class="navegation">
      <div class="nav-content">
        <img src="../util/logo.png" alt="Logo" class="logo" />
        <div class="nav-buttons">
          <v-btn
            variant="text"
            :class="{ active: activeSection === 'presentation' }"
            @click="setActiveSection('presentation')"
            >Presentación</v-btn
          >
          <v-btn variant="text" @click="service">Servicios</v-btn>
          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
        </div>
      </div>
    </nav>

    <section class="section1">
      <h1>HOLA MI NOMBRE ES ANDRES</h1>
      <h2 style="font-size: 50px">Desarrollador de software</h2>
      <p>
        Soy desarrollador de software, desde que me adentré en el mundo de la
        programación he estado obsesionado con encontrar soluciones creativas a
        problemas complejos y crear productos tecnológicos que impacten de
        manera positiva en la vida de las personas.
      </p>
    </section>

    <section class="section2">
      <h3>Habilidades Destacadas</h3>
      <div style="margin-top: 2%" class="images">
        <div class="skill">
          <h2 style="font-size: 50px">Desarrollo Web</h2>
          <img
            style="width: 450px; height: 300px"
            src="../util/33.png"
            alt="Node.js"
          />
        </div>
        <div class="skill">
          <h2 style="font-size: 50px">Análisis de datos</h2>
          <img
            style="width: 450px; height: 300px"
            src="../util/datos-y-graficas-relevantes.jpg"
            alt="Express"
          />
        </div>
      </div>
    </section>
    <section class="section2">
      <h3>Lenguajes y Frameworks De Desarrollo</h3>
      <div style="margin-top: 2%" class="images">
        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="../util/javascript.png"
            alt="JavaScript"
          />
        </div>

        <br />
        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/26a17d10e39adb59c0b8efef533475ef57c726490d9dcf022558d3b4d3fd4d03/68747470733a2f2f692e626c6f67732e65732f3864323432302f3635305f313030305f6a6176612f3435305f313030302e77656270"
            alt="Java"
          />
        </div>

        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/7a51fd739b8842b77b72a23ecfc9733f369d41ae604298657738e3c45d03d476/68747470733a2f2f6a6168617a69656c706f6e63652e636f6d2f77702d636f6e74656e742f75706c6f6164732f707974686f6e2e706e67"
            alt="Python"
          />
        </div>

        <br />
        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/f79e907b575f52746df0681cf1303c95afca425fd7ae9d226e07900bd0838c90/68747470733a2f2f7777772e6d75796c696e75782e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30342f6e6f64656a732e706e67"
            alt="node.js"
          />
        </div>
        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/7b098769578864ba3ba2d3a777a5e0468d42d06379b55ccc8a07fb0ba465fda8/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3531322f657870726573732d6a732e706e67"
            alt=""
          />
        </div>

        <br />
        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/3aec4c13cdb91e36a6acc0254e7bb1d4458bc73ff7f42d8e61666c0050543296/68747470733a2f2f6b696e7374612e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032322f30362f6e6573742d6a732d6c6f676f2e706e67"
            alt="nest"
          />
        </div>

        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/f789d687e85d0a7e6c0589c86574a5384e2aed8b7982b2e3f0ca7dc771896454/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f76322f726573697a653a6669743a313030302f312a714a7070544d64755858686a675532745a74395366512e706e67"
            alt=""
          />
        </div>

        <br />
        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/ef447d27faeac53acdead46603956566096a1be47cae1f60f1fe45c24393ef6b/68747470733a2f2f6170692e6f74616b6f79692e736f6674776172652f75706c6f6164732f636f6e74656e742f323032332f31312f32302f313238302f7675656a732d616e642d73656f2d2d796f75722d73746570732d746f2d74616b652d746f2d6265636f6d652d6d6f72652d73656f2d667269656e646c792d333137783233372e77656270"
            alt=""
          />
        </div>

        <div class="skill">
          <img
            style="width: 450px; height: 300px"
            src="https://camo.githubusercontent.com/aafdcccc13673a95eee71819045e11c5a61a1d560129fc3c9affd46cdc5c3b9b/68747470733a2f2f63646e2e767565746966796a732e636f6d2f696d616765732f6c6f676f732f6c6f676f2e737667"
            alt=""
          />
        </div>
      </div>
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
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
const router = useRouter();

const icons = ref([
  { name: "mdi-github", url: CONFIG.GIT_HUB },
  { name: "mdi-gmail", url: `mailto:${CONFIG.CORREO}` },
  { name: "mdi-linkedin", url: CONFIG.LINKEDIN },
  { name: "mdi-whatsapp", url: CONFIG.WPP },
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
body,
.container {
  background-color: #000;
  color: azure;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
}

.section2 h3 {
  font-size: 30px;
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
  max-width: 300px;
  min-width: 300px;
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

.section1,
.section2 {
  padding: 5% 10%;
  text-align: center;
}

.section1 h1,
.section1 h2,
.section1 p {
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
  flex-direction: row;
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

  .section1 h1,
  .section1 h2,
  .section1 p {
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
  
  .section1 h1,
  .section1 h2,
  .section1 p {
    font-size: 16px;
  }

  .skill {
    font-size: 30px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1500px;
  }

  .section1 h1 {
    font-size: 2rem;
    color: aqua;
  }
  .section1 h2 {
    font-size: 5rem;
  }
  .section1 p {
    font-size: 1.6rem;
  }

  .navegation {
    padding: 20px 0;
  }
  .navegation .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navegation img {
    width: 150px;
  }
  .navegation .right-buttons {
    display: flex;
    gap: 20px;
  }
  .navegation .right-buttons v-btn {
    font-size: 1.4rem;
  }

  .section2 .images img {
    width: 150px;
  }

  .separator {
    margin: 40px 0;
  }
}

@media (min-width: 438px) {
  .container {
    max-width: 1500px;
  }

  .section1 h1 {
    font-size: 2rem;
    color: aqua;
  }
  .section1 h2 {
    font-size: 5rem;
  }
  .section1 p {
    font-size: 1.6rem;
  }

  .navegation {
    padding: 20px 0;
  }
  .navegation .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navegation img {
    width: 150px;
  }
  .navegation .right-buttons {
    display: flex;
    gap: 20px;
  }
  .navegation .right-buttons v-btn {
    font-size: 1.4rem;
  }

  .section2 .images img {
    width: 150px;
  }

  .separator {
    margin: 40px 0;
  }
}

/* Estilos para los iconos */
.images div,
.fr div {
  font-size: 200px;
}

.images .js,
.images .node,
.images .ex,
.images .vue,
.fr .nuxt,
.fr .vuetify {
  margin-top: 2%;
}

.proyectos img {
  width: 400px;
  height: 400px;
}

.enlaces a {
  padding: 10px 20px;
}
.enlaces .git,
.enlaces .app {
  font-size: 1.4rem;
}
</style>
