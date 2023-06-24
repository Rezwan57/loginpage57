function depPage(){

    var userId = document.getElementById("user-id").value;
    var userPass = document.getElementById("user-pass").value;

    if(userId === "123123" && userPass === "123123") {
        window.location.href = "department.html";
    }

    else{
        alert("Try again")
    }
        
}
