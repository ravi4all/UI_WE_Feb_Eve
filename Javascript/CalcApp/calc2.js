window.addEventListener("load", init);

function init(){
    firstnumber = document.getElementById("num_1");
    secondnumber = document.getElementById("num_2");
    span = document.getElementById("res");
    buttons = document.getElementsByTagName("button");
    for(var i = 0; i<buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
}

function calc(){
    // var elem = event.srcElement;
    var opr = event.srcElement.value;
    var expression = firstnumber.value + opr + secondnumber.value;
    expression = '10 + 12';
    var result = eval(expression)
    // console.log(opr);
    // var result = parseInt(firstnumber.value) + parseInt(secondnumber.value);
    span.innerHTML = result;
}