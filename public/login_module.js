import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

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
function rayen_alert(text,sens){
    if(sens==1){ 
        document.getElementById('alertbox').style.cssText = "display:block;background-color: rgb(13, 156, 0);"
        document.getElementById('para').innerText = text
    }
    else{
        document.getElementById('alertbox').style.cssText = "display:block;"
        document.getElementById('para').innerText = text
    }
    console.log(text)
    setTimeout(()=>{document.getElementById('alertbox').style.cssText = "display:none;"},5000)
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const logg = document.getElementById("login")
const auth = getAuth(app);
logg.addEventListener('click',(e)=>{
    var email = document.getElementById('mail').value
    var password = document.getElementById('password').value
    if(email == ""){
        rayen_alert("email field is required !!!",0);
    }
    else if(password  == ""){
        rayen_alert("password field is required !!!",0);
    }
    else{
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => { 
const user = userCredential.user;
document.cookie = "userID =  " + user.uid  ; 
rayen_alert("login atended succsesfully",1);
setTimeout(
        ()=>{window.location = "intent-page-chat.html"},1700
    )
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
if(errorMessage == "Firebase: Error (auth/wrong-password)."){
        rayen_alert(" Wrong email or password try again !!!",0);
    }
    else{
        rayen_alert(errorCode);
    }
});
};
});

