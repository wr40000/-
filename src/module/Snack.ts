class Snack{
    head : HTMLElement;
    bodies:HTMLCollection;
    element : HTMLElement;
    constructor() {
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = document.getElementById("snake")!.getElementsByTagName("div");
        this.element = document.getElementById("snake")!;
    };

    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    set X(value:number){
        if(this.X == value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error("蛇撞墻了")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft == value){
            console.log("蛇水平掉头了")
            if(value>this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

        this.moveBody();   //下面这三行代码顺序不能出错
        this.head.style.left = value + "px";
        this.checkHeadBody();//需要获取到最新的蛇头坐标，放在最下面
    }

    set Y(value:number){
        if(this.Y == value){
            return;
        }
        if(value < 0 || value > 290){
            throw new Error("蛇撞墻了")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop == value){
            console.log("蛇垂直放向掉头了")
            if(value>this.Y){
                value = this.X - 10;
            }else{
                value = this.Y + 10;
            }
        }

        this.moveBody();
        this.head.style.top = value + "px";
        this.checkHeadBody();
    }

    addbody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }

    moveBody(){
        for(let i=this.bodies.length-1;i>0;i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + "px";
            (this.bodies[i] as HTMLElement).style.top = Y + "px";
        }
    }

    checkHeadBody(){
        for(let i = 1;i<this.bodies.length;i++){
            if((this.bodies[i] as HTMLElement).offsetLeft == this.X &&
                (this.bodies[i] as HTMLElement).offsetTop == this.Y){
                throw new Error("撞到自己！Game over!")
            }
        }
    }

}

export default Snack;