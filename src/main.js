// Este es el punto de entrada de tu aplicacion

//import {login} from './componentes/login.js';
import { router } from './lib/router.js';

//console.log(login)

//document.getElementById("root").innerHTML=login;



window.addEventListener('load', () => {
    router(window.location.hash);
  
  window.addEventListener('hashchange', () => {
    router(window.location.hash);
  });
});
  //console.log("ruta");

