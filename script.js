let btn = document.getElementById("btn");
let body = document.querySelector("body");
let header = document.querySelector("header");
let alert = document.querySelector("div");
let disappear = document.getElementById("disappear");

btn.addEventListener("click", function(e){
    e.target.remove();
    body.style.backgroundColor = "rgb(219, 218, 215)";
    header.style.display = "none";
    alert.style.display = "block";
})

disappear.addEventListener("click", function(e){
    e.target.parentNode.remove();
})

