export const register = () => {

    const pageRegister =
   
    `
   <div class="register">
      <header></header>
       <div class="logo">
    <h1>MUJERES CONTRA VIENTO Y MAREA</h1>
        <img class="imgLogo" src="imagenes/logo.png">
    </div>
       <form name="registerForm" type="submit" class="formRegister">
       <input class="name" type="name" placeholder="Nombre y Apellido">
       <input class="email" type="name" placeholder="Correo electrónico válido">
       <input class="contraseña" type="name" placeholder="Contraseña">
       <input class="contraseña" type="name" placeholder="Repetir contraseña">
       <p class="condiciones">Al registrarte, aceptas términos y condiciones de uso </p>
       <button class="iniciarSesion">Registrar</button>
       </form>
       <div class="back">
       <p href="#/login">¿Tienes cuenta? Inicia Sesión</p>
       <button class="iniciarSesion">Iniciar Sesión</button> 
       </div>
  
   <footer>Realizado por Noribel Rivero. Derechos Reservados</footer>
   
   
   </div>
       `
       ;
   
       const containerRegister = document.createElement('div');
       containerRegister.classList.add('containerRegister');
       containerRegister.innerHTML = pageRegister;
       
       return containerRegister;
   
   };