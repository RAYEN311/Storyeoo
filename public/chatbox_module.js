import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth , signInWithEmailAndPassword , signOut} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase , set , ref , update , child , remove , get , onValue } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"
// import { getStorage , uploadBytes , getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
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
// init 
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

// j ai utuliser un cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
let id = getCookie("userID")
console.log(id)


onValue(ref(db, 'users/' + id), (snapshot) => {
  const username = ( snapshot.val().username) || 'Anonymous';
  const  mail = ( snapshot.val().mail) || 'Anonymous';
  const tel = ( snapshot.val().tel) || 'Anonymous';
  console.log(username);
  console.log(mail);
  console.log(tel);
  document.getElementById('myn').innerText = username ;
  document.getElementById('tel').innerText = tel ;

}, {
  onlyOnce: true
});

// show data on the page

// evenement logout

const lout = document.getElementById('sv')

lout.addEventListener('click',(e)=>{
signOut(auth).then(()=>{
    alert("you are logged out")
    setTimeout(
      ()=>{window.location = "intent-page-log.html"},1700
    )
  }
).catch((error)=>{
   alert(error)
})
})

let search = document.getElementById('search')

search.addEventListener('click',()=>{
  search.className = "search";
  setTimeout(()=>{
    search.className = "search1";
  },30000)
})



let chatput = document.getElementById('chatput')
let send = document.getElementById('send')
let chat = document.getElementById('chat')

send.addEventListener('click',()=>{
  console.log("send")
  function creat_element(){
    let div = document.createElement('div');
    div.innerHTML = '<div class="message me">'+ chatput.value +'</div>'
    return div
    }
  chat.appendChild(creat_element());
  chatput.value = "";
  chat.scrollTop = chat.scrollHeight;
})



let search_num = document.getElementById('search_num')
document.getElementById('add').addEventListener('click',()=>{
console.log(search_num.value);
onValue(ref(db, 'search/' + search_num.value ), (snapshot) => {
  let phone = document.getElementById('tel')
  var add_friend_id = ( snapshot.val().id) || 'Anonymous';
  set(ref(db , 'friends/' + id ), {
    id : add_friend_id
  }).then(()=>{
   alert("friend added in database ")
  console.log(add_friend_id);
})
})

})

let friend1_id = getCookie("friend_id")
let friend1_url = getCookie("friend_url")



let imgtosession = document.getElementById('im1')
let sessioname = document.getElementById('#name_friend')

imgtosession.addEventListener('click',()=>{

  onValue(ref(db, 'users/' + friend1_id), (snapshot) => {
    const friendname = ( snapshot.val().username) || 'Anonymous';
    sessioname.value = friendname;
    }).then(()=>{
      const img = document.getElementById('rayen');
      img.setAttribute('src', friend1_url);
  })
  })


