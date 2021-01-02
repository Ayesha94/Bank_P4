function preload()
{
    thiefImg=loadImage("unnamed.png")
}
function setup()
{
    createCanvas(400, 400)
    thief=createSprite(width-40, height-70)
    thief.addImage(thiefImg)
    thief.scale=0.2
    //thief.debug=true
    thief.setCollider("rectangle",0,0,300,500)

    edges=createEdgeSprites();
    laser1=createSprite(300, 30, 200, 5)
    laser1.shapeColor="red"
    laser1.velocityY=3
    laser1.velocityX=3
    laser2=createSprite(100, 370, 200, 5)
    laser2.shapeColor="red"
    laser2.velocityY=-3
    laser2.velocityX=3    
}
function draw()
{
    background(0);
    drawSprites();
    shape(10,0,0,10,10,20, 20, 10)
    laser1.bounceOff(edges)
    laser2.bounceOff(edges)
    thief.velocityX=0;
    thief.velocityY=0
    if(keyDown("left"))
        thief.velocityX=-2

    if(keyDown("right"))
        thief.velocityX=2
    
    if(keyDown("up"))
        thief.velocityY=-2

    if(keyDown("down"))
        thief.velocityY=2

    if(thief.isTouching(laser1)||thief.isTouching(laser2))
    {
        thief.velocityX=0;
        thief.velocityY=0;
        laser1.velocityX=0
        laser1.velocityY=0
        laser2.velocityX=0
        laser2.velocityY=0

        fill("red");
        textSize(50)
        text("Thief is caught", 50, height/2)
    }

    
    
}
