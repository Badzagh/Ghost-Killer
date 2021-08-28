var colorHead = new Color(25,25,112);
var legsColor = new Color(192,192,192);
var leftLegColor = new Color(169,169,169);
var rectBlickColor = new Color(72,61,139);
var ovalColor = new Color(128,128,128);
var forestGreen = new Color(34,139,34);
var darkGreen = new Color(0,100,0);
var indigo = new Color(47,79,79);
var saddleBrown = new Color(139,69,19);
var chocolate = new Color(210,105,30);


//trees
var treesX = 50;
var treesY = 310;
var treesLineRightOne;
var treesLineRightTwo;
var treesLineLeftOne;
var treesLineLeftTwo;
var treesRectTwo;
var treesRectOne;
var treeCircle;
var treeArc;
var treeCircleLeft;
var treeArcLeft;
var treeCircleRight;
var treeArcRight;

//treesB
var treesXB = 170;
var treesYB = 310;
var treesLineRightOneB;
var treesLineRightTwoB;
var treesLineLeftOneB;
var treesLineLeftTwoB;
var treesRectTwoB;
var treesRectOneB;
var treeCircleB;
var treeArcB;
var treeCircleLeftB;
var treeArcLeftB;
var treeCircleRightB;
var treeArcRightB;

//treesC
var treesXC = 290;
var treesYC = 310;
var treesLineRightOneC;
var treesLineRightTwoC;
var treesLineLeftOneC;
var treesLineLeftTwoC;
var treesRectTwoC;
var treesRectOneC;
var treeCircleC;
var treeArcC;
var treeCircleLeftC;
var treeArcLeftC;
var treeCircleRightC;
var treeArcRightC;

//treesD
var treesXD = 410;
var treesYD = 310;
var treesLineRightOneD;
var treesLineRightTwoD;
var treesLineLeftOneD;
var treesLineLeftTwoD;
var treesRectTwoD;
var treesRectOneD;
var treeCircleD;
var treeArcD;
var treeCircleLeftD;
var treeArcLeftD;
var treeCircleRightD;
var treeArcRightD;

//bigtrees
var bigTreesX = 80;
var    rectbigTreesOne;
var    rectbigTreesTwo;
var    rectbigTreesThree;
var bigTreesArcRightOne;
var bigTreesArcRightTwo;
var bigTreesArcLeftOne;
var bigTreesArcLeftTwo;
var rectbigTreesFour;
//bigtreesB
var bigTreesXB = 320;
var rectbigTreesOneB;
var rectbigTreesTwoB;
var rectbigTreesThreeB;
var bigTreesArcRightOneB;
var bigTreesArcRightTwoB;
var bigTreesArcLeftOneB;
var bigTreesArcLeftTwoB;
var rectbigTreesFourB;

//bush
var bushX = 190;
var bushArcOne;
var bushArcTwo;
var bushArcThree;
var bushArcFour;
//bushB
var bushXB = 390;
var bushArcOneB;
var bushArcTwoB;
var bushArcThreeB;
var bushArcFourB;

//enemyshadow
var enemyshadowX = getWidth()- 100;
var changefootX = 2;
var k = 2;
var enemyshadowOne; 
var enemyshadowTwo;

var enemyshadowOneB; 
var enemyshadowTwoB;
//enemy
var enemyCircle;
var enemyOvalLeft;
var enemyOvalRight;

var enemyCircleB;
var enemyOvalLeftB;
var enemyOvalRightB;

var enemyCircleC;
var enemyOvalLeftC;
var enemyOvalRightC;

var enemyCircleD;
var enemyOvalLeftD;
var enemyOvalRightD;

//mooneye
var mooneyeX = 200;
var mooneyeCircleOne;
var mooneyeCircleTwo;
var mooneyeCircleThree; 
var mooneyeCircleFour;


//bullet

var bulletStarting = true;

//character

var x = 30;
var y = 400;
var legY = 447;
var legLeftdy = -1.5;
var legRightdy = +1.5;
var heightBody = 25;
var head;
var rectEyesLeft;
var rectEyesRight;
var circleEyesLeft;
var circleEyesRight;
var rectBody;
var circleBody;
var armCircle;
var handCircle;
var legLeft;
var legRight;
var rectBlick;

var bulletCircle;
var weaponCircle;
var weaponRect;


//
var scoreText;
var livesText;
var score = 0;
var lives = 3;


var i;

