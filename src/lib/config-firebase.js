
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

  import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    doc,
    Timestamp,
    getDocs,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    getDoc,
    arrayRemove,
    arrayUnion,
  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
  import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    onAuthStateChanged,
    GoogleAuthProvider,
    getRedirectResult,
    signInWithPopup,
  } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
  
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
  initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const auth = getAuth();
  console.log("prueba");
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  export {
    auth,
    app,
    db,
    provider,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
    onAuthStateChanged,
    getRedirectResult,
    signInWithPopup,
    addDoc,
    collection,
    Timestamp,
    getDocs,
    updateDoc,
    doc,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    getDoc,
    arrayRemove,
    arrayUnion,
  };

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  

  //const auth = getAuth(app);
  //const provider = GoogleAuthProvider(app);

  
  //export default app