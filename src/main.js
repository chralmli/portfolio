import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/styles/tailwind.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-solid-svg-icons'; // Importing solid icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Importing brand icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEye, faGithub);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.AOS = new AOS.init({ 
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: true,
});

app.mount('#app');

