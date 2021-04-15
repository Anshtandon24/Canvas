canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width = 1;
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mousedown";

}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseEvent = "mouseup";

}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseEvent = "mouseleave";

}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_X;
    last_position_of_y = current_position_of_mouse_Y;
}
function clearArea() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }