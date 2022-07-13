import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { configInitial } from './index.js';
import { router } from "./router.js";


const config = configInitial();
const auth = getAuth();
const provider = new GoogleAuthProvider();


export const Iniciargoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.href = '#/wall'
      // ...
    }).catch((error) => {
      console.log(error.message)
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
    
};

const logOut = async () => {
  try {
    await signOut(auth);
    window.location.href = '#/login'
      } catch (error) {
  }
};

export {logOut}

