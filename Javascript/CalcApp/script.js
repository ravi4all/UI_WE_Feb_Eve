window.addEventListener("load", init);

function init(){
    firstnumber = document.getElementById("num_1");
    secondnumber = document.getElementById("num_2");
    span = document.getElementById("res");
    document.getElementById("add").addEventListener("click", addition);
    document.getElementById("sub").addEventListener("click", subtraction);
    document.getElementById("div").addEventListener("click", divison);
    document.getElementById("mul").addEventListener("click", multiplication);
}

function addition(){
    var result = parseInt(firstnumber.value) + parseInt(secondnumber.value);
    span.innerHTML = result;
}
function subtraction(){
    var result = parseInt(firstnumber.value) - parseInt(secondnumber.value);
    span.innerHTML = result;
}
function divison(){
    var result = parseInt(firstnumber.value) / parseInt(secondnumber.value);
    span.innerHTML = result;
}
function multiplication(){
    var result = parseInt(firstnumber.value) * parseInt(secondnumber.value);
    span.innerHTML = result;
}