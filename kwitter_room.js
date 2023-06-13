var firebaseConfig = {
      apiKey: "AIzaSyAsgec0_u_03S1-qnT7LIwxvrYuXu_XGk8",
      authDomain: "bhopal-ogbb.firebaseapp.com",
      databaseURL: "https://bhopal-ogbb-default-rtdb.firebaseio.com",
      projectId: "bhopal-ogbb",
      storageBucket: "bhopal-ogbb.appspot.com",
      messagingSenderId: "133485379574",
      appId: "1:133485379574:web:1fe74ce1684ef2282e91d7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  
//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("kwitter_login_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;

function addRoom(){
      room_name=document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("kwitter_room_name",room_name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("kwitter_login_name");
      localStorage.removeItem("kwitter_room_name");
      window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_names"+Room_names);
var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>$"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("kwitter_room_name",name);
window.location="kwitter_page.html";
}