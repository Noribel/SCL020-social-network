import {
    creandoPosts,
    updatingPosts,
    editingPosts,
    eliminarPosts,
    getPosts,
    editandoPosts,
    likingPub,
  } from "../lib/firestore.js";
  import { logOut } from "../lib/firebase.js";
  import {
    auth,
    getDocs,
    collection,
    db,
    updateDoc,
  } from "../lib/config-firebase.js";
  import { router } from "../lib/router.js";
  
  export const wall = () => {
    window.location.hash = '/wall';
    const wallPage = `
  <div class="wallView">
        <header>
            <img src = "imagenes/logo.png" class="logoWall">
            <img src = "../imagenes/logOut.png" class= "logOutWall" id="logOut">
        
        </header>
       <div class="posts-area">
       <textarea placeholder="Ingrese su publicación" cols="40" rows="5" id="posts"></textarea>
       <button class="publish" id="publish" type="submit"><strong>Publicar</strong></button>
       </div>
       <div class= "wall" id="wall">
        </div>
        `;
    const container = document.createElement("div");
    container.innerHTML = wallPage;
    container.className = "wallViewContainer";
  
    const publishButton = container.querySelector("#publish");
  
    publishButton.addEventListener("click", async () => {
      const commentContainer = container.querySelector("#posts");
      let comment = commentContainer.value;
      if (comment) {
        try {
          await creandoPosts(comment);
          commentContainer.value = "";
          return creandoPost;
        } catch (error) {
          return console.log("error");
        }
      } else {
        alert("Ingrese su comentario");
      }
    });
  
    const allPosts = async () => {
      let postsContainer = container.querySelector("#wall");
      postsContainer.innerHTML = "";
      let postsFrame = "";
      updatingPosts((posts) => {
        postsFrame = "";
        posts.forEach((doc) => {
          const pub = doc.data();
          console.log(pub)
          postsFrame += `
        <div class="post">
          <div class='publicacion'>
            <p class='user-info'><img class="user-photo" src="${pub.Photo}">
            <span class="user-name">${pub.Name} </span> </p>
            <p class="date">${pub.Time.toDate().toLocaleString()}</p>
            <button class="edit" id = "editButton" data-id="${doc.id}">
            <img src = "imagenes/editar.png" class="editar">
            <div class = "mitadP">
            <p class="comment">${pub.Comment}</p>
            </div>
            </button>
          </div>
          <div class="finalP">
          <button class="delete" data-id="${doc.id}">
            <img src = "imagenes/delete.png" class="deletes" data-id="${doc.id}">
            </button>
          <span id= "count" class = "count" data-id="${doc.id}">${
            pub.LikesSum}</span>
          <button class="like" data-id="${doc.id}">
          <img src = "imagenes/like.png" class="likes">
          </button>
          </div>
        </div>
        `;
        });
        postsContainer.innerHTML = postsFrame;
        const btnDelete = container.querySelectorAll(".delete");
        btnDelete.forEach((btn) => {
          btn.addEventListener("click", ({ target: { dataset } }) => {
              console.log(dataset.id)
            eliminarPosts(dataset.id);
    
          });
        });
  
        const btnLikes = container.querySelectorAll(".like");
        let count = container.querySelectorAll(".count");
        btnLikes.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
            const postsId = e.target.parentNode.dataset.id;
            await likingPub(postsId, auth.currentUser.uid);
          });
        });
  
        const btnEdit = container.querySelectorAll(".edit");
        btnEdit.forEach((btn) => {
          btn.addEventListener("click", async (e) => {
              try {
                  const i=e.target.parentNode.dataset.id
                console.log(e.target.parentNode.dataset.id)
                const publi = await getPosts(e.target.parentNode.dataset.id);
                const publiInfo = publi.data();
      
                const editingAreaEl = document.createElement("textarea");
                editingAreaEl.classList.add("editing-area");
                editingAreaEl.value = publiInfo.Comment;
                const postEl = btn.closest(".post");
                const paragraphEl = postEl.querySelector(".comment");
                const mitadP = postEl.querySelector(".mitadP");
                paragraphEl.classList.add("hide");
                mitadP.appendChild(editingAreaEl);
                const saveChanges = document.createElement("button");
                saveChanges.classList.add("save-changes-btn");
                saveChanges.textContent = "Guardar";
                mitadP.appendChild(saveChanges);
                saveChanges.addEventListener("click", async () => {
                  const newComment = editingAreaEl.value;
                  await editingPosts(e.target.parentNode.dataset.id, newComment);
                });
              } catch (error) {
                  console.log(error)
              }
 
          });
        });
      });
      return allPosts;
    };
    allPosts();
  
    const buttonLogOut = container.querySelector("#logOut");
    buttonLogOut.addEventListener("click", async () => {
      try {
        await logOut(auth);
        router("#/login");
        return logOut;
      } catch (error) {
        return console.log("error");
      }
    });
  
    return container;
  };