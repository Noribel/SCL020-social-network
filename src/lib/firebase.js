import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
import { configInitial } from './index.js';
import { router } from "./router.js";


const config = configInitial();
const auth = getAuth();
const provider = new GoogleAuthProvider();


/*export const googleAuth = () => {
    getRedirectResult(auth)
    //signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)

        const credential = provider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
    })
    .cath((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;

        const credential = provider.credentialFromResult(error);
    });

};*/

export const Iniciargoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      router("#/wall")
      // ...
    }).catch((error) => {
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
/*onAuthStateChanged(auth, (user) => {
    googleAuth(auth);
});*/




import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"
/*import { async } from "regenerator-runtime";

// base de datos usuarios Google
const googleUsers = async () => {
    const user = auth.currentUser;
    if (user !== null) {
      const docRef = await addDoc(collection(db, 'googleUsers'), {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
        photo: user.photoURL,
      });
    }

    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  };*/


//const auth = getAuth();
//const provider = GoogleAuthProvider();

/*const ingresoConGoogle = async () => {
    try {
      const usuarioGoogle = await signInWithPopup ( auth, provider);
      return usuarioGoogle.user
    } catch (error) {
    alert("error");
     return null;
        
    }
};

export { ingresoConGoogle }*/
