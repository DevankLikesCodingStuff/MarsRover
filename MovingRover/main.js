canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var roverHeight = 100 ;
var roverwidth =  60;
var XcordMars =  10;
var YcordMars = 10;
var BackgorungImgs = ["blackweird.jpg","mars.jpg","sang.jpg","weirdBlack.png"];
random_number=Math.floor(Math.random()*4);
var MarsBackground = BackgorungImgs[random_number];
var rover = "rover.png";
function add(){
    background_img_tag = new Image();
    background_img_tag.onload= uploadbackgorundImg;
    background_img_tag.src = MarsBackground;
    rover_img_tag = new Image()
    rover_img_tag.onload = uploadRoverimg;
    rover_img_tag.src = rover;
}
function uploadbackgorundImg(){
    ctx.drawImage(background_img_tag,0,0, canvas.width,canvas.height);
}
function uploadRoverimg(){
    ctx.drawImage(rover_img_tag,XcordMars,YcordMars,roverHeight,roverwidth);
}
window.addEventListener("keydown", keyDown)
function keyDown(e){
    var keyPressed = e.keyCode;
    if (keyPressed == "38"){
        Up();
        console.log("KeyPressed Up");
    }
    if (keyPressed == "40"){
        Down();
        console.log("DownKey presssed")
    }
    if (keyPressed == "39"){
        Right();
        console.log("RightKey presssed")
    }
    if (keyPressed == "37"){
        Left();
        console.log("LeftKey presssed")
    }
}
function Up(){
    if(YcordMars>=0){
        YcordMars = YcordMars-10;
        uploadbackgorundImg();
        uploadRoverimg();
    }
} 
function Down(){
    if(YcordMars<=550){
        YcordMars = YcordMars+10;
        uploadbackgorundImg();
        uploadRoverimg();
    }
} 
function Left(){
    if(XcordMars>=0){
        XcordMars = XcordMars-10;
        uploadbackgorundImg();
        uploadRoverimg();
    }
} 
function Right(){
    if(XcordMars<=700){
        XcordMars = XcordMars+10;
        uploadbackgorundImg();
        uploadRoverimg();
    }
} 
