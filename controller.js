"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const manage_1 = __importDefault(require("./manage"));
class Controller {
    typeElevator;
    maxFloor;
    maxWeight;
    banFloor;
    id;
    position;
    state;
    floorNeedMove = [];
    stateDoor = 'close';
    direction = 'goup';
    constructor(typeElevator, maxFloor, maxWeight, banFloor, id, position, state) {
        this.id = id;
        this.banFloor = banFloor;
        this.maxFloor = maxFloor;
        this.maxWeight = maxWeight;
        this.typeElevator = typeElevator;
        this.position = position;
        this.state = state;
    }
    // addMove(floor:number) :number[] {
    //     let a:number[];
    //     // a=this.addMove()
    //     // return addMove.push(floor)
    // }
    elevatorMove(direction) {
        if (this.stateDoor == 'close') {
            setTimeout(() => {
                if (direction[1] == 1) {
                    this.state = 'goup';
                }
                else
                    this.state = 'godown';
                this.position = this.position + direction[1];
                console.log('floor:', this.floorNeedMove);
                manage_1.default.updateInforElevator(this.id, this.state, this.position);
                if (this.floorNeedMove[0] == this.position) {
                    this.floorNeedMove.shift();
                    this.stop();
                    if (this.direction == 'godown') {
                        direction = ['godown', -1];
                    }
                    else {
                        direction = ['goup', 1];
                    }
                    this.openDoor(direction);
                }
                if (this.floorNeedMove.length == 0) {
                    this.state = 'available';
                    manage_1.default.updateInforElevator(this.id, this.state, this.position);
                }
                else {
                    this.elevatorMove(direction);
                }
            }, 2000);
        }
    }
    addFloorNeedMove(position, direction) {
        if ((Math.abs(position - this.position) / (position - this.position) == direction[1]) && (this.floorNeedMove.indexOf(position) == -1)) {
            console.log('bug' + position);
            this.floorNeedMove.push(position);
        }
        if (direction[1] == 1) {
            this.floorNeedMove.sort(function (a, b) { return a - b; });
        }
        else {
            this.floorNeedMove.sort(function (a, b) { return b - a; });
        }
        if (this.state == 'available') {
            this.elevatorMove(direction);
        }
    }
    stop() {
        console.log('elevator' + this.id + 'stop');
    }
    openDoor(direction) {
        console.log('the door' + this.id + ' is openned');
        this.stateDoor = 'open';
        setTimeout(() => {
            this.closeDoor(direction);
        }, 5000);
    }
    closeDoor(direction) {
        console.log('the door' + this.id + 'is closed');
        this.stateDoor = 'close';
        if (this.state == direction[0]) {
            this.elevatorMove(direction);
        }
    }
    checkFloor(floor) {
        if ((floor < this.maxFloor) && (this.banFloor.indexOf(floor) == -1)) {
            return true;
        }
        else
            return false;
    }
    chooseFloor(floor) {
        let direction;
        for (let i in floor) {
            if (this.checkFloor(floor[i]) == true) {
                if (this.state == 'godown') {
                    direction = [this.state, -1];
                }
                else
                    direction = [this.state, 1];
                this.addFloorNeedMove(floor[i], direction);
            }
        }
    }
}
exports.Controller = Controller;
