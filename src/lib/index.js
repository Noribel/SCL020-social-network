  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
  //import { getFirestore } from "firebase/firestore";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCDpuP5qukXQmDeBaajneDqsNKeExXm4kw",
    authDomain: "social-network-66b05.firebaseapp.com",
    projectId: "social-network-66b05",
    storageBucket: "social-network-66b05.appspot.com",
    messagingSenderId: "789128338041",
    appId: "1:789128338041:web:13997401099ed6de6d52a8",
    measurementId: "G-PWCQHWPKNT"
  };

  // Initialize Firebase
  export function configInitial() { 
  const app = initializeApp(firebaseConfig);
  return { app };

  // Initialize Cloud Firestore and get a reference to the service
//const db = getFirestore(app);


}


  //const auth = getAuth(app);
  //const provider = GoogleAuthProvider(app);

  
  //export default app