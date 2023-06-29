function passShow() {
    var userPass = document.getElementById("user-pass");
    if (userPass.type === "password") {
        userPass.type = "text";
    } else {
        userPass.type = "password";
    }
}

function depPage() {

    var userId = document.getElementById("user-id").value;
    var userPass = document.getElementById("user-pass").value;


    if (userId === "123123" && userPass === "123123") {
        window.location.href = "department.html";
    } 
    else {
        alert("Incorrect credentials. Please try again.");
    }
}


function popSignup( nhb ) {

    const popupButton = document.getElementById('signup-btn');
    const popupCard = document.getElementById('popup-card');

    popupButton.addEventListener('click', () => {
        popupCard.style.display = 'block';
    });

    popupCard.addEventListener('click', (event) => {
        if (event.target === popupCard) {
            popupCard.style.display = 'none';
        }
    });

}