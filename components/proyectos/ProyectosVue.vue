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
          style="
            border-radius: 50%;
            width: 300px;
            margin-top: 2%;
            margin-left: 1%;
          "
          src="../../public/favicon.ico"
          alt=""
        />
        <div style="display: flex; gap: 10px; margin-left: auto">
          <v-btn @click="home" variant="text">Presentación</v-btn>

          <v-btn variant="text" @click="servi">Servicios</v-btn>
          <v-btn
            variant="text"
            :class="{ active: activeSection === 'proyect' }"
            @click="setActiveSection('proyect')"
            >Proyectos</v-btn
          >
        </div>
      </div>
      <!-- <v-toolbar color="black">
        <template v-slot:prepend>
          <div class="text-h5">Andres Rojo</div>
        </template>
        <v-toolbar-items style="margin-right: 5%">
          <v-btn @click="home" variant="text">Presentación</v-btn>
          <v-btn variant="text" @click="servi">Servicios</v-btn>
          <v-btn
            variant="text"
            :class="{ active: activeSection === 'proyect' }"
            @click="setActiveSection('proyect')"
          >Proyectos</v-btn>
        </v-toolbar-items>
      </v-toolbar> -->
    </nav>
    
    <section class="presentacion">
      <div class="left">
        <p>
          En mi trayectoria como desarrollador de software, he tenido <br />
          el rol de desarrollador fullstack, desde mi experiencia como fullstack
          <br />
          he tenido la oportunidad de trabajar con diferentes herramientas
          <br />
          tanto para backend como para frontend. <br />
          <br />
          Entre estas herramientas se encuentran las siguientes: <br />
          <br />Backend <br />
          <br />- Javascript <br />
          - Node Js <br />
          - Express <br />
          - Sequelize-orm <br />
          - PostgreSQL <br />
          - Postman-Administrador de rutas http <br />
          <br />Frontend <br />
          <br />- Nuxt <br />
          - Vue js <br />
          - Vuetify <br />
          - Pinia-para guardado de estado <br />
          <br />Con Sequelize-orm, he logrado comprender su funcionamiento,
          <br />
          ¿para qué sirve?, más que todo para hacer migraciones a una base de
          datos <br />
          sin necesidad de utilizar SQL, partiendo desde un modelo hecho <br />
          con la sintaxis de "sequelize", donde se ejecuta una migración <br />
          y se crea una tabla con el nombre del modelo en automático en la base
          de datos. <br />
          <br />En mi experiencia con el desarrollo de API´S y a medida que iba
          aprendiendo <br />
          y comprendiendo su funcionamiento, me encontraba con problemas <br />
          que para mi experiencia se tornaban difíciles de solucionar, <br />
          pero durante el desarrollo iba comprendiendo el ¿por qué? del problema
          <br />
          y a su vez iba dando solución con documentación asociada a las
          herramientas <br />
          que utilicé para el desarrollo.<br />
          <br />
          He realizado proyectos propios, para así tener experiencia en el
          desarrollo<br />
          en los cuales me han ayudado mucho para poder despegar y poder
          estar<br />
          en un buen nivel de código. <br />
          <br />
          Mi pasión por el desarrollo de software va más allá de escribir
          código;
          <br />
          me apasiona crear soluciones innovadoras que resuelvan problemas
          reales
          <br />
          y mejoren la vida de las personas. Estoy constantemente buscando
          oportunidades <br />
          para aprender y crecer profesionalmente, ya sea explorando nuevas
          tecnologías o participando en proyectos desafiantes.
        </p>
      </div>
      <div class="right">
        <img
          src="/util/desarrollo-aplicaciones-web.png"
          alt="Imagen descriptiva"
          style="width: 400px; height: 400px"
        />
        <img
          src="/util/apiss.png"
          alt="Imagen descriptiva"
          style="width: 400px; height: 400px; margin-top: 30%"
        />
        <img
          src="/util/apps.png"
          alt="Imagen descriptiva"
          style="width: 400px; height: 400px; margin-top: 50%"
        />
        <img
          src="/util/javascript.png"
          alt="Imagen descriptiva"
          style="width: 400px; height: 400px; margin-top: 50%"
        />
        <img
          src="/util/vuess.jpeg"
          alt="Imagen descriptiva"
          style="width: 400px; height: 400px; margin-top: 80%"
        />
      </div>
    </section>
    <hr class="separator" />
    <section class="proyectos">
      <h1 style="color: aqua">Mis Proyectos</h1>
      <hr class="separator" />
      <div>
        <h2 style="display: flex; justify-content: center">Massalud</h2>
        <p style="margin-left: 12%; margin-top: 4%">
          El proyecto massalud, consta de una plataforma, la cual sirva para
          agendar <br />
          citas médicas e incluso solicitar medicamentos. <br />
          <br />
          La idea surge a partir de la problemática que se tiene en los centros
          de salud <br />
          como lo son las farmacéuticas, donde hay gran aglomeración de personas
          <br />
          haciendo grandes filas para realizar sus trámites. <br />
          <br />
          Esta plataforma es un proyecto propio que se encuentra en desarrollo,
          <br />
          es un proyecto a largo plazo donde la idea es que sea una app robusta
          <br />
          y que funcione perfectamente para sus trámites. <br />
          <br />
          Tiene su primera versión donde se permite el registro de usuarios
          <br />
          y el inicio de sesión, incluyendo también su primera versión para
          agendar <br />
          una cita médica con el especialista determinado. <br />
          <br />
          La aplicación está funcional hasta el punto en que también permite,
          <br />
          notificaciones por correo, como lo es el registro exitoso <br />
          y notificación de que se ha agendado una cita. <br />
          <br />
          Faltan más procesos para complementarla pero ya va por un buen camino.
        </p>
        <img
          style="
            width: 80%;
            margin-left: 10%;
            justify-content: center;
            margin-top: 2%;
          "
          src="/util/Inicio massalud.png"
          alt="Inicio Massalud"
        />
        <img
          style="
            width: 80%;
            margin-top: 2%;
            justify-content: center;
            margin-left: 10%;
          "
          src="/util/registro.png"
          alt="Registro"
        />
        <img
          style="
            width: 80%;
            margin-top: 2%;
            margin-left: 10%;
            justify-content: center;
          "
          src="/util/perfil paciente.png"
          alt="Perfil Paciente"
        />
        <img
          style="
            width: 80%;
            margin-top: 2%;
            margin-left: 10%;
            justify-content: center;
          "
          src="/util/citas.png"
          alt="Citas"
        />
      </div>
      <h3
        style="
          color: aliceblue;
          font-size: 300%;
          display: flex;
          justify-content: center;
          margin-top: 2%;
        "
      >
        Enlaces de interés
      </h3>
      <div class="enlaces">
        <a href="https://github.com/AndresRojo12/MaSSalud" target="_blank">
          <v-btn class="git">Código fuente en github</v-btn>
        </a>
        <a href="https://massalud.onrender.com/" target="_blank">
          <v-btn class="app">Dirección de app desplegada</v-btn>
        </a>
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
import { useRouter } from "vue-router";

