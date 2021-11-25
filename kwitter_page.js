//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBDDOTtC-XLGu1QVcTbeyQ9CG_rCoxl_XU",
      authDomain: "kwitter-app-f9a95.firebaseapp.com",
      databaseURL: "https://kwitter-app-f9a95-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-f9a95",
      storageBucket: "kwitter-app-f9a95.appspot.com",
      messagingSenderId: "511385193420",
      appId: "1:511385193420:web:22b54171d232aa8894eb69"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value = "";
}



      function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }