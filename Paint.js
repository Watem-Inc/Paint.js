var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var cursorX = 0;
var cursorY = 0;
var mouseDown = false;
canvas.addEventListener('mousemove', e=> {
    if(mouseDown==true){
    line(cursorX,cursorY,e.offsetX,e.offsetY)
    cursorX = e.offsetX;
    cursorY = e.offsetY;
    }
});
canvas.addEventListener('mousedown',e => {
    mouseDown = true;
    cursorX = e.offsetX;
    cursorY = e.offsetY;
});
canvas.addEventListener('mouseup',e => {
    if(mouseDown == true){
        line(cursorX,cursorY,e.offsetX,e.offsetY)
        mouseDown=false;
        cursorX = 0;
        cursorY = 0;
    }
    
})

function line(origx,origy,newx,newy) {
    ctx.beginPath();
    ctx.moveTo(origx,origy);
    ctx.lineTo(newx,newy);
    ctx.stroke();
    ctx.closePath();
}