var starting = false;
function start(){
    background();
    mouseClickMethod(mouse);
    
    killer();
    enemy();
    
    scoreText = new Text("score: "+score);
	scoreText.setPosition(0, 25);
	add(scoreText);
	
	livesText = new Text("lives: " + lives);
	livesText.setPosition(200, 25);
	add(livesText);
	setTimer(Move, 10);
} 
//background
function background(){
    var rect = new Rectangle(getWidth(), getHeight());
    rect.setPosition(0, 0);
    rect.setColor(indigo);
    add(rect);
    
    //stars
    for(var i = 0; i< 300; i++){
        var xStars = Randomizer.nextInt(0, getWidth());
        var yStars = Randomizer.nextInt(0, getWidth());
        var circle = new Circle(1);
        circle.setPosition(xStars, yStars);
        circle.setColor(ovalColor);
        add(circle);
    }
    
    //moon
    var circle = new Circle(100);
    circle.setPosition(200, 200);
    circle.setColor(legsColor);
    add(circle);
    
    var circle = new Circle(20);
    circle.setPosition(130, 220);
    circle.setColor(ovalColor);
    add(circle);
    
    var circle = new Circle(10);
    circle.setPosition(140, 260);
    circle.setColor(ovalColor);
    add(circle);
    
    var circle = new Circle(7);
    circle.setPosition(160, 240);
    circle.setColor(ovalColor);
    add(circle);
    
    var circle = new Circle(7);
    circle.setPosition(140, 160);
    circle.setColor(ovalColor);
    add(circle);
    
     var circle = new Circle(7);
    circle.setPosition(200, 120);
    circle.setColor(ovalColor);
    add(circle);
    
    mooneye();
    bigTrees();
    bigTreesB();
    trees();
    treesB();
    treesC();
    treesD();
    bush();
    bushB();
    var rect = new Rectangle(3000, 20);
    rect.setPosition(0, getHeight() - 50);
    add(rect);
    enemyshadow();
}
function mooneye(){
    mooneyeCircleOne = new Circle(25);
    mooneyeCircleOne.setPosition(mooneyeX , 200);
    mooneyeCircleOne.setColor(Color.white);
    add(mooneyeCircleOne);
    
    mooneyeCircleTwo = new Circle(15);
    mooneyeCircleTwo.setPosition(mooneyeX - 5 , 206);
    mooneyeCircleTwo.setColor(ovalColor);
    add(mooneyeCircleTwo);
    
    mooneyeCircleThree = new Circle(10);
    mooneyeCircleThree.setPosition(mooneyeX - 5, 206);
    mooneyeCircleThree.setColor(Color.black);
    add(mooneyeCircleThree);
    
    mooneyeCircleFour = new Circle(3);
    mooneyeCircleFour.setPosition(mooneyeX, 202);
    mooneyeCircleFour.setColor(Color.white);
    add(mooneyeCircleFour);
    
}
function bigTrees(){
    rectbigTreesOne= new Rectangle(20, getHeight() - 200);
    rectbigTreesOne.setPosition(bigTreesX + 10, 150);
    rectbigTreesOne.setColor(saddleBrown);
    add(rectbigTreesOne);
    
    rectbigTreesTwo= new Rectangle(10, getHeight() - 200);
    rectbigTreesTwo.setPosition(bigTreesX + 10, 150);
    rectbigTreesTwo.setColor(chocolate);
    add(rectbigTreesTwo);
    
    rectbigTreesThree= new Rectangle(60, 170);
    rectbigTreesThree.setPosition(bigTreesX - 10, 150);
    rectbigTreesThree.setColor(darkGreen);
    add(rectbigTreesThree);
    
    //right
    bigTreesArcRightOne= new Arc(30, 0, 180, 0);
    bigTreesArcRightOne.setPosition(bigTreesX +20, 150);
    bigTreesArcRightOne.setColor(darkGreen);
    add(bigTreesArcRightOne);
    
    bigTreesArcRightTwo= new Arc(30, 180, 0, 0);
    bigTreesArcRightTwo.setPosition(bigTreesX +20, 320);
    bigTreesArcRightTwo.setColor(darkGreen);
    add(bigTreesArcRightTwo);
    
    //left
    bigTreesArcLeftOne= new Arc(30, 90, 180, 0);
    bigTreesArcLeftOne.setPosition(bigTreesX +20, 150);
    bigTreesArcLeftOne.setColor(forestGreen);
    add(bigTreesArcLeftOne);
    
    bigTreesArcLeftTwo= new Arc(30, 180, 270, 0);
    bigTreesArcLeftTwo.setPosition(bigTreesX +20, 320);
    bigTreesArcLeftTwo.setColor(forestGreen);
    add(bigTreesArcLeftTwo);
    
    rectbigTreesFour= new Rectangle(30, 170);
    rectbigTreesFour.setPosition(bigTreesX -10, 150);
    rectbigTreesFour.setColor(forestGreen);
    add(rectbigTreesFour);
    
}
function bigTreesB(){
    rectbigTreesOneB = new Rectangle(20, getHeight() - 200);
    rectbigTreesOneB.setPosition(bigTreesXB + 10, 150);
    rectbigTreesOneB.setColor(saddleBrown);
    add(rectbigTreesOneB);
    
    rectbigTreesTwoB = new Rectangle(10, getHeight() - 200);
    rectbigTreesTwoB.setPosition(bigTreesXB + 10, 150);
    rectbigTreesTwoB.setColor(chocolate);
    add(rectbigTreesTwoB);
    
    rectbigTreesThreeB = new Rectangle(60, 170);
    rectbigTreesThreeB.setPosition(bigTreesXB - 10, 150);
    rectbigTreesThreeB.setColor(darkGreen);
    add(rectbigTreesThreeB);
    
    //right
    bigTreesArcRightOneB = new Arc(30, 0, 180, 0);
    bigTreesArcRightOneB.setPosition(bigTreesXB +20, 150);
    bigTreesArcRightOneB.setColor(darkGreen);
    add(bigTreesArcRightOneB);
    
    bigTreesArcRightTwoB = new Arc(30, 180, 0, 0);
    bigTreesArcRightTwoB.setPosition(bigTreesXB +20, 320);
    bigTreesArcRightTwoB.setColor(darkGreen);
    add(bigTreesArcRightTwoB);
    
    //left
    bigTreesArcLeftOneB = new Arc(30, 90, 180, 0);
    bigTreesArcLeftOneB.setPosition(bigTreesXB +20, 150);
    bigTreesArcLeftOneB.setColor(forestGreen);
    add(bigTreesArcLeftOneB);
    
    bigTreesArcLeftTwoB = new Arc(30, 180, 270, 0);
    bigTreesArcLeftTwoB.setPosition(bigTreesXB +20, 320);
    bigTreesArcLeftTwoB.setColor(forestGreen);
    add(bigTreesArcLeftTwoB);
    
    rectbigTreesFourB = new Rectangle(30, 170);
    rectbigTreesFourB.setPosition(bigTreesXB -10, 150);
    rectbigTreesFourB.setColor(forestGreen);
    add(rectbigTreesFourB);
}
function trees(){
    //right
    treesLineRightOne = new Line(treesX +5, treesY + 50, treesX +40, treesY + 20);
    treesLineRightOne.setLineWidth(4);
    treesLineRightOne.setColor(chocolate);
    add(treesLineRightOne);
    
    treesLineRightTwo = new Line(treesX +5, treesY + 54, treesX +40, treesY + 24);
    treesLineRightTwo.setLineWidth(4);
    treesLineRightTwo.setColor(saddleBrown);
    add(treesLineRightTwo);
    //left
    treesLineLeftOne = new Line(treesX +5, treesY + 70, treesX - 30, treesY + 40);
    treesLineLeftOne.setLineWidth(4);
    treesLineLeftOne.setColor(chocolate);
    add(treesLineLeftOne);
    
    treesLineLeftTwo = new Line(treesX +5, treesY + 74, treesX - 30, treesY + 44);
    treesLineLeftTwo.setLineWidth(4);
    treesLineLeftTwo.setColor(saddleBrown);
    add(treesLineLeftTwo);
    
    treesRectOne = new Rectangle(5, 120);
    treesRectOne.setPosition(treesX, treesY);
    treesRectOne.setColor(chocolate);
    add(treesRectOne);
    
    treesRectTwo = new Rectangle(5, 120);
    treesRectTwo.setPosition(treesX +5, treesY);
    treesRectTwo.setColor(saddleBrown);
    add(treesRectTwo);
    
    treeCircle = new Circle(35);
    treeCircle.setPosition(treesX +5, treesY);
    treeCircle.setColor(forestGreen);
    add(treeCircle);
    
    treeArc = new Arc(35, 270, 90, 0);
    treeArc.setPosition(treesX +5, treesY);
    treeArc.setColor(darkGreen);
    add(treeArc);
    //left
    treeCircleLeft = new Circle(25);
    treeCircleLeft.setPosition(treesX - 30, treesY + 40);
    treeCircleLeft.setColor(forestGreen);
    add(treeCircleLeft);
    
    treeArcLeft = new Arc(25, 270, 90, 0);
    treeArcLeft.setPosition(treesX - 30, treesY + 40);
    treeArcLeft.setColor(darkGreen);
    add(treeArcLeft);
    //right
    treeCircleRight = new Circle(25);
    treeCircleRight.setPosition(treesX + 40, treesY + 20);
    treeCircleRight.setColor(forestGreen);
    add(treeCircleRight);
    
    treeArcRight = new Arc(25, 270, 90, 0);
    treeArcRight.setPosition(treesX + 40, treesY + 20);
    treeArcRight.setColor(darkGreen);
    add(treeArcRight);
}
function treesB(){
    //right
    treesLineRightOneB = new Line(treesXB +5, treesYB + 50, treesXB +40, treesYB + 20);
    treesLineRightOneB.setLineWidth(4);
    treesLineRightOneB.setColor(chocolate);
    add(treesLineRightOneB);
    
    treesLineRightTwoB = new Line(treesXB +5, treesYB + 54, treesXB +40, treesYB + 24);
    treesLineRightTwoB.setLineWidth(4);
    treesLineRightTwoB.setColor(saddleBrown);
    add(treesLineRightTwoB);
    //left
    treesLineLeftOneB = new Line(treesXB +5, treesYB + 70, treesXB - 30, treesYB + 40);
    treesLineLeftOneB.setLineWidth(4);
    treesLineLeftOneB.setColor(chocolate);
    add(treesLineLeftOneB);
    
    treesLineLeftTwoB = new Line(treesXB +5, treesYB + 74, treesXB - 30, treesYB + 44);
    treesLineLeftTwoB.setLineWidth(4);
    treesLineLeftTwoB.setColor(saddleBrown);
    add(treesLineLeftTwoB);
    
    treesRectOneB = new Rectangle(5, 120);
    treesRectOneB.setPosition(treesXB, treesYB);
    treesRectOneB.setColor(chocolate);
    add(treesRectOneB);
    
    treesRectTwoB = new Rectangle(5, 120);
    treesRectTwoB.setPosition(treesXB +5, treesYB);
    treesRectTwoB.setColor(saddleBrown);
    add(treesRectTwoB);
    
    treeCircleB = new Circle(35);
    treeCircleB.setPosition(treesXB +5, treesYB);
    treeCircleB.setColor(forestGreen);
    add(treeCircleB);
    
    treeArcB = new Arc(35, 270, 90, 0);
    treeArcB.setPosition(treesXB +5, treesYB);
    treeArcB.setColor(darkGreen);
    add(treeArcB);
    //left
    treeCircleLeftB = new Circle(25);
    treeCircleLeftB.setPosition(treesXB - 30, treesYB + 40);
    treeCircleLeftB.setColor(forestGreen);
    add(treeCircleLeftB);
    
    treeArcLeftB = new Arc(25, 270, 90, 0);
    treeArcLeftB.setPosition(treesXB - 30, treesYB + 40);
    treeArcLeftB.setColor(darkGreen);
    add(treeArcLeftB);
    //right
    treeCircleRightB = new Circle(25);
    treeCircleRightB.setPosition(treesXB + 40, treesYB + 20);
    treeCircleRightB.setColor(forestGreen);
    add(treeCircleRightB);
    
    treeArcRightB = new Arc(25, 270, 90, 0);
    treeArcRightB.setPosition(treesXB + 40, treesYB + 20);
    treeArcRightB.setColor(darkGreen);
    add(treeArcRightB);
}
function treesC(){
     //right
    treesLineRightOneC = new Line(treesXC +5, treesYC + 50, treesXC +40, treesYC + 20);
    treesLineRightOneC.setLineWidth(4);
    treesLineRightOneC.setColor(chocolate);
    add(treesLineRightOneC);
    
    treesLineRightTwoC = new Line(treesXC +5, treesYC + 54, treesXC +40, treesYC + 24);
    treesLineRightTwoC.setLineWidth(4);
    treesLineRightTwoC.setColor(saddleBrown);
    add(treesLineRightTwoC);
    //left
    treesLineLeftOneC = new Line(treesXC +5, treesYC + 70, treesXC - 30, treesYC + 40);
    treesLineLeftOneC.setLineWidth(4);
    treesLineLeftOneC.setColor(chocolate);
    add(treesLineLeftOneC);
    
    treesLineLeftTwoC = new Line(treesXC +5, treesYC + 74, treesXC - 30, treesYC + 44);
    treesLineLeftTwoC.setLineWidth(4);
    treesLineLeftTwoC.setColor(saddleBrown);
    add(treesLineLeftTwoC);
    
    treesRectOneC = new Rectangle(5, 120);
    treesRectOneC.setPosition(treesXC, treesYC);
    treesRectOneC.setColor(chocolate);
    add(treesRectOneC);
    
    treesRectTwoC = new Rectangle(5, 120);
    treesRectTwoC.setPosition(treesXC +5, treesYC);
    treesRectTwoC.setColor(saddleBrown);
    add(treesRectTwoC);
    
    treeCircleC = new Circle(35);
    treeCircleC.setPosition(treesXC +5, treesYC);
    treeCircleC.setColor(forestGreen);
    add(treeCircleC);
    
    treeArcC = new Arc(35, 270, 90, 0);
    treeArcC.setPosition(treesXC +5, treesYC);
    treeArcC.setColor(darkGreen);
    add(treeArcC);
    //left
    treeCircleLeftC = new Circle(25);
    treeCircleLeftC.setPosition(treesXC - 30, treesYC + 40);
    treeCircleLeftC.setColor(forestGreen);
    add(treeCircleLeftC);
    
    treeArcLeftC = new Arc(25, 270, 90, 0);
    treeArcLeftC.setPosition(treesXC - 30, treesYC + 40);
    treeArcLeftC.setColor(darkGreen);
    add(treeArcLeftC);
    //right
    treeCircleRightC = new Circle(25);
    treeCircleRightC.setPosition(treesXC + 40, treesYC + 20);
    treeCircleRightC.setColor(forestGreen);
    add(treeCircleRightC);
    
    treeArcRightC = new Arc(25, 270, 90, 0);
    treeArcRightC.setPosition(treesXC + 40, treesYC + 20);
    treeArcRightC.setColor(darkGreen);
    add(treeArcRightC);
}
function treesD(){
    //right
    treesLineRightOneD = new Line(treesXD +5, treesYD + 50, treesXD +40, treesYD + 20);
    treesLineRightOneD.setLineWidth(4);
    treesLineRightOneD.setColor(chocolate);
    add(treesLineRightOneD);
    
    treesLineRightTwoD = new Line(treesXD +5, treesYD + 54, treesXD +40, treesYD + 24);
    treesLineRightTwoD.setLineWidth(4);
    treesLineRightTwoD.setColor(saddleBrown);
    add(treesLineRightTwoD);
    //left
    treesLineLeftOneD = new Line(treesXD +5, treesYD + 70, treesXD - 30, treesYD + 40);
    treesLineLeftOneD.setLineWidth(4);
    treesLineLeftOneD.setColor(chocolate);
    add(treesLineLeftOneD);
    
    treesLineLeftTwoD = new Line(treesXD +5, treesYD + 74, treesXD - 30, treesYD + 44);
    treesLineLeftTwoD.setLineWidth(4);
    treesLineLeftTwoD.setColor(saddleBrown);
    add(treesLineLeftTwoD);
    
    treesRectOneD = new Rectangle(5, 120);
    treesRectOneD.setPosition(treesXD, treesYD);
    treesRectOneD.setColor(chocolate);
    add(treesRectOneD);
    
    treesRectTwoD = new Rectangle(5, 120);
    treesRectTwoD.setPosition(treesXD +5, treesYD);
    treesRectTwoD.setColor(saddleBrown);
    add(treesRectTwoD);
    
    treeCircleD = new Circle(35);
    treeCircleD.setPosition(treesXD +5, treesYD);
    treeCircleD.setColor(forestGreen);
    add(treeCircleD);
    
    treeArcD = new Arc(35, 270, 90, 0);
    treeArcD.setPosition(treesXD +5, treesYD);
    treeArcD.setColor(darkGreen);
    add(treeArcD);
    //left
    treeCircleLeftD = new Circle(25);
    treeCircleLeftD.setPosition(treesXD - 30, treesY + 40);
    treeCircleLeftD.setColor(forestGreen);
    add(treeCircleLeftD);
    
    treeArcLeftD = new Arc(25, 270, 90, 0);
    treeArcLeftD.setPosition(treesXD - 30, treesYD + 40);
    treeArcLeftD.setColor(darkGreen);
    add(treeArcLeftD);
    //right
    treeCircleRightD = new Circle(25);
    treeCircleRightD.setPosition(treesXD + 40, treesYD + 20);
    treeCircleRightD.setColor(forestGreen);
    add(treeCircleRightD);
    
    treeArcRightD = new Arc(25, 270, 90, 0);
    treeArcRightD.setPosition(treesXD + 40, treesYD + 20);
    treeArcRightD.setColor(darkGreen);
    add(treeArcRightD);
}
function bush(){
    bushArcOne = new Arc(20, 0, 180,0);
    bushArcOne.setPosition(bushX, getHeight() - 50);
    bushArcOne.setColor(darkGreen);
    add(bushArcOne);
    
    bushArcTwo = new Arc(12, 0, 180,0);
    bushArcTwo.setPosition(bushX +4 , getHeight() - 50);
    bushArcTwo.setColor(forestGreen);
    add(bushArcTwo);
    
    bushArcThree = new Arc(40, 0, 180,0);
    bushArcThree.setPosition(bushX -45, getHeight() - 50);
    bushArcThree.setColor(darkGreen);
    add(bushArcThree);
    
    bushArcFour = new Arc(32, 0, 180,0);
    bushArcFour.setPosition(bushX-49 , getHeight() - 50);
    bushArcFour.setColor(forestGreen);
    add(bushArcFour);
}
function bushB(){
    bushArcOneB = new Arc(20, 0, 180,0);
    bushArcOneB.setPosition(bushXB, getHeight() - 50);
    bushArcOneB.setColor(darkGreen);
    add(bushArcOneB);
    
    bushArcTwoB = new Arc(12, 0, 180,0);
    bushArcTwoB.setPosition(bushXB +4 , getHeight() - 50);
    bushArcTwoB.setColor(forestGreen);
    add(bushArcTwoB);
    
    bushArcThreeB = new Arc(40, 0, 180,0);
    bushArcThreeB.setPosition(bushXB -45, getHeight() - 50);
    bushArcThreeB.setColor(darkGreen);
    add(bushArcThreeB);
    
    bushArcFourB = new Arc(32, 0, 180,0);
    bushArcFourB.setPosition(bushXB-49 , getHeight() - 50);
    bushArcFourB.setColor(forestGreen);
    add(bushArcFourB);
}
//character
function killer(){
    shadow();
    headkiller();
    eyes();
    
    legs();
    body();
    blick();
    arm();
    bullet();
    weapon();
    hand();
   
}
function headkiller(){
    head = new Circle(25);
    head.setPosition(x, y);
    head.setColor(colorHead);
    add(head);
}
function eyes(){
    rectEyesLeft = new Rectangle(10, 5);
    rectEyesLeft.setPosition(x - 8 , y - 10);
    rectEyesLeft.setColor(Color.white);
    add(rectEyesLeft);
    
    rectEyesRight = new Rectangle(10, 5);
    rectEyesRight.setPosition(x +10, y - 10 );
    rectEyesRight.setColor(Color.white);
    add(rectEyesRight);
    
    circleEyesLeft = new Circle(5);
    circleEyesLeft.setPosition(x -3 , y - 5);
    circleEyesLeft.setColor(Color.white);
    add(circleEyesLeft);
    
    circleEyesRight = new Circle(5);
    circleEyesRight.setPosition(x + 15, y -5);
    circleEyesRight.setColor(Color.white);
    add(circleEyesRight);
}
function legs(){
    legLeft = new Circle(11);
    legLeft.setPosition(x +6, legY);
    legLeft.setColor(leftLegColor);
    add(legLeft);
    
    legRight = new Circle(11);
    legRight.setPosition(x -6, legY-6);
    legRight.setColor(legsColor);
    add(legRight);
}
function  body(){
    circleBody = new Circle(25);
    circleBody.setPosition(x , y +  heightBody);
    circleBody.setColor(legsColor);
    add(circleBody);
    
    rectBody = new Rectangle(50, heightBody);
    rectBody.setPosition(x - 25, y);
    rectBody.setColor(colorHead);
    add(rectBody);
}
function arm(){
    for(var i = 0; i < 4; i++){
    armCircle = new Circle(5);
    armCircle.setPosition(x - 10, y + 15);
    armCircle.setColor(ovalColor);
    add(armCircle);
    x-=3;
    y+=3;
}
}
function hand(){
    for(var i = 0; i < 4; i++){
    handCircle = new Circle(5);
    handCircle.setPosition(x - 45, y + 12);
    handCircle.setColor(ovalColor);
    add(handCircle);
    x+=3;
    }
    handCircle = new Circle(5);
    handCircle.setPosition(x -15, y + 17);
    handCircle.setColor(ovalColor);
    add(handCircle);
}
function blick(){
     rectBlick = new Rectangle(2, 20);
     rectBlick.setPosition(x -20,  y);
     rectBlick.setColor(rectBlickColor);
     add(rectBlick);
     
     var circleBlick = new Circle(1);
     circleBlick.setPosition(x -19,  y -4);
     circleBlick.setColor(rectBlickColor);
     add(circleBlick);
}
function shadow(){
    var oval = new Oval(50, 5);
    oval.setPosition(30, 460);
    oval.setColor(ovalColor);
    add(oval);
}

function bullet(){
   
    bulletCircle = new Oval(8,2);
    bulletCircle.setPosition(60, 420);
    bulletCircle.setColor(Color.black);
    add(bulletCircle);
}
function weapon(){
    weaponRects(12, x +3, y +15, Color.purple);
    for(var i = 0; i < 8; i++){
    weaponCircle = new Circle(8);
    weaponCircle.setPosition(x +5, y + 10);
    weaponCircle.setColor(Color.purple);
    add(weaponCircle);
    x+=5;
    }
   
    weaponRects(16, x +6, y +2, ovalColor);
    weaponRects(12, x +8, y +3, leftLegColor);
    weaponRects(24, x +3, y -2, Color.purple);
   
}
function weaponRects(height, xPosition, yPosition, color){
    weaponRect = new Rectangle(5, height);
    weaponRect.setPosition(xPosition, yPosition);
    weaponRect.setColor(color);
    add(weaponRect);
}
//move
function Move(e){
    
    treesMove();
    bigTreesMove();
    bushMove();
    legsMove();
    enemyshadowMove();
    
}
function bulletMove(){
    
    bulletCircle.move(5, 0);
    if(score >= 75 ){
        bulletCircle.move(20, 0);
    }
    if(score >= 120 ){
        bulletCircle.move(50, 0);
    }
    if(bulletCircle.getX() >= enemyshadowOne.getX() - 40){
        
        enemyCircle.setPosition(enemyshadowOne.getX(), 420);
        enemyOvalLeft.setPosition(enemyshadowOne.getX()-15, 420);
        enemyOvalRight.setPosition(enemyshadowOne.getX()-10, 420);
        
        enemyshadowOne.setPosition(getWidth()+100,460);
        stopTimer(bulletMove);
        bulletStarting = !bulletStarting;
        bulletCircle.setPosition(60, 420);
        score++;
        
    }
    
    if(bulletCircle.getX() >= enemyshadowTwo.getX() - 40){
        
        enemyCircleB.setPosition(enemyshadowTwo.getX(), 420);
        enemyOvalLeftB.setPosition(enemyshadowTwo.getX()-15, 420);
        enemyOvalRightB.setPosition(enemyshadowTwo.getX()-10, 420);
        
        enemyshadowTwo.setPosition(getWidth()+150,460);
        stopTimer(bulletMove);
        bulletStarting = !bulletStarting;
        bulletCircle.setPosition(60, 420);
        score++;
        
    }
    if(score >= 20){
     if(bulletCircle.getX() >= enemyshadowOneB.getX() - 40){
        enemyCircleC.setPosition(enemyshadowOneB.getX(), 420);
        enemyOvalLeftC.setPosition(enemyshadowOneB.getX()-15, 420);
        enemyOvalRightC.setPosition(enemyshadowOneB.getX()-10, 420);
       
        enemyshadowOneB.setPosition(getWidth()+100,460);
        stopTimer(bulletMove);
        bulletStarting = !bulletStarting;
        bulletCircle.setPosition(60, 420);
        score++;
        
     }    
    }
    if(score >= 100){
    if(bulletCircle.getX() >= enemyshadowTwoB.getX() - 40 ){
       
        enemyCircleD.setPosition(enemyshadowTwoB.getX(), 420);
        enemyOvalLeftD.setPosition(enemyshadowTwoB.getX()-15, 420);
        enemyOvalRightD.setPosition(enemyshadowTwoB.getX()-10, 420);
        
        enemyshadowTwoB.setPosition(getWidth()+150,460);
        stopTimer(bulletMove);
        bulletStarting = !bulletStarting;
        bulletCircle.setPosition(60, 420);
        score++;
        
    }
    }
    scoreText.setText("score: " + score);
}
function mouse(e){
    if(bulletStarting){
        setTimer(bulletMove, 5);
        bulletStarting = !bulletStarting;
    }
    
    
}
function treesMove(){
    
    treesLineRightOne.move(-1, 0);
    treesLineRightTwo.move(-1, 0);
    treesLineLeftOne.move(-1, 0);
    treesLineLeftTwo.move(-1, 0);
    treesRectOne.move(-1, 0);
    treesRectTwo.move(-1, 0);
    treeCircle.move(-1, 0);
    treeArc.move(-1, 0);
    treeCircleLeft.move(-1, 0);
    treeArcLeft.move(-1, 0);
    treeCircleRight.move(-1, 0);
    treeArcRight.move(-1, 0);


    if(treeCircle.getX() <-60){
       treesX=getWidth()+60;
    treesLineRightOne.setPosition(treesX +5, treesY + 50);
    treesLineRightOne.setEndpoint(treesX +40, treesY + 20);
    treesLineRightTwo.setPosition(treesX +5, treesY + 54);
    treesLineRightTwo.setEndpoint(treesX +40, treesY + 24);
    treesLineLeftOne.setPosition(treesX +5, treesY + 70);
    treesLineLeftOne.setEndpoint(treesX - 30, treesY + 40);
    treesLineLeftTwo.setPosition(treesX +5, treesY + 74);
    treesLineLeftTwo.setEndpoint(treesX - 30, treesY + 44);
    treesRectOne.setPosition(treesX, treesY);
    treesRectTwo.setPosition(treesX +5, treesY);
    treeCircle.setPosition(treesX, treesY);
    treeArc.setPosition(treesX +5, treesY);
    treeCircleLeft.setPosition(treesX - 30, treesY +40);
    treeArcLeft.setPosition(treesX - 30, treesY + 40);
    treeCircleRight.setPosition(treesX + 40, treesY +20);
    treeArcRight.setPosition(treesX + 40, treesY +20);
        
    }
    
	
    
    //B
    treesLineRightOneB.move(-1, 0);
    treesLineRightTwoB.move(-1, 0);
    treesLineLeftOneB.move(-1, 0);
    treesLineLeftTwoB.move(-1, 0);
    treesRectOneB.move(-1, 0);
    treesRectTwoB.move(-1, 0);
    treeCircleB.move(-1, 0);
    treeArcB.move(-1, 0);
    treeCircleLeftB.move(-1, 0);
    treeArcLeftB.move(-1, 0);
    treeCircleRightB.move(-1, 0);
    treeArcRightB.move(-1, 0);
    
    if(treeCircleB.getX() <-60){
       treesXB=getWidth()+60;
    treesLineRightOneB.setPosition(treesX +5, treesY + 50);
    treesLineRightOneB.setEndpoint(treesX +40, treesY + 20);
    treesLineRightTwoB.setPosition(treesX +5, treesY + 54);
    treesLineRightTwoB.setEndpoint(treesX +40, treesY + 24);
    treesLineLeftOneB.setPosition(treesX +5, treesY + 70);
    treesLineLeftOneB.setEndpoint(treesX - 30, treesY + 40);
    treesLineLeftTwoB.setPosition(treesX +5, treesY + 74);
    treesLineLeftTwoB.setEndpoint(treesX - 30, treesY + 44);
    treesRectOneB.setPosition(treesX, treesY);
    treesRectTwoB.setPosition(treesX +5, treesY);
    treeCircleB.setPosition(treesX, treesY);
    treeArcB.setPosition(treesX +5, treesY);
    treeCircleLeftB.setPosition(treesX - 30, treesY +40);
    treeArcLeftB.setPosition(treesX - 30, treesY + 40);
    treeCircleRightB.setPosition(treesX + 40, treesY +20);
    treeArcRightB.setPosition(treesX + 40, treesY +20);
        
    }
    
    //C
    treesLineRightOneC.move(-1, 0);
    treesLineRightTwoC.move(-1, 0);
    treesLineLeftOneC.move(-1, 0);
    treesLineLeftTwoC.move(-1, 0);
    treesRectOneC.move(-1, 0);
    treesRectTwoC.move(-1, 0);
    treeCircleC.move(-1, 0);
    treeArcC.move(-1, 0);
    treeCircleLeftC.move(-1, 0);
    treeArcLeftC.move(-1, 0);
    treeCircleRightC.move(-1, 0);
    treeArcRightC.move(-1, 0);
    
    if(treeCircleC.getX() <-60){
       treesXC=getWidth()+60;
    treesLineRightOneC.setPosition(treesX +5, treesY + 50);
    treesLineRightOneC.setEndpoint(treesX +40, treesY + 20);
    treesLineRightTwoC.setPosition(treesX +5, treesY + 54);
    treesLineRightTwoC.setEndpoint(treesX +40, treesY + 24);
    treesLineLeftOneC.setPosition(treesX +5, treesY + 70);
    treesLineLeftOneC.setEndpoint(treesX - 30, treesY + 40);
    treesLineLeftTwoC.setPosition(treesX +5, treesY + 74);
    treesLineLeftTwoC.setEndpoint(treesX - 30, treesY + 44);
    treesRectOneC.setPosition(treesX, treesY);
    treesRectTwoC.setPosition(treesX +5, treesY);
    treeCircleC.setPosition(treesX, treesY);
    treeArcC.setPosition(treesX +5, treesY);
    treeCircleLeftC.setPosition(treesX - 30, treesY +40);
    treeArcLeftC.setPosition(treesX - 30, treesY + 40);
    treeCircleRightC.setPosition(treesX + 40, treesY +20);
    treeArcRightC.setPosition(treesX + 40, treesY +20);
        
    }
    
    //D
    treesLineRightOneD.move(-1, 0);
    treesLineRightTwoD.move(-1, 0);
    treesLineLeftOneD.move(-1, 0);
    treesLineLeftTwoD.move(-1, 0);
    treesRectOneD.move(-1, 0);
    treesRectTwoD.move(-1, 0);
    treeCircleD.move(-1, 0);
    treeArcD.move(-1, 0);
    treeCircleLeftD.move(-1, 0);
    treeArcLeftD.move(-1, 0);
    treeCircleRightD.move(-1, 0);
    treeArcRightD.move(-1, 0);
    
    
    if(treeCircleD.getX() <-60){
       treesXD=getWidth()+60;
    treesLineRightOneD.setPosition(treesX +5, treesY + 50);
    treesLineRightOneD.setEndpoint(treesX +40, treesY + 20);
    treesLineRightTwoD.setPosition(treesX +5, treesY + 54);
    treesLineRightTwoD.setEndpoint(treesX +40, treesY + 24);
    treesLineLeftOneD.setPosition(treesX +5, treesY + 70);
    treesLineLeftOneD.setEndpoint(treesX - 30, treesY + 40);
    treesLineLeftTwoD.setPosition(treesX +5, treesY + 74);
    treesLineLeftTwoD.setEndpoint(treesX - 30, treesY + 44);
    treesRectOneD.setPosition(treesX, treesY);
    treesRectTwoD.setPosition(treesX +5, treesY);
    treeCircleD.setPosition(treesX, treesY);
    treeArcD.setPosition(treesX +5, treesY);
    treeCircleLeftD.setPosition(treesX - 30, treesY +40);
    treeArcLeftD.setPosition(treesX - 30, treesY + 40);
    treeCircleRightD.setPosition(treesX + 40, treesY +20);
    treeArcRightD.setPosition(treesX + 40, treesY +20);
        
    }
    
}
function bigTreesMove(){
    rectbigTreesOne.move(-1, 0);
    rectbigTreesTwo.move(-1, 0);
    rectbigTreesThree.move(-1, 0);
    bigTreesArcRightOne.move(-1, 0);
    bigTreesArcRightTwo.move(-1, 0);
    bigTreesArcLeftOne.move(-1, 0);
    bigTreesArcLeftTwo.move(-1, 0);
    rectbigTreesFour.move(-1, 0);
    
    if(bigTreesArcRightOne.getX() <-60){
       bigTreesX=getWidth()+40;
    rectbigTreesOne.setPosition(bigTreesX + 10, 150);
    rectbigTreesTwo.setPosition(bigTreesX + 10, 150);
    rectbigTreesThree.setPosition(bigTreesX - 10, 150);
    bigTreesArcRightOne.setPosition(bigTreesX +20, 150);
    bigTreesArcRightTwo.setPosition(bigTreesX +20, 320);
    bigTreesArcLeftOne.setPosition(bigTreesX +20, 150);
    bigTreesArcLeftTwo.setPosition(bigTreesX +20, 320);
    rectbigTreesFour.setPosition(bigTreesX -10, 150);
        
    }
    //B
    rectbigTreesOneB.move(-1, 0);
    rectbigTreesTwoB.move(-1, 0);
    rectbigTreesThreeB.move(-1, 0);
    bigTreesArcRightOneB.move(-1, 0);
    bigTreesArcRightTwoB.move(-1, 0);
    bigTreesArcLeftOneB.move(-1, 0);
    bigTreesArcLeftTwoB.move(-1, 0);
    rectbigTreesFourB.move(-1, 0);
    
    if(bigTreesArcRightOneB.getX() <-60){
       bigTreesXB=getWidth()+40;
    rectbigTreesOneB.setPosition(bigTreesXB + 10, 150);
    rectbigTreesTwoB.setPosition(bigTreesXB + 10, 150);
    rectbigTreesThreeB.setPosition(bigTreesXB - 10, 150);
    bigTreesArcRightOneB.setPosition(bigTreesXB +20, 150);
    bigTreesArcRightTwoB.setPosition(bigTreesXB +20, 320);
    bigTreesArcLeftOneB.setPosition(bigTreesXB +20, 150);
    bigTreesArcLeftTwoB.setPosition(bigTreesXB +20, 320);
    rectbigTreesFourB.setPosition(bigTreesXB -10, 150);
        
    }
}
function bushMove(){
    bushArcOne.move(-1, 0);
    bushArcTwo.move(-1, 0);
    bushArcThree.move(-1, 0);
    bushArcFour.move(-1, 0);
    
    if(bushArcOne.getX() <-60){
       bushX=getWidth()+150;
    bushArcOne.setPosition(bushX, getHeight() - 50);
    bushArcTwo.setPosition(bushX +4 , getHeight() - 50);
    bushArcThree.setPosition(bushX -45, getHeight() - 50);
    bushArcFour.setPosition(bushX-49 , getHeight() - 50);
        
        
    }
    //B
    bushArcOneB.move(-1, 0);
    bushArcTwoB.move(-1, 0);
    bushArcThreeB.move(-1, 0);
    bushArcFourB.move(-1, 0);
    
    if(bushArcOneB.getX() <-60){
       bushXB=getWidth()+170;
    bushArcOneB.setPosition(bushX, getHeight() - 50);
    bushArcTwoB.setPosition(bushX +4 , getHeight() - 50);
    bushArcThreeB.setPosition(bushX -45, getHeight() - 50);
    bushArcFourB.setPosition(bushX-49 , getHeight() - 50);
        
    }
}
function legsMove(){
    if(starting){
    legLeft.move(0, legLeftdy);
    starting= !starting;
    if(legLeft.getY() <= 440){
        legLeftdy = - legLeftdy;
    }
    if(legLeft.getY() >= 447){
        legLeftdy = - legLeftdy;    
        }
    }else{
    legRight.move(0, legRightdy);
    starting= !starting;
    if(legRight.getY() <= 440){
        legRightdy = - legRightdy;
    }
    if(legRight.getY() >= 447){
        legRightdy = - legRightdy;    
        }
    }
    
         
}
//enemy
function enemyshadow(){
    enemyshadowOne = new Oval(40, 5);
    enemyshadowOne.setPosition(enemyshadowX,460);
    enemyshadowOne.setColor(ovalColor);
    add(enemyshadowOne);
    
    enemyshadowTwo = new Oval(40, 5);
    enemyshadowTwo.setPosition(enemyshadowX + 100,460);
    enemyshadowTwo.setColor(ovalColor);
    add(enemyshadowTwo);
    
    enemyshadowOneB = new Oval(40, 5);
    enemyshadowOneB.setPosition(enemyshadowX+200,460);
    enemyshadowOneB.setColor(ovalColor);
    add(enemyshadowOneB);
    
    enemyshadowTwoB = new Oval(40, 5);
    enemyshadowTwoB.setPosition(enemyshadowX + 200,460);
    enemyshadowTwoB.setColor(ovalColor);
    add(enemyshadowTwoB);
   
}
function enemyshadowMove(){
    enemyshadowOne.move(- k, 0);
    enemyshadowTwo.move(- 3, 0);
    if(score >=10){
    enemyshadowOne.move(- 4, 0);
    }
    if(score >=25){
    enemyshadowOneB.move(- 4, 0);
    }
    if(score >=50){
    enemyshadowTwo.move(- 5, 0);
    }
    if(score >= 80){
    enemyshadowOne.move(- 4, 0);    
    }
    if(score >= 150){
     enemyshadowTwoB.move(- 6, 0);
    }
    if(score >= 200){
    enemyshadowOneB.move(- 5, 0);
    }
    if(score >= 300){
    enemyshadowTwoB.move(- 6, 0);
    }
    if(score >= 400){
    enemyshadowOneB.move(- 7, 0);
    }
    if(enemyshadowOne.getX()<= 102 && enemyshadowOne.getX()>= 99){
        lives--;
        enemyshadowOne.setPosition(getWidth()+100,460);
    }
    if(enemyshadowTwo.getX()<= 102 && enemyshadowTwo.getX()>= 99 ){
        lives--;
        enemyshadowTwo.setPosition(getWidth()+100,460);
    }
    if(enemyshadowOneB.getX()<= 102 && enemyshadowOneB.getX()>= 99){
        lives--;
        enemyshadowOneB.setPosition(getWidth()+100,460);
    }
    if(enemyshadowTwoB.getX()<= 102 && enemyshadowTwoB.getX()>= 99 ){
        lives--;
        enemyshadowOneB.setPosition(getWidth()+100,460);
    }
    if(lives ==2){
        head.setColor(Color.black);
    }
    if(lives ==1){
        
        rectBody.setColor(Color.black);
    }
    if(lives ==0){
    remove(enemyCircle);
    remove(enemyOvalLeft);
    remove(enemyOvalRight);
    
    remove(enemyCircleB);
    remove(enemyOvalLeftB);
    remove(enemyOvalRightB);
    
    remove(enemyCircleC);
    remove(enemyOvalLeftC);
    remove(enemyOvalRightC);
    
    remove(enemyCircleD);
    remove(enemyOvalLeftD);
    remove(enemyOvalRightD);
    
    remove(scoreText);
    remove(livesText);
    remove(bulletCircle);
    
    circleBody.setColor(Color.black);
    displayMessage("You Lose :(");
    var msgscore = new Text("score: "+ score);
	msgscore.setPosition(getWidth()/2 - msgscore.getWidth()/2, 150);
	add(msgscore);
    }
    livesText.setText("lives: "+ lives);
}
function enemy(){
    enemyCircle = new Circle(20);
    enemyCircle.setPosition(600, 420);
    enemyCircle.setColor(legsColor);
    add(enemyCircle);
    
    enemyOvalLeft= new Oval(3,10);
    enemyOvalLeft.setPosition(585, 420);
    enemyOvalLeft.setColor(Color.black);
    add(enemyOvalLeft);
    
    enemyOvalRight= new Oval(3,10);
    enemyOvalRight.setPosition(590, 420);
    enemyOvalRight.setColor(Color.black);
    add(enemyOvalRight);
    //B
    enemyCircleB = new Circle(20);
    enemyCircleB.setPosition(600, 420);
    enemyCircleB.setColor(legsColor);
    add(enemyCircleB);
    
    enemyOvalLeftB= new Oval(3,10);
    enemyOvalLeftB.setPosition(585, 420);
    enemyOvalLeftB.setColor(Color.black);
    add(enemyOvalLeftB);
    
    enemyOvalRightB= new Oval(3,10);
    enemyOvalRightB.setPosition(590, 420);
    enemyOvalRightB.setColor(Color.black);
    add(enemyOvalRightB);
    //C
    enemyCircleC = new Circle(20);
    enemyCircleC.setPosition(600, 420);
    enemyCircleC.setColor(ovalColor);
    add(enemyCircleC);
    
    enemyOvalLeftC= new Oval(3,10);
    enemyOvalLeftC.setPosition(585, 420);
    enemyOvalLeftC.setColor(Color.white);
    add(enemyOvalLeftC);
    
    enemyOvalRightC= new Oval(3,10);
    enemyOvalRightC.setPosition(590, 420);
    enemyOvalRightC.setColor(Color.white);
    add(enemyOvalRightC);
    //D
    enemyCircleD = new Circle(20);
    enemyCircleD.setPosition(600, 420);
    enemyCircleD.setColor(colorHead);
    add(enemyCircleD);
    
    enemyOvalLeftD= new Oval(3,10);
    enemyOvalLeftD.setPosition(585, 420);
    enemyOvalLeftD.setColor(Color.white);
    add(enemyOvalLeftD);
    
    enemyOvalRightD= new Oval(3,10);
    enemyOvalRightD.setPosition(590, 420);
    enemyOvalRightD.setColor(Color.white);
    add(enemyOvalRightD);
}

function displayMessage(text){
	var msg = new Text(text);
	msg.setPosition(getWidth()/2 - msg.getWidth()/2, 200);
	add(msg);
}