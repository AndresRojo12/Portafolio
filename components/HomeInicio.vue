<template>
  <v-app class="container">
    <nav class="navegation">
      <v-toolbar color="black">
        <template v-slot:prepend>
          <div class="text-h5">Andres Rojo</div>
        </template>
        <v-toolbar-items style="margin-right: 5%">
          <v-btn
            variant="text"
            :class="{ active: activeSection === 'presentation' }"
            @click="setActiveSection('presentation')"
            >Presentación</v-btn
          >

          <v-btn variant="text" @click="service">Servicios</v-btn>

          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>

    <hr class="separator" />


    <section class="section1">
      <h1>HOLA MI NOMBRE ES ANDRES</h1>
      <h2>Desarrollo aplicaciones web</h2>
      <P
        >
        Soy desarrollador de software, desde que me adentré en el mundo de la
        programación <br />
        he estado obsesionado con encontrar soluciones creativas a problemas
        complejos y crear productos tecnológicos <br />
        que impacten de manera positiva en la vida de las personas.
      </P>
    </section>

    <section class="section2">
      <h3>Habilidades destacadas</h3>
      <div class="images">
        <div class="js"><icon icon="logos:javascript" alt="JavaScript" /></div>
        <div class="node"><icon icon="logos:nodejs" alt="Node.js" /></div>
        <div class="ex"><icon icon="simple-icons:express" alt="Express" /></div>
        <div class="vue"><icon icon="logos:vue" alt="Vue.js" /></div>
      </div>
      <div class="fr">
        <div class="nuxt"><icon icon="logos:nuxt" alt="Vue.js" /></div>
        <div class="vuetify"><icon icon="logos:vuetifyjs" alt="Vue.js" /></div>
      </div>
    </section>
    <hr class="separator" />

    <v-footer class="d-flex flex-column" style="background-color: black;">
      <div style="background-color:rgb(151, 157, 142) ;" class="bg-black d-flex w-100 align-center px-4">
        <strong>Contacto</strong>
        <v-spacer></v-spacer>
        <a v-for="icon in icons" :key="icon.name" :href="icon.url" target="_blank">
          <v-btn
            :icon="icon.name"
            class="bg-black mx-4"
            size="small"
            variant="plain"
          ></v-btn>
        </a>
      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Andres Rojo</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
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
  router.push('/servicio/servicio')
}

const proyect= () => {
  router.push('/proyectos/proyecto')
}
</script>

<style>
body, .container, .d-flex flex-column {
  background-color: #000;
}
.section1 {
  background-color: #000;
  margin-top: 5%;
  margin-left: 5%;
}
.section1 h1 {
  color: aqua;
}
.section1 p,
h1,
h2 {
  color: azure;
}
.section1 h2 {
  margin-top: 1%;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 500%;
}
.section1 p {
  margin-top: 2%;
  font-size: 200%;
  font-family: "Times New Roman", Times, serif;
}
.section2 {
  background: color #000;
  margin-left: 5%;
  margin-top: 5%;
}
.section2 h3 {
  color: azure;
  font-size: 200%;
}

.images {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  font-size: 200px;
}
.images div {
  margin-top: 2%;
}
.fr {
  display: flex;
  margin: 0 10px;
  font-size: 100px;
  margin-left: 5%;
}

.node,
.ex,
.vue {
  padding-left: 8%;
}

.ex path {
  fill: rgb(59, 62, 64);
}

.separator {
  border: none;
  height: 1px;
  background-color: rgb(59, 62, 64);
  margin: 20px 0;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
}
</style>
