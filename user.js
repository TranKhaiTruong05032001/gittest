"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manage_1 = __importDefault(require("./manage"));
class User {
    // readonly position: number;
    // readonly weight:number;
    // constructor(position:number, weight:number) {
    //     this.position= position;
    //     this.weight=weight;
    // }
    callElevator(position, direction, typeElevator) {
        manage_1.default.callElevator(position, direction, typeElevator);
    }
    notice(position, state) {
        for (let i = 0; i < position.length; i++) {
            console.log('E' + i + ': ' + position[i] + '   ' + state[i]);
        }
    }
}
let user1 = new User();
exports.default = user1;
user1.callElevator(10, ['goup', 1], 'normal');
setTimeout(() => {
    user1.callElevator(17, ['godown', -1], 'normal');
}, 3000);
// setTimeout(() => {
//     user1.callElevator(12,['goup',1],'vip');
// }, 2000);
// user1.callElevator(12,['godown',-1],'vip');
setTimeout(() => {
    user1.callElevator(10, ['godown', -1], 'normal');
}, 6000);
