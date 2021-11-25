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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name",room_name);

      window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}