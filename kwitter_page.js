//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("kwitter_login_name");
    room_name=localStorage.getItem("kwitter_room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_img="<h4><b>"+name+"</b> <img src='tick.png'class='user_tick'></h4>";
message_user="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
like_img="<span class='glyphicon glyphicon-thumbs-up'>LIKE:"+like+"</span> </button> <hr>";
row=name_with_img+message_user+like_button+like_img;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function update_like(message_id){
console.log(message_id);
button_id=message_id;
like=document.getElementById(button_id).value;
updated_like=Number(like)+1;
console.log(updated_like);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_like
});
}

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
}