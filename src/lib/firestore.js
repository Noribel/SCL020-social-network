import {
    db,
    collection,
    addDoc,
    doc,
    updateDoc,
    auth,
    Timestamp,
    getDocs,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    getDoc,
    arrayRemove,
    arrayUnion,
  } from "../lib/config-firebase.js";
  
  const creandoPosts = async (comment) => {
    try {
      const docRef = await addDoc(collection(db, "Posts"), {
        Photo: auth.currentUser.photoURL,
        Name: auth.currentUser.displayName,
        UserId: auth.currentUser.uid,
        Time: Timestamp.fromDate(new Date()),
        Comment: comment,
        PostsLikes: [],
        LikesSum: 0,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  
  const updatingPosts = (callback) => {
    const q = query(collection(db, "Posts"), orderBy("Time", "desc"));
    onSnapshot(q, callback);
  };
  
  const getPosts = (id) => getDoc(doc(db, "Posts", id));
  
  //Editing posts
  
  const editandoPosts = async (id, Comment) => {
    const postRef = doc(db, "Posts", id);
    await updateDoc(postRef, {
      Comment,
    });
  };
  
  //likingPub

  const likingPub = async (id, UserId) => {
    try {
      const docRef = await doc(db, "Posts", id);
      const hold = await getDoc(docRef);
      if (hold.exists()) {
        let PostsLikes = hold.data().PostsLikes;
        let pubCount = hold.data().LikesSum;
        if (!PostsLikes.includes(UserId)) {
          await updateDoc(docRef, {
            PostsLikes: arrayUnion(UserId),
            LikesSum: pubCount + 1,
          });
        } else {
          await updateDoc(docRef, {
            PostsLikes: arrayRemove(UserId),
            LikesSum: pubCount - 1,
          });
        }
      }
    } catch (error) {
      console.error("Error adding likes :(");
      throw error.message;
    }
  };
  
  // Eliminar posts

  const eliminarPosts = (id) => deleteDoc(doc(db, "Posts", id));
  
  const editingPosts = async (id, Comment) => {
    const postRef = doc(db, "Posts", id);
    await updateDoc(postRef, {
      Comment,
    });
  };
  
  export {
    creandoPosts,
    updatingPosts,
    editingPosts,
    eliminarPosts,
    getPosts,
    editandoPosts,
    likingPub,
  };