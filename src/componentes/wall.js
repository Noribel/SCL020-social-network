export const wall = () => {

    const pageWall =
   
    `
   <div class="wall">
      <header>Bienvenida a Sailor Girl 
      <img class="logoWall" src="imagenes/logo.webp">
      <div class="salir">
      <button class="logout" id="logout"><img src="./imagenes/salir...png"></button>
      </div>
      <div class="home">
      <buttom class="home" id="home"><img src="./imagenes/home-.png"></buttom>
      </header>
      <div class="post">
      
      <form class="formPost">
       <textarea class="home__description" id="descripcion" name="text-area" rows="1" cols="50" placeholder="Postea aquí"></textarea>
       <button class="buttonPublicar" id="publicar">Publicar</button> 
      </form>
     
    </div>
   
   </div>
       `
       ;
   
       const containerWall = document.createElement('div');
       containerWall.classList.add('containerWall');
       containerWall.innerHTML = pageWall;
       return containerWall;
   
   };