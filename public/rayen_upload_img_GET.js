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


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
   }
  let id = getCookie("userID")


getDownloadURL(ref(storage, 'users_imgs/'+ id))
  .then((url) => {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    const img = document.getElementById('im');
    img.setAttribute('src', url);
  })
  .catch((error) => {
      console.log(error);
  });


document.getElementById('imgupload').addEventListener('change',(e)=>{
  if (e.target.files[0]) {
    let fileitem = e.target.files[0];
    document.getElementById('bot-up').style.cssText = "display : block ;"
    window.fileitem = fileitem ;
  }
 })
 document.getElementById('bot-up').addEventListener('click',()=>{
  document.getElementById('bot-up').style.cssText = "display : none ;"
  const storeRef = ref(storage, "users_imgs/"+ id);
  uploadBytes(storeRef, window.fileitem).then((snapshot) => {
    console.log('Uploaded file!');
  });
 })





