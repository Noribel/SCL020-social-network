import { login } from '../componentes/login.js';
import { register } from '../componentes/register.js';
import { wall } from '../componentes/wall.js';


export const router = (hash) => {
    
    const rootBox = document.getElementById('root');
    rootBox.innerHTML = ''; 


    if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
      rootBox.appendChild(login());
      
    } else if (hash === '#/login') {
      rootBox.appendChild(login());
      
    } else if (hash === '#/register') {
      rootBox.appendChild(register());
      
    } else if (hash === '#/wall') {
      rootBox.appendChild(wall());

    } 
  
  };