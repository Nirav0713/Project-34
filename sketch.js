var  dog, happyDog, happyDog2, database, foodS, foodStock;

function preload()
{
  happyDog = loadImage("dogImg.pmg/images");
  happyDog2 = loadImage("dogImg1.png/images");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(happyDog,happyDog2);

}


function draw() {  
background(46,139,87)

  if(keyWentDowm(UP_ARROW)){
   writeStock(foodS);
   dog.addImaged(dogHappy2)
  }

  drawSprites();
  
  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+foodS,170,200); 
  textSize(13); 
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
   x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}