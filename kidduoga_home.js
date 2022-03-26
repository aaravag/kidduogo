function logOut(){
    window.location = "kwitter_login.html";
}

function addRoom(){
    User_1 = document.getElementById("User_Name").value;
    NewRoom = document.getElementById("room_create").value;
    row = User_1 + NewRoom ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("room_create").value = "";
}
