var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerObject ="";
var blockImageObject = "";

function playerUpdate(){
    fabric.Image.fromURL("assets/player.png" , function (Img){
        playerObject = Img;
        playerObject.scaleToWidth (150);
        playerObject.scaleToHeight (140);
        playerObject.set({
            top:playerY,
            left:playerX,
        });
        canvas.add(playerObject);
    }
    ) 
}
function newImage(getImage){
    fabric.Image.fromURL(getImage, function (Img){
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left:playerX,
        });
        canvas.add(blockImageObject);
    });
};

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38"){
        console.log("cima")
        up();
    }

    if (keyPressed == "40") {
        console.log("baixo");
        down();
    }

    if (keyPressed == "37") {
        console.log("esquerda");
        left();
    }

    if (keyPressed == "39") {
        console.log("direita");
        right();
    }

    if (keyPressed == "87") {
        newImage("assets/wall.jpg");
        console.log("w");
      }
      if (keyPressed == "71") {
        newImage("assets/ground.png");
        console.log("g");
      }
      if (keyPressed == "76") {
        newImage("assets/light_green.png");
        console.log("l");
      }
      if (keyPressed == "84") {
        newImage("assets/trunk.jpg");
        console.log("t");
      }
      if (keyPressed == "82") {
        newImage("assets/roof.jpg");
        console.log("r");
      }
      if (keyPressed == "89") {
        newImage("assets/yellow_wall.png");
        console.log("y");
      }
      if (keyPressed == "68") {
        newImage("assets/dark_green.png");
        console.log("d");
      }
      if (keyPressed == "85") {
        newImage("assets/unique.png");
        console.log("u");
      }
      if (keyPressed == "67") {
        newImage("assets/cloud.jpg");
        console.log("c");
      }


      if (e.shiftKey == true && keyPressed =="80"){
        console.log("p e shift pressionadas juntas");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight +10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
      }


      if (e.shiftKey == true && keyPressed =="77"){
        console.log("m e shift pressionadas juntas");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
      }

    
}

function up() {
    if (playerY >= 0) {
      playerY = playerY - blockImageHeight;
      console.log("autura da imagem do bloco = " + blockImageHeight);
      console.log(
        "Quando a tecla direcional Cima for pressionada, X =  " +
          playerX +
          " , Y = " +
          playerY
      );
      canvas.remove(playerObject);
      playerUpdate();
    }
  }
  
  function down() {
    if (playerY <= 500) {
      playerY = playerY + blockImageHeight;
      console.log("altura da imagem do bloco = " + blockImageHeight);
      console.log(
        "Quando a tecla direcional Baixo for pressionada, X =  " +
          playerX +
          " , Y = " +
          playerY
      );
      canvas.remove(playerObject);
      playerUpdate();
    }
  }
  
  function left() {
    if (playerX > 0) {
      playerX = playerX - blockImageWidth;
      console.log("largura da imagem do bloco = " + blockImageWidth);
      console.log(
        "Quando a tecla direcional Esquerda for pressionada, X =  " +
          playerX +
          " , Y = " +
          playerY
      );
      canvas.remove(playerObject);
      playerUpdate();
    }
  }
  
  function right() {
    if (playerX <= 850) {
      playerX = playerX + blockImageWidth;
      console.log("largura da imagem do bloco = " + blockImageWidth);
      console.log(
        "Quando a tecla direcional Direita for pressionada, X =  " +
          playerX +
          " , Y = " +
          playerY
      );
      canvas.remove(playerObject);
      playerUpdate();
    }
  }