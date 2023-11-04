let btn = document.querySelector("button");
btn.addEventListener('click', function (e) {
    e.preventDefault();
    let username = document.getElementById('name');
    let loginForm = document.getElementById('login-form');
    let errorName = document.getElementById('errorName');

    let namepattern = /[a-z]/;
    let namepattern1 = /[0-9]/;
    let currentValue = username.value;
    let valid = namepattern.test(currentValue) && namepattern1.test(currentValue);

    if (valid) {
        username.style.border = "1px solid var(--navbar-color)";
        errorName.style.display = "none";
    }
    else if (!valid) {
        username.style.border = "1px solid red";
        errorName.style.display = "block";
    }

    let useremail = document.getElementById('email');
    let erroremail = document.getElementById('errorEmail');

    let emailpattern = /^([a-z]+)(\d+)([\.-])*([a-z])*@([a-z]+)\.([a-z]+)$/;
    let currentEmail = useremail.value;
    validEmail = emailpattern.test(currentEmail);

    if (validEmail) {
        useremail.style.border = "1px solid var(--navbar-color)";
        erroremail.style.display = "none";
    }
    else if (!validEmail) {
        useremail.style.border = "1px solid red";
        erroremail.style.display = "block";
    }

    let userpassword = document.getElementById('password');
    let errorPassword = document.getElementById('errorPassword');

    if (userpassword.value.length >= 6) {
        userpassword.style.border = "1px solid var(--navbar-color)";
        errorPassword.style.display = "none";
    }
    else {
        userpassword.style.border = "1px solid red";
        errorPassword.style.display = "block";
    }
    if(valid && validEmail && userpassword.value.length >= 6){
        alert("all values are valid");
        username.value = "";
        useremail.value = "";
        userpassword.value = "";
    }
})