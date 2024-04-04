import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'primevue/card';

import 'filepond/dist/filepond.min.css';

//import { FilePond } from 'filepond';
//import 'filepond-plugin-image-preview/dist/filepond-plugin-imagepreview.min.css'; // Importation du fichier CSS ici
import App from './App.vue';
import "@fortawesome/fontawesome-free/css/all.css";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
import store from "./store"
const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
//app.use(router).use(FilePond);
app.use(router).use(Card);
app.use(router).use(PrimeVue);
app.use(store);
app.mount("#app");

/*Importation des composants Vue.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import "@fortawesome/fontawesome-free/css/all.css";

import 'primevue/resources/themes/lara-light-green/theme.css';
import store from "./store"
import App from './App.vue';

// Création de l'application Vue
const app = createApp(App);

// Création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// Enregistrement des composants globalement
app.component('Card', Card); // Enregistrez le composant Card globalement
app.use(PrimeVue); // Utilisation de PrimeVue comme plugin

// Utilisation du routeur et du store
app.use(router);
app.use(store);

// Montage de l'application Vue
app.mount("#app");*/