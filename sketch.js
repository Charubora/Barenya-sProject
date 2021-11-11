var bgimage, bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12, bar13, bar14,
bar15, bar16, bar17, bar18, bar19, bar20, bar21, bar22, bar23, bar24, bar25, bar26, bar27, bar28,
bar29, bar30, bar31, bar32, bar33, bar34, bar35, bar36, bar37, bar37, bar38, bar39, bar40;
var creeper, creeper2;
var bg;
var steve, steveIMG;
function preload(){
    bgimage= loadImage("bg_.jpg");
    //steveIMG= loadImage("steve_01.jpg");
  
  }
  
function setup() {
    createCanvas(windowWidth,windowHeight);
    //bg=createSprite(windowWidth,windowHeight)
    //bg.addImage(bgimage)
    bar1=createSprite(50, windowHeight/2-60, 10, windowHeight-60)
    bar2=createSprite(windowWidth/2, 5, windowWidth-90, 10)
    bar3=createSprite(windowWidth-50, windowHeight/2, 10, windowHeight)
    bar4=createSprite(windowWidth/2, windowHeight-5, windowWidth-90, 10)
    bar5= createSprite(windowWidth/2-70, windowHeight/2-20, 8, 70)
    bar6= createSprite(windowWidth/2-30, windowHeight/2-58, 88, 8)
    bar7= createSprite(windowWidth/2+10, windowHeight/2-20, 8, 70)
    bar8= createSprite(windowWidth/2-60, 243, 20, 8)
    bar9= createSprite(windowWidth/2-0, 243, 20, 8)
    bar10= createSprite(windowWidth/2-90, windowHeight/2-25, 40, 8)
    bar11= createSprite(windowWidth/2-110, windowHeight/2-30, 8, 180)
    //bar12= createSprite(windowWidth/2+30, windowHeight/2-25, 40, 8)
    bar13= createSprite(windowWidth/2+50, windowHeight/2-30, 8, 180)
    bar14= createSprite(windowWidth/2-30, windowHeight/2+56, 160, 8)
    bar15= createSprite(windowWidth/2-90, windowHeight/2-116, 40, 8)
    bar16= createSprite(windowWidth/2+30, windowHeight/2-116, 40, 8)
    //bar17= createSprite(windowWidth/2-70, 310, 8, 40)
    bar18= createSprite(windowWidth/2+5, 330, 200, 8)
    bar19= createSprite(windowWidth/2-161, 281, 8, 82)
    bar20= createSprite(windowWidth/2-93, 309, 8, 50)
    bar21= createSprite(windowWidth/2+180, 333 , 52, 8)
    //bar22= createSprite(windowWidth/2+78, windowHeight/2-30 , 51, 8)
    bar23= createSprite(windowWidth/2+152, windowHeight/2-35, 8, 280)
    bar24= createSprite(windowWidth/2-6, windowHeight/2-171, 318, 8)
    bar25= createSprite(windowWidth/2+30, windowHeight/2-145, 8, 55)
    bar26= createSprite(windowWidth/2-212, windowHeight/2-80, 8, 190)
    //bar27= createSprite(windowWidth/2-190, windowHeight/2-30 , 51, 8)
    bar28= createSprite(windowWidth/2-161, windowHeight/2-100, 8, 140)
    bar29= createSprite(windowWidth/2-190, windowHeight/2+12, 50, 8)
    bar30= createSprite(windowWidth/2-211, windowHeight/2+120, 8, 60)
    bar31= createSprite(windowWidth/2-30, windowHeight/2+150, 370, 8)
    bar32=createSprite(120, windowHeight/2+40, 10, 390)
    bar33= createSprite(windowWidth/2-251, windowHeight/2-155, 79, 8)
    //bar34= createSprite(windowWidth/2+250, windowHeight/2-116, 80, 8)
    bar35= createSprite(windowWidth/2+210, windowHeight/2+25, 8, 290)
    bar36= createSprite(windowWidth/2-190, windowHeight/2+86, 50, 8)
    bar37= createSprite(windowWidth/2+290, windowHeight/2-80, 8, 290)
    bar38= createSprite(windowWidth/2+290, windowHeight/2+200, 8, 100)
    //bar39= createSprite(windowWidth/2+151, windowHeight/2+200, 8, 100)
    bar40= createSprite(windowWidth/2-161, windowHeight/2+12, 8, 90)
    steve=createSprite(50, 463, 20, 20)
    bar1.shapeColor="red"
    bar13.shapeColor="red"
    bar2.shapeColor="red"
    bar3.shapeColor="red"
    bar4.shapeColor="red"
    bar5.shapeColor="red"
    bar6.shapeColor="red"
    bar7.shapeColor="red"
    bar8.shapeColor="red"
    bar9.shapeColor="red"
    bar10.shapeColor="red"
    bar11.shapeColor="red"
    //bar12.shapeColor="red"
    bar14.shapeColor="red"
    bar15.shapeColor="red"
    bar16.shapeColor="red"
    //bar17.shapeColor="red"
    bar18.shapeColor="red"
    bar19.shapeColor="red"
    bar20.shapeColor="red"
    bar21.shapeColor="red"
    //bar22.shapeColor="red"
    bar23.shapeColor="red"
    bar24.shapeColor="red"
    bar25.shapeColor="red"
    bar26.shapeColor="red"
    //bar27.shapeColor="red"
    bar28.shapeColor="red"
    bar29.shapeColor="red"
    bar30.shapeColor="red"
    bar31.shapeColor="red"
    bar32.shapeColor="red"
    bar33.shapeColor="red"
    //bar34.shapeColor="red"
    bar35.shapeColor="red"
    bar36.shapeColor="red"
    bar37.shapeColor="red"
    bar38.shapeColor="red"
    //bar39.shapeColor="red"
    bar40.shapeColor="red"

    
steve.setCollider("rectangle", 0,0, 580,130)
steve.debug=true;
spawnCreeper()

}
function draw() {
   
    background(bgimage)
    //camera.position.x=steve.x;
    //camera.position.y=steve.y;
    if(keyDown("UP_ARROW")){
      steve.y=steve.y-2;
    }
    if(keyDown("DOWN_ARROW")){
       steve.y=steve.y+2;
    }
    if(keyDown("LEFT_ARROW")){
      steve.x=steve.x-2;
    }
    if(keyDown("RIGHT_ARROW")){
      steve.x=steve.x+2;
    }
    
    if(steve.isTouching(creeper)){
        creeper.velocityX=1;
      }
   
    drawSprites();
   
    
  }
  
  function spawnCreeper(){
    creeper= createSprite(350, 500, 20, 20)
    creeper2= createSprite(650, 430, 20, 20)
    }