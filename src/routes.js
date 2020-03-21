import Aktuelles from './components/Aktuelles.vue';
import Berater from './components/Berater.vue';
import BeraterListe from './components/BeraterListe.vue';
import Chat from './components/Chat.vue';
import Karte from './components/Karte.vue';

const routes = [
    { path: '/', component: Aktuelles },
    { path: '/berater', component: BeraterListe },
    { path: '/berater/:bid', component: Berater },
    { path: '/chat', component: Chat },
    { path: '/karte', component: Karte },
];

export default routes;

//https://appdividend.com/2018/12/28/vue-router-tutorial-with-example-how-to-use-routing-in-vuejs/