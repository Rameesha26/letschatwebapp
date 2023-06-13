function addUser(){
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("kwitter_login_name", user_name);
    window.location="kwitter_room.html";
}