
import { disconnect } from 'process';
import {Controller} from './controller.js';

 function numberDirection(direction:string):number{
    if (direction=='godown'){
        return 1;
    } else {
        return -1;
    }
}
import user1 from './user.js';
class Manage{
    public typeElevator:string[];
    public inforPosition:number[];
    public inforState: string[];
    constructor (typeElevator:string[],inforPosition:number[],inforState:string[]){
        this.typeElevator= typeElevator;
        this.inforPosition=inforPosition;
        this.inforState=inforState;
    }
    updateInforElevator( id:number,state:string, position:number): void{
            this.inforPosition[id]=position;
            this.inforState[id]=state;
            user1.notice(this.inforPosition,this.inforState);

    } 
    callElevator(position:number, direction:[string,number], typeElevator:string):void {
       let n= this.typeElevator.length;
       let kq:number=100;
       let id:number=-1;
       for (let i=0; i<=n-1;i++){
        if (typeElevator==this.typeElevator[i])
        {
        if ((this.inforState[i]=='available') ||(this.inforState[i]==direction[0] && (Math.abs(position-this.inforPosition[i])/(position-this.inforPosition[i])==direction[1]))){
            if (Math.abs(this.inforPosition[i]-position)<kq){
                kq=Math.abs(this.inforPosition[i]-position);
                id=i;
            }
        }
       }
    }
       if (id!=-1){
        console.log(id);
        if ((this.inforState[id]=='available')&& Math.abs(position-this.inforPosition[id])/(position-this.inforPosition[id])==-direction[1] )
        {
            switch (id){
                case 0:
                    controller0.addFloorNeedMove(position,[direction[0],-direction[1]]);
                    controller0.direction=direction[0];
                    break;
                case 1:
                    controller1.addFloorNeedMove(position,[direction[0],-direction[1]]);
                    controller1.direction=direction[0];
                case 2:
                    controller2.addFloorNeedMove(position,[direction[0],-direction[1]]);
                    controller2.direction=direction[0];
                case 3:
                    controller3.addFloorNeedMove(position,[direction[0],-direction[1]]);
                    controller3.direction=direction[0];
            }
        } else{
        switch (id){
            case 0:
                controller0.addFloorNeedMove(position,direction);
                controller0.direction=direction[0];
                break;
            case 1:
                controller1.addFloorNeedMove(position,direction);
                controller0.direction=direction[0];
            case 2:
                controller2.addFloorNeedMove(position,direction);
                controller0.direction=direction[0];
            case 3:
                controller3.addFloorNeedMove(position,direction);
                controller0.direction=direction[0];
        }
       }
    }
    }
    }
   let manage1= new Manage(['normal','vip','vip','normal'],[1,2,3,4],['available','available','available','available']); 
   let controller0 = new Controller('normal',35,1000,[1,2,3],0,1,'available',);

let controller1 =new Controller('vip',40,1500,[1,2,3],1,2,'available',);
let controller2 =new Controller('vip',40,1500,[1,2,3],2,3,'available',);
let controller3 = new Controller('normal',35,1000,[],3,4,'available',);
export default manage1;

setTimeout(() => {
    controller3.chooseFloor([15,17,19]);
}, 5000);

setTimeout(() => {
   controller0.chooseFloor([10]) 
}, 20000);