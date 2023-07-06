const passShow = () => {

    var userPass = document.getElementById("user-pass");
    if (userPass.type === "password") {
        userPass.type = "text";
    } else {
        userPass.type = "password";
    }
}

const depPage = () => {

    var userId = document.getElementById("user-id").value;
    var userPass = document.getElementById("user-pass").value;

    document.getElementById("user-id").value = ""

    if (userId === "123123" && userPass === "123123") {
        window.location.href = "department.html";
    } 
    else {
        alert("Incorrect credentials. Please try again.");
    }
}




const appearSignup = () => {

    event.preventDefault();

    const signupForm = document.getElementById('signup-form');

    signupForm.style.display = 'flex';

    var body = document.querySelector("body");
    var width = window.innerWidth;
    var inputForm = document.querySelector(".input-form");

    if (width <= 720) {
        body.style.transition = "padding 0.8s";
        body.style.padding = "15px";
        inputForm.style.borderRadius = "15px 15px 0px 0px";
    } else {
        body.style.padding = "0px";
        inputForm.style.borderRadius = "0px";
    }

    var button = document.getElementById("signup-btn");
    button.addEventListener("click", appearSignup);

}


const backToLogin = () => {

    event.preventDefault();

    const signupForm = document.getElementById('signup-form');
    signupForm.style.display = 'none';

    var body = document.querySelector("body");
    var width = window.innerWidth;
    var inputForm = document.querySelector(".input-form");

    if (width <= 720) {
        body.style.transition = "padding 0.8s";
        body.style.padding = "0px";
        inputForm.style.borderRadius = "0px";
    }

    var button = document.getElementById("signup-btn");
    button.addEventListener("click", appearSignup);

}





const formAnimation = () => {

    const signupForm = document.getElementById('signup-form');

    const showSignupAnimation = () => {
        
        signupForm.style.display = 'block';

        setTimeout(() => {
            signupForm.classList.add('show');
        }, 10);

    }

    closeSignupAnimation: () => {

        signupForm.classList.add('hide');

        setTimeout(() => {
            signupForm.style.display = 'none';
            signupForm.classList.remove('hide');
        }, 500);
    }
};


// Media Query

