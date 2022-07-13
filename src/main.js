//import {login} from './componentes/login.js';
import { router } from './lib/router.js';

window.addEventListener('load', () => {
    router(window.location.hash);
  
  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });
});


