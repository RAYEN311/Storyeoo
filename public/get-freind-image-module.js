import { getStorage , ref , uploadBytes , getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";

  const firebaseConfig = {
  apiKey: "AIzaSyCXoWCfuOsxnATfvfg1kaayxku34mN1EPE",
  authDomain: "storyeoo.firebaseapp.com",
  databaseURL: "https://storyeoo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "storyeoo",
  storageBucket: "storyeoo.appspot.com",
  messagingSenderId: "658184151040",
  appId: "1:658184151040:web:47a84c6857c219d87db8e5",
  measurementId: "G-MHHQBF037L"
  };
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app);

//  img  src="./Rayen_assets/imgs/149071.png" alt="user_img" class="my"
let friends = document.getElementById('friend_container')
     
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  let friend1_id = getCookie("friend_id")

getDownloadURL(ref(storage, 'users_imgs/'+ friend1_id))
.then((url) => {
        const img = document.getElementById('im1');
        img.setAttribute('src', url);
        document.cookie = "friend1_img = " + url  ; 
      })
      .catch((error) => {
          console.log(error);
      });


// function creat_element(){
//     let div = document.createElement('div');
//     div.innerHTML = '<img  src="'+  +'" alt="user_img" class="my">'
//     return div
//     }
// friends.appendChild(creat_element());