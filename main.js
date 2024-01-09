"use strict";
// abstract class Elevator {
//     readonly name : string;
//     public positon:number;
//     readonly maxWeight:number;
//     readonly maxFloor: number;
//     public state : string;
//     public banFloor: number[];
//    protected constructor(name:string,positon:number, maxWeight:number, maxFloor:number,state:string, banFloor:number[]) {
//         this.name=name;
//         this.positon=positon;
//         this.maxFloor=maxFloor;
//         this.maxWeight=maxWeight;
//         this.state=state;
//         this.banFloor=banFloor;
//     }
//     chooseFloor( floor:number) : boolean {
//         if (floor<=this.maxFloor){
//             return true;
//         } else return false;
//     }
//     overweight(weight:number): boolean{
//         if (weight<=this.maxWeight){
//             return true;
//         } else return false;
//     }
//     addBanFloor(floor:number[]) : string {
//         var isban:boolean;
//         var res:string;
//       for (var i=0; i<floor.length;i++){
//         isban=true;
//         if ((floor[i]>=1) &&(floor[i]<=this.maxFloor)){
//             for (var j in this.banFloor){
//                 if(floor[i]==this.banFloor[j]){
//                     isban=false;
//                     break;
//                 }
//             }
//             if (isban==true){
//                 this.banFloor=this.banFloor.concat([floor[i]]);
//             }
//         } else{
//             res= 'du lieu vao phai be hon ' + this.maxFloor as string;
//             return res;
//         }
//       }
//             return 'success'
//     }
//     removeBanFloor(floor:number[]): string{
//         let isremove:boolean;
//         let res:string;
//         for (let i in floor)
//         {
//             this.banFloor= this.banFloor.filter(function(a){
//                 return a!==floor[i];
//             });
//         }
//             return 'success';
//     }
//     setState(state:string){
//         this.state=state;
//     }
//     setPosition(direction:string):number {
//         if (direction=='godown'){
//             this.state='godown';
//             setTimeout(() => {
//                this.positon=this.positon-1;
//             }, 1000);
//               return this.positon; 
//         } else if (direction=='goup')
//         {
//             this.state='goup';
//            setTimeout(() => {
//              this.positon=this.positon+1;
//            }, 1000);
//             return this.positon;
//         } else{
//             return this.positon;
//         }
//     }
// }
// abstract class User {
//     readonly position:number;
//     readonly weight :number;
//     protected constructor(position:number, weight:number){
//         this.position=position;
//         this.weight=weight
//     }
// }
// class ElevatorVip extends Elevator{
// constructor (
//     position:number,
//     state:string,
//     banFloor:number[]
// ){
//     super('vip',position,1500,40,state,banFloor);
// }
// }
// class ElevatorNormal extends Elevator{
//     constructor (
//         position:number,
//         state:string,
//         banFloor:number[]
//     ){
//         super('normal',position,1000,35,state,banFloor);
//     }
//     }
// let elevator1 = new ElevatorNormal(1,'available',[1,2,3]);
// let elevator2 = new ElevatorVip(1,'available',[1,2,3]);
// let elevatorNumber=2;
// console.log(elevator1.chooseFloor(12));
// console.log(elevator1.overweight(900));
// console.log(elevator1.banFloor);
// //elevator1.addBanFloor([4,5]);
// console.log(elevator1.addBanFloor([4,51]));
// console.log(elevator1.removeBanFloor([1,2]));
// console.log(elevator1.banFloor);
// // console.log(elevator1.removeBanFloor);
// // interface useElevator{
// //     callElevator(position:string, typeElevator:string, direction: string): bolean{
// //         if (typeElevator==='nomal'){
// //             if (elevator1.state==='available'){
// //                 ele
// //             }
// //         }
// //     }
// // }
