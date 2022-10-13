    var lastPositionOfX, lastPositionOfY;
    color = "black";
    widthOfLine = 2;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    
    var width = screen.width - 70;
    
    newWidth = screen.width - 70;
    newHeight = screen.height - 300;
         if(width < 992)
         {
        document.getElementById("myCanvas").width = newWidth;
        document.body.style.overflow = "hiddden";
         }
           canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e)
{
      console.log("touchstart", myTouchStart);
      //Atividade Adicional
      color = document.getElementByld("color").value;
      widthOfLine = document.getElementById("widthOfLine").value;
      //Fim da Atividade Adicional

      lastPositionOfX = e.tounches[0].clientX - canvas.OffsetLeft;
      lastPositionOfY = e.touches[0].clientY - canvas.offsetTop
}


canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) 
{

	console.log("myTouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

    // mesmo código utilizado para a versão web
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();

    lastPositionOfX = currentPositionOfTouchX; 
    lastPositionOfY = currentPositionOfTouchY;
    
    // fim do mesmo código utilizado para a versão web
}

    // mesmo código utilizado para a versão web
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    // fim do mesmo código utilizado para a versão web