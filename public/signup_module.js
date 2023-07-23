import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase , set , ref} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"
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
        document.getElementById('alertbox').style.cssText = "display:block; "
        document.getElementById('para').innerText = text
    }
    setTimeout(()=>{document.getElementById('alertbox').style.cssText = "display:none;"},5000)
}

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const SignUp = document.getElementById("SignUp")
SignUp.addEventListener('click',(e)=>{
    var email = document.getElementById('mail').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var phone_num = document.getElementById('phone').value
    var confirm_password = document.getElementById('confirm_password').value
    if(email == ""){
        rayen_alert("email field is required !!!",0);
    }
    else if(password  == ""){
        rayen_alert("password field is required !!!",0);
    }
    else if(username == ""){
        rayen_alert("username field is required !!!",0);
    }
    else if(phone_num == ""){
        rayen_alert("phone_num field is required !!!",0);
    }
    else if(confirm_password == ""){
        rayen_alert("confirm_password field is required !!!",0);
    }
    else if(confirm_password != password){
        rayen_alert("password confirmation is not much !!!",0);
    }
    else{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.userID = user.uid
    console.log(window.userID);
    const db = getDatabase(app);
    set(ref(db , 'users/' + window.userID), {
      mail : email,
      username : username,
      tel : phone_num,
      pass : password
    }).then(()=>{
        set(ref(db , 'search/'+ phone_num), {
            id : window.userID
        })
    })
    .then(()=>{
     rayen_alert("signUP passed succesfully",1)
     setTimeout(()=>{
        window.location = "intent-page-log.html";
        }
        ,2000
     )
    })
     .catch((error) => {
      alert(error)
    });
    // les referance pour le  database 
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    rayen_alert(errorMessage + "!!!",0);
  });

};
});