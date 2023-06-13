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

  function AddUser(){
    abc=document.getElementById("input1").value;
//code to save names in firebase//
firebase.database().ref("/").child(abc).update({
    purpose:"Hey! User how are you??"
});
  }