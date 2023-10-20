class ScorePanle{
    score = 0;
    level = 1;

    scoreEle : HTMLElement;
    levelEle : HTMLElement;

    MAX_LEVEL:number;
    UP_SCORE:number;
    constructor(MAX_LEVEL:number = 10,UP_SCORE:number = 2){
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.MAX_LEVEL = MAX_LEVEL;
        this.UP_SCORE = UP_SCORE;
    }

    addscore(){
        this.scoreEle.innerHTML =  ++this.score + "";
        if(this.score % this.UP_SCORE ==0){
            this.levelup();
        }
    }

    levelup(){
        if(this.level < this.MAX_LEVEL){
            this.levelEle.innerHTML =  ++this.level + "";
        }
    }
}

export default ScorePanle;

