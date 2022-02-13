img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;
game_status="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img=loadImage("mario05.png");
}


function setup() {
	canvas=createCanvas(1240, 336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video= createCapture(VIDEO);
	video.size(800, 400);
	video.parent('game_console');

	poseNet=ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
  
  }
  
  function draw() {
	game();
	background("#D3D3D3");
	image(img,marioX, marioY, 40,70);
  }
  
  function modelLoaded(){
	console.log('Model Loaded!');
  }
  
  function gotPoses(results){
	if(results.length>0){
	   console.log(results);
	   noseX = results[0].pose.nose.x;
	   noseY = results[0].pose.nose.y;
  
	   }
  }

function startGame(){
game_status="start";
document.getElementById("status").innerHTML="Game is Loading";
}