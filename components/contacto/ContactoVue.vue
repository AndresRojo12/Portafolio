<template>
  <v-app style="background-color:black ;">
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
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from "#app";
const CONFIG = useRuntimeConfig().public;
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
    const { data, error } = await useFetch(`${CONFIG.API_BASE_URL}contact`, {
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
    margin-top: 4%;
  }

  .form1 {
    color: aqua;
    margin-top: 2%;
  }

/* @media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    text-align: center;
  }
} */

@media (max-width: 480px) {

.form{
    width: 300px;
    margin-top: 10%;
  }
}
</style>
