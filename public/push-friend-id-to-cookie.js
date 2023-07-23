import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase , set , ref , update , child , remove , get , onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"

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
   const db = getDatabase(app);


   function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  let id = getCookie("userID")

  onValue(ref(db, 'friends/' + id), (snapshot) => {
    const friend_id = ( snapshot.val().id) || 'Anonymous';
    console.log(friend_id);
    document.cookie = "friend_id = " + friend_id  ; 
  }, {
    onlyOnce: true
  });
