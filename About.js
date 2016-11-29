$(document).ready(function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeStyle = "#459add";
    ctx.strokeText("About AQUEOUS", 10, 50);
});


function myFunction(x) {
    x.classList.toggle("change");
}