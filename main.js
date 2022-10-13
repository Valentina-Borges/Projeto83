var mouseEvent = "empty";
 var lastPositionX, lastPositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthOfLine=1;
//ctx.beginPath();
//ctx.strokeStyle=color;
//ctx.lineWidth=2;
//ctx.arc(200,200,40,0,2*Math.PI);
//ctx.stroke();
canvas.addEventListner("mousedown",myMousedown);
function myMousedown(e)
{
    //obtém a cor da caixa de inserção
    //início da atividade adicional
    color = document.getElementById("color").value;
    widthLine=document.getElementByid("whidthOfLine").value;
    console.log(color);
    //fim da atividade adicional
    
     //mouseX = e.clientX - canvas.offsetLeft;
     //mouseY = e.clientY - canvas.offsetTop;

    //console.log("X = " + mouseX + " ,Y =  " + mouseY);
    //circle(mouseX , mouseY);
    mouseEvent="mouseDown";
}
canvas.addEventListner("mouseleave",myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListerner("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUP"
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDow") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }
    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}
function circle(mouseX , mouseY)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouseX ,mouseY, 40 ,0 , 2*Math.PI);
ctx.stroke();
}

//atividade adicional

function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

	