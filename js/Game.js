class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", (data)=>{
        gameState = data.val()
        });
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })
    }

    start(){
        if (gameState===0){
            player = new Player()
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage(car1Img);
        car2 = createSprite(300,200);
        car2.addImage(car2Img);       
        car3 = createSprite(500,200);
        car3.addImage(car3Img);       
        car4 = createSprite(700,200);
        car4.addImage(car4Img);       
        cars=[car1, car2, car3, car4]
    }

    play(){
        form.hide();
     //   textSize(30);
     //   text("Game Start", 120, 100);
        Player.getPlayerInfo()

        if(allPlayers!==undefined){
      //      var display_position=130;

      background(groundImg)
      image(trackImg, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index=0;
            var x=175;
            var y;
            for(var plr in allPlayers){

                index=index+1;
                x=x+200;
                y=displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x
                cars[index-1].y = y
   
                if(index === player.index){
                    stroke(10);
                    strokeWeight(3);
                    fill("green");
                    ellipse(x, y, 80, 80);
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y
                }
            }
        }
                if(keyIsDown(UP_ARROW)&& player.index!==null){
                    player.distance+=10
                    player.update();
                }

                if(player.distance>=3860){
                    gameState=2;
                }
                drawSprites();
        
    }

    end(){
        console.log("GAME HAS ENDED");
    }
    
}