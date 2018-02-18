// Event Binding
document.getElementById("btn").addEventListener("click", show);

// document.getElementById("btn").addEventListener("click", function(){
//     var name = document.getElementById("box_1");
//     document.getElementById("result").innerHTML = name.value;
//     console.log("Name is",name.value);
// });

function show(){
    var name = document.getElementById("box_1");
    document.getElementById("result").innerHTML = name.value;
    console.log("Name is",name.value);
}