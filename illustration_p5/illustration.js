// illustration.js
var backgroundImg;
var castleImg;
var smokeImg;
var cloud1Img;
var cloud2Img;
var cloud3Img;
var flying1Img;
var flying2Img;
var tacoImg;
var xPositions = [];
var yPositions = [];

function preload() {
	backgroundImg = loadImage("images/background.png");
	castleImg = loadImage("images/castle.png");
	smokeImg = loadImage("images/smoke.png");
	cloud1Img = loadImage("images/cloud1.png");
	cloud2Img = loadImage("images/cloud2.png");
	cloud3Img = loadImage("images/cloud3.png");
	flying1Img = loadImage("images/flying1.png");
	flying2Img = loadImage("images/flying2.png");
	tacoImg = loadImage("images/taco.png");

}

function setup() {
	createCanvas(800, 600);
	for (var i = 0; i < 10; i++) {
		xPositions[i] = random(0, 640);
		yPositions[i] = random(0, 480);
	}
}

function draw() {
	image(backgroundImg, 0, 0);
	image(cloud1Img, random(370, 375), 50);
	image(cloud2Img, random(180, 185), 150);
	image(cloud3Img, random(0, 5), 10);
	image(castleImg, 0, 200);
	//image(flying1Img, 100, mouseY);
	//image(tacoImg, random(0, 800), random(0, 600));
	//	var flyIng = random(0, 0.5);
	//	console.log("The random flyIng value is: " + flyIng);
	//	if (flyIng > 0 && flyIng < 0.25) {
	//		image(flying1Img, mouseX - 170, mouseY - 170);
	//	} else {
	//		image(flying2Img, mouseX - 170, mouseY - 170);
	//	}
	//	loop();
	//moving wings while clicked
	frameRate(10);
	if (mouseIsPressed) {
		background(0, 0, 0);

		for (var i = 0; i < 10000; i++) {
			xPositions[i] = xPositions[i] + random(-20, 20);
			yPositions[i] = yPositions[i] + random(-20, 20);
			image(tacoImg, xPositions[i], yPositions[i]);
		}
		image(smokeImg, random(0, 3), random(100, 103));
		image(flying1Img, mouseX - 190, mouseY - 20);
	} else {
		image(flying2Img, mouseX - 170, mouseY - 170);
	}

}
