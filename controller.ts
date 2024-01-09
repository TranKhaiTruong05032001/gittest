import { disconnect } from "process";
import manage1 from "./manage";
    class Controller{
    readonly typeElevator:string;
    readonly maxFloor:number;
    readonly maxWeight:number;
    public banFloor:number[];
    readonly id:number;
    public position:number;
    public state:string;
    private floorNeedMove:number[]=[];
    private stateDoor:string='close';
    public direction:string='goup';
    constructor (typeElevator:string, maxFloor:number,maxWeight:number,banFloor:number[],id:number,position:number,state:string){
        this.id=id;
        this.banFloor=banFloor;
        this.maxFloor=maxFloor;
        this.maxWeight=maxWeight;
        this.typeElevator=typeElevator;
        this.position=position;
        this.state=state;
    }
    // addMove(floor:number) :number[] {
    //     let a:number[];
    //     // a=this.addMove()
    //     // return addMove.push(floor)
    // }
  private  elevatorMove(direction:[string,number]):void  {
        if (this.stateDoor=='close'){
            setTimeout(() => {
                if (direction[1]==1){
                    this.state='goup';
                }else this.state='godown';
                this.position=this.position+direction[1]; 
                console.log('floor:' ,this.floorNeedMove);
                manage1.updateInforElevator(this.id,this.state,this.position);
                if (this.floorNeedMove[0]==this.position){
                    
                    this.floorNeedMove.shift();
                    this.stop();
                    if (this.direction=='godown'){
                        direction=['godown',-1];
                    } else {
                        direction=['goup',1];
                    }
                    this.openDoor(direction);

                    }
                    if (this.floorNeedMove.length==0){
                        this.state='available';
                        manage1.updateInforElevator(this.id,this.state,this.position);
                    } else {
                    
                        this.elevatorMove(direction);
                    }  
             }, 2000);  
        }
    }
  addFloorNeedMove(position:number, direction:[string,number]): void{
    if ((Math.abs(position-this.position)/(position-this.position)==direction[1])&& (this.floorNeedMove.indexOf(position)==-1)){ 
        console.log('bug'+position )   
    this.floorNeedMove.push(position);
    }
        if(direction[1]==1){
            this.floorNeedMove.sort(function(a,b){return a-b})
        }else {
            this.floorNeedMove.sort(function(a,b){return b-a})
        }
        if ( this.state=='available'){
        this.elevatorMove(direction); 
        }
    }
    stop(): void {
        console.log('elevator'+this.id+'stop');
    }
 private   openDoor (direction:[string,number]):void{
        console.log('the door' +this.id + ' is openned');
        this.stateDoor='open';
        setTimeout(() => {
            this.closeDoor(direction);
        }, 5000);

    }
  private  closeDoor(direction:[string,number]):void{
        console.log('the door' + this.id+'is closed');
        this.stateDoor='close';
        if (this.state==direction[0]){
        this.elevatorMove(direction);
        }
    }    
    private checkFloor(floor:number) : boolean{
        if ((floor<this.maxFloor)&&(this.banFloor.indexOf(floor)==-1)){
            return true;
        }else return false;
    }
    public chooseFloor(floor:number[]):void{
        let direction:[string,number];
        for (let i in floor){
            if (this.checkFloor(floor[i])==true){
                if (this.state=='godown'){
                    direction=[this.state,-1];
                } else direction=[this.state,1]
                this.addFloorNeedMove(floor[i],direction);
            }
        }
    }
}
export { Controller};