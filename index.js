function validateform() {

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid  = validatePassword();

    // If all fields are valid submit the form
    if (isNameValid && isEmailValid && isPasswordValid){
        alert("You have registered successfully!");
        return true;
    }
    return false;
}

function validateName(){
    let valid = true;
    const namePattern=/^[a-zA-Z ]+$/;
    const name = document.getElementById('name');

    // Clear classes (valid or invalid) 
    // and clear the error message
    name.className = '';
    document.getElementById("nameMsg").innerHTML = "";


    if (!name.value){
        // In case the field is empty
        document.getElementById("nameMsg").innerHTML = "Fill in this field";
        document.getElementById("name").classList.add("invalid");
        valid = false;
    } else {
        // else check if pattern matches
        if (!name.value.match(namePattern)){
            document.getElementById("nameMsg").innerHTML = "The name must only contain letters";
            document.getElementById("name").classList.add("invalid");
            valid = false;
        } else {
            document.getElementById("name").classList.add("valid");
        }
    }
    return valid;
}

function validateEmail(){
    let valid = true;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.getElementById('email');
    email.className = '';
    document.getElementById("emailMsg").innerHTML = "";

    if (!email.value){
        document.getElementById("emailMsg").innerHTML = "Fill in this field";
        document.getElementById("email").classList.add("invalid");
        valid = false;
    } else {
        if (!email.value.match(emailPattern)){
            document.getElementById("emailMsg").innerHTML = "Enter a valid email";
            document.getElementById("email").classList.add("invalid");
            valid = false;
        } else {
            document.getElementById("email").classList.add("valid");
        }
    }
    return valid;
}

function validatePassword(){
    let valid = true;
    const password = document.getElementById('password');
    const password_conf = document.getElementById('passwordConf');

    password.className = '';
    password_conf.className = '';
    document.getElementById("passwordMsg").innerHTML = "";
    document.getElementById("passwordConfMsg").innerHTML = "";

    if (!password.value){
        // If password field is empty
        document.getElementById("password").classList.add("invalid");
        document.getElementById("passwordMsg").innerHTML = "Fill in this field";
        valid = false;
    } else {
        // else check if length is maximum 8
        if (password.value.length <= 8){
            document.getElementById("password").classList.add("valid");
         }else {
            document.getElementById("password").classList.add("invalid");
            document.getElementById("passwordMsg").innerHTML = "Password must be 8 characters long maximum";
            valid = false;
        }
    }

    if (!password_conf.value){
        document.getElementById("passwordConf").classList.add("invalid");
        document.getElementById("passwordConfMsg").innerHTML = "Fill in this field";
        valid = false;
    } else {
        // If the two password fields do not match
        if (password.value !== password_conf.value) {
            document.getElementById("passwordConf").classList.add("invalid");
            document.getElementById("passwordConfMsg").innerHTML = "Passwords do not match";
            valid = false;
        } else {
            document.getElementById("passwordConf").classList.add("valid");
            valid = true;
        } 
    }
    return valid;
}