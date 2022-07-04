//import { async } from 'regenerator-runtime';
import { Iniciargoogle } from '../lib/firebase.js';
//import { router } from '../lib/router.js';
//import { signInWithRedirect, getRedirectResult} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

export const login = () => {
    window.location.hash = '/login';
    const pageLogin = document.createElement('div');
    pageLogin.className = 'div';
    
    pageLogin.innerHTML =  `


<div class="login">
   <header></header>
    <div class="logo">
    <h1>MUJERES CONTRA VIENTO Y MAREA</h1>
        <img class="imgLogo" src="imagenes/logo.webp">
    </div>
    <form name="inputsForm" type="submit" class="login"> 
    <form name="login" type="submit" class="loginForm">
    <input class="email" type="name" placeholder="Correo Electrónico">
    <input class="password" type="name" placeholder="Contraseña">
    <button class="iniciarSesion">Iniciar Sesión</button>
    <button class="google" type="button" id="google">Continuar con Google</button>
    </form>
    <p href="#/register">¿No tienes cuenta? Crea una.</p>
    <a href="#/register" class="signUp"><strong>REGISTRAR</strong></a>
</form>
<footer>Realizado por Noribel Rivero. Derechos Reservados</footer>


</div>
    `;

    //Botón google
  //  containerLogin
  //.querySelector('#google')
 // .addEventListener('click', () => {
   // loginGoogle();
  //});

/*const botonGoogle = document.querySelector('#google');
 botonGoogle.addEventListener ('click', async () => {
    const usuario = await ingresoConGoogle();
    if (usuario) {
      router('#/wall')  
    } else (console.log('error'));
});*/


   

    pageLogin.querySelector('.google').addEventListener('click', () => {
        console.log("hi");
        //googleAuth();
        Iniciargoogle();
    });
 
/*const inWithGoogle = async () => {
    const redirected = await getRedirectResult(auth);
    if (redirected) { changeRoute('#/wall'); }
  };
  inWithGoogle();

    return containerLogin;*/

    return pageLogin;

};