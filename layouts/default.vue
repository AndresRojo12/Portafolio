<template>
  <AppHeader/>
    <div class="Container">
      <nav class="navegation">
        <div class="nav-content">
          <img src="../util/logo.png" alt="Logo" class="logo" />
          <div class="nav-buttons">
            <v-btn
              variant="text"
              :class="{ active: activeSection === 'presentation' }"
              @click="setActiveSection('presentation')"
              :onClick="home"
              >Presentación</v-btn
            >
            <v-btn
              variant="text"
              :class="{ active: activeSection === 'service' }"
              @click="setActiveSection('service')"
              :onClick="servi"
              >Formación</v-btn
            >

            <v-btn
              variant="text"
              :class="{ active: activeSection === 'proyect' }"
              @click="setActiveSection('proyect')"
              :onClick="proyect"
              >Proyectos</v-btn
            >
            <v-btn
              variant="text"
              :class="{ active: activeSection === 'contacto' }"
              @click="setActiveSection('contacto')"
              :onClick="contacto"
              >Contacto</v-btn
            >
          </div>
        </div>
      </nav>
    <slot />
    <hr class="separator" />

    <AppFooter />
    <div class="footer">
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
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
const activeSectionS = ref("service");
const activeSectionP = ref("proyect");
const activeSectionC = ref("contacto");

const setActiveSection = (section) => {
  activeSection.value = section;
};

const setActiveSectionC = (section) => {
  activeSectionC.value = section;
};

const proyect = () => {
  router.push("/proyectos/proyecto");
};

const contacto = () => {
  router.push("/contact/contact");
};
const servi = () => {
  router.push("/servicio/formacion");
};

const home = () => {
  router.push("/");
};
</script>

<style>

.v-btn.active {
  border-bottom: 2px solid aqua;
}
.nav-content {
  color: rgb(35, 197, 197);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
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
  margin-top: 25px;
  font-size: 14px;
}

.logo {
  border-radius: 50%;
  width: 40vw;
  max-width: 30px;
  min-width: 300px;
  margin: 6px;
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .nav-buttons {
    display: flex;
    flex-direction: column;
  }
}
</style>
