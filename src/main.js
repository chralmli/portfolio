import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/styles/tailwind.css';

const app = createApp(App);

app.AOS = new AOS.init({ 
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: true,
});

app.mount('#app');

