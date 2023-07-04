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

}


const backToLogin = () => {

    event.preventDefault();

    const signupForm = document.getElementById('signup-form');
    signupForm.style.display = 'none';

}


document.onreadystatechange =  () => {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".spinner").style.display = "block";
    } else {
        document.querySelector(".spinner").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};


const formAnimation = () => {

    const signupForm = document.getElementById('signup-form');


    const showSignupAnimation = () => {
        
        signupForm.style.display = 'block';

        setTimeout(() => {
            signupForm.classList.add('show');
        }, 10);

    }

    closeSignupAnimation: () => {
        const signupForm = document.getElementById('signup-form');
        signupForm.classList.add('hide');
        setTimeout(() => {
            signupForm.style.display = 'none';
            signupForm.classList.remove('hide');
        }, 500);
    }
};


