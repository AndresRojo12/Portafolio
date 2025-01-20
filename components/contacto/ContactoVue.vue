<template>
  <v-app style="background-color:black ;">
    <nav class="navegation">
      <div class="nav-content">
        <img src="../../util/logo.png" alt="Logo" class="logo" />
        <div class="nav-buttons">
          <v-btn @click="home" variant="text">Presentación</v-btn>
          <v-btn variant="text" @click="service">Servicios</v-btn>
          <v-btn variant="text" @click="proyect">Proyectos</v-btn>
          <v-btn
            variant="text"
            :class="{ active: activeSection === 'contacto' }"
            @click="setActiveSection('contacto')"
            >Contacto</v-btn
          >
        </div>
      </div>
    </nav>
    <v-container class="form">
      <h1 style="color:white;
      align-items: center;">Contacto</h1>
      <v-form class="form1" v-model="valid" @submit.prevent="sendMessage">
        <v-text-field
          v-model="name"
          label="Nombre"
          :rules="[rules.required]"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          label="Correo electrónico"
          :rules="[rules.required, rules.email]"
          required
        ></v-text-field>
  
        <v-textarea
          v-model="message"
          label="Mensaje"
          :rules="[rules.required]"
          required
        ></v-textarea>
  
        <v-btn
          style="color: aqua;"
          :disabled="!valid"
          type="submit"
        >
          Enviar mensaje
        </v-btn>
  
        <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" top>
          {{ snackbar.message }}
          <v-btn color="pink" text @click="snackbar.visible = false">Cerrar</v-btn>
        </v-snackbar>
      </v-form>
    </v-container>
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
import { useRouter } from "vue-router";
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
const router = useRouter();

const icons = ref([
  { name: "mdi-github", url: CONFIG.GIT_HUB },
  { name: "mdi-gmail", url: `mailto:${CONFIG.CORREO}` },
  { name: "mdi-linkedin", url: CONFIG.LINKEDIN },
]);

const activeSection = ref("contacto");

const setActiveSection = (section) => {
  activeSection.value = section;
};

const home = () => {
  router.push("/");
};

const service = () => {
  router.push("/servicio/servicio");
};

const proyect = () => {
  router.push("/proyectos/proyecto");
};
// Estado para el formulario
const valid = ref(false);
const name = ref('');
const email = ref('');
const message = ref('');

// Reglas de validación
const rules = {
  required: value => !!value || 'Este campo es obligatorio',
  email: value => /.+@.+\..+/.test(value) || 'El correo no es válido',
};

// Snackbar para mostrar mensajes de éxito o error
const snackbar = ref({
  visible: false,
  message: '',
  timeout: 3000,
});

// Función para enviar el mensaje con useFetch
const sendMessage = async () => {
  try {
    const { data, error } = await useFetch(`${CONFIG.public.API_BASE_URL}`, {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    });

    if (error.value) {
      snackbar.value.message = error.value.message || 'Hubo un error al enviar el mensaje';
      snackbar.value.visible = true;
    } else {
      snackbar.value.message = data.value?.success || 'Mensaje enviado con éxito';
      snackbar.value.visible = true;
      clearForm();
    }
  } catch (error) {
    snackbar.value.message = 'Hubo un error inesperado';
    snackbar.value.visible = true;
  }
};

// Método para limpiar el formulario
const clearForm = () => {
  name.value = '';
  email.value = '';
  message.value = '';
  valid.value = false;
};
</script>

<style scoped>

  .form{
    width: 600px;
    margin-top: 2%;
  }

  .form1 {
    color: aqua;
    margin-top: 2%;
  }

  .nav-content {
  color: azure;
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
  
}

.logo {
  border-radius: 50%;
  width: 40vw;
  max-width: 300px;
  min-width: 300px;
  margin: 6px;
}

.v-btn.active {
  border-bottom: 2px solid aqua;
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
/* Puedes añadir estilos personalizados aquí si los necesitas */
</style>
