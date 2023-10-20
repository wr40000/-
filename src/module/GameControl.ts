import Snack from "./Snack";
import Food from "./Food";
import ScorePanle from "./ScorePanle";
import snack from "./Snack";

class GameControl{
    Snack:Snack;
    Food:Food;
    ScorePanle:ScorePanle;
    direction:string="";
    isLive = true;
    constructor() {
        this.Food = new Food();
        this.Snack = new Snack();
        this.ScorePanle = new ScorePanle();
        this.init()
    }

    init(){
        document.addEventListener("keydown",this.keydownHandler.bind(this))
        this.run();
    }

    keydownHandler(event:KeyboardEvent){
        // console.log(event.key)
        this.direction = event.key;
    }

    checkEat(X:number,Y:number){
        if(X == this.Food.X && Y == this.Food.Y){
            this.Snack.addbody();
            this.Food.change();
            this.ScorePanle.addscore();
        }
    }

    run(){
        let X = this.Snack.X;
        let Y = this.Snack.Y;
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y-=10;
                break;
            case "ArrowDown":
            case "Down":
                Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                X-=10;
                break;
            case "ArrowRight":
            case "Right":
                X+=10;
                break;
        }

        this.checkEat(X,Y);

        try{
            this.Snack.X = X;
            this.Snack.Y = Y;

        }catch(e:any){
            // console.log(e);
            alert(e.message + "Game over!!!");
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this),200-(this.ScorePanle.level-1)*30)
    }



}

export default GameControl;