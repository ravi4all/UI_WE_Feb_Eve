window.addEventListener("load", init);

function init(){
    username = document.querySelector("#box_1");
    useremail = document.querySelector("#box_2");
    userpwd = document.querySelector("#box_3");
    confpwd = document.querySelector("#box_4");
    span = document.getElementsByTagName("span");
    username.addEventListener("blur", blankCheck);
    useremail.addEventListener("keyup", validateEmail);
}

function blankCheck(){
    /*
    if(username.value == "") {
        span[0].innerHTML = "Please fill this field..";
        username.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "";
        username.style.border = "1px solid green";
    }
    */
    if(!isEmpty()){
        span[0].innerHTML = "Please fill this field..";
        username.style.border = "1px solid red";
    }
    else {
        span[0].innerHTML = "";
        username.style.border = "1px solid green";
    }
}

function isEmpty(){
    return (username == "" || username == undefined || username == null) ? true : false;
}


function validateEmail(){
    if(isValid()){
        span[1].innerHTML = "";
        console.log(isValid());
    }
    else {
        span[1].innerHTML = "Invalid Email";
        console.log(isValid());
    }
}

function isValid(){
    return (/([a-z | 0-9]\w+[@]\w+[.]\w+)/.test(useremail.value));
    // return(/[\w]+[@]\w+/)
}