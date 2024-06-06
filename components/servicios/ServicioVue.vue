<template>
  <v-app class="container">
    <nav class="navegation">
      <div
        style="
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <img
          style="border-radius: 50%; width: 300px;
          margin-top: 2%;
          margin-left: 1%;"
          src="../../util/logo.png"
          alt=""
        />
        <div style="display: flex; gap: 10px; margin-left: auto">
          <v-btn @click="home" variant="text">Presentación</v-btn>

          <v-btn variant="text"
          :class="{ active: activeSection === 'service' }"
          @click="setActiveSection('service')"
          >Servicios</v-btn>
          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
        </div>
      </div>
      <!-- <v-toolbar color="black">
        <template v-slot:prepend>
          <div class="text-h5">Andres Rojo</div>
        </template>
        <v-toolbar-items style="margin-right: 5%">
          <v-btn @click="home" variant="text">Presentación</v-btn>

          <v-btn
            variant="text"
            :class="{ active: activeSection === 'service' }"
            @click="setActiveSection('service')"
            >Servicios</v-btn
          >

          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
        </v-toolbar-items>
      </v-toolbar> -->
    </nav>

   
    <section class="section1">
      <h1>SERVICIOS</h1>

      <P>
        Como desarrollador apasionado por la tecnología y la innovación, ofrezco
        una gama de servicios especializados en el desarrollo de soluciones
        digitales que incluyen APIs, aplicaciones web y páginas web. Con un
        compromiso inquebrantable con la calidad y la eficiencia. <br />

        <br />
        Mi objetivo es proporcionar una solución personalizada que no solo
        satisfaga necesidades actuales <br />
        sino que también facilite su crecimiento y éxito futuro.
      </P>
    </section>

    <section class="section2">
      <h3>Servicios que ofrezco</h3>
      <div class="categories">
        <div class="api">
          <img src="/util/api.jpg" alt="APIs" />
        </div>
        <div class="web">
          <img src="/util/pagina web.jpg" alt="Páginas Web" />
        </div>
        <div class="app">
          <img
            src="/util/desarrollo-aplicaciones-web.png"
            alt="Aplicaciones Web"
          />
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
      <div
        style="background-color: rgb(151, 157, 142)"
        class="bg-black d-flex w-100 align-center px-4"
      >
        <strong>Contacto</strong>
        <v-spacer></v-spacer>
        <a
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.url"
          target="_blank"
        >
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
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
const router = useRouter();

const icons = ref([
  { name: "mdi-github", url: CONFIG.GIT_HUB },
  { name: "mdi-gmail", url: `mailto:${CONFIG.CORREO}` },
  { name: "mdi-linkedin", url: CONFIG.LINKEDIN}
]);

const activeSection = ref("service");

const setActiveSection = (section) => {
  activeSection.value = section;
};

const home = () => {
  router.push("/");
};

const proyect = () => {
  router.push('/proyectos/proyecto');
}
</script>

<style>
p{
  color: aliceblue;
}
body,
.container,
.d-flex flex-column {
  background-color: #000;
}
.section1 {
  background-color: #000;
  margin-top: 5%;
  margin-left: 5%;
}
.section1 h1 {
  color: aqua;
  font-size: 250%;
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

.categories {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}
.categories  {
  margin-top: 2%;
}

.categories img {
  display: flex;
  width: 300px;
}

.api,
.web,
.app{
  padding-left: 4%;
  padding-right: 4%;
}

.categories .api p {
  color:aliceblue;
  font-size: 102px;
}

.categories .api img {
  color:aliceblue;
  width: 300px;
  height: 300px;
}

.categories .web {
  color:aliceblue;
  font-size: 102px;
}

.categories .web img {
  color:aliceblue;
  font-size: 102px;
  height: 300px;

}

.categories .app{
  color:aliceblue;
  font-size: 102px;
}

.categories .app img {
  color:aliceblue;
  font-size: 102px;
  height: 300px;

}
.parrafos {
  display: flex;
}
.parrafos .uno {
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
  
}
.parrafos .dos {
  margin-left: 8%;
  margin-right: 6%;
  width: 800px;
  margin-top: 2%;
}

.parrafos .tres {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
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

.parrafos p {
  font-family: 'Times New Roman', Times, serif;
}
</style>