const icons = ref([
  { name: "mdi-github", url: CONFIG.GIT_HUB },
  { name: "mdi-gmail", url: `mailto:${CONFIG.CORREO}` },
  { name: "mdi-linkedin", url: CONFIG.LINKEDIN },
]);

const activeSection = ref("proyect");

const setActiveSection = (section) => {
  activeSection.value = section;
};

const router = useRouter();

const home = () => {
  router.push("/");
};

const servi = () => {
  router.push("/servicio/servicio");
};
</script>

<style>
.container {
  background-color: black;
}
.container p {
  color: aliceblue;
}
.proyectos h1 {
  font-size: 300%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  color: azure;
}

.proyectos h2 {
  font-size: 300%;
  margin-top: 8%;
  color: aliceblue;
  background-color: aqua;
}
.enlaces {
  display: flex;
  justify-content: center;
  margin-top: 2%;
}
.enlaces a {
  padding: 2%;
  margin: 2%;
}
.enlaces .git,
.app {
  background-color: aqua;
}

.presentacion {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4%;
}
.presentacion p {
  font-size: 200%;
}
.presentacion .left {
  background-color: #000;
  width: 50%;
  padding: 20px;
}
.presentacion .right {
  background-color: white;
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.presentacion .right img {
  width: 100%;
  height: auto;
  margin-top: 20px;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
}
.proyectos p {
  font-size: 200%;
}
</style>
