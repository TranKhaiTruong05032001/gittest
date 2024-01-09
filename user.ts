import Manage1 from "./manage";
class User{
    // readonly position: number;
    // readonly weight:number;
    // constructor(position:number, weight:number) {
    //     this.position= position;
    //     this.weight=weight;
    // }
    callElevator(position:number,direction:[string,number], typeElevator:string):void{
        Manage1.callElevator(position,direction,typeElevator); 
    }
    notice(position:number[],state:string[]):void{
        for (let i=0; i<position.length;i++){
            console.log('E'+i+': '+ position[i] + '   '+ state[i]);
        } 
    }
}
let aaaa= new User;
let user1 = new User();
export default user1;
user1.callElevator(10,['goup',1],'normal');
setTimeout(() => {
    user1.callElevator(17,['godown',-1],'normal');   
}, 3000);
// setTimeout(() => {
//     user1.callElevator(12,['goup',1],'vip');
// }, 2000);
// user1.callElevator(12,['godown',-1],'vip');
setTimeout(() => {
    user1.callElevator(10,['godown',-1],'normal')
}, 6000);
//jdjffhfekssjf