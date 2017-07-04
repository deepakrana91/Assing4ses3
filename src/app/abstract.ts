 
//abstract class and its member functions definition
export abstract class Department{


constructor(public name:string){

}

printName() {
    console.log(`Department name is ${this.name}`);
}

abstract printMeeting():void;

}

//first class that extends abstract class 
export class AccountingDepartment extends Department {

    constructor(){

    super("AccountingDepartment");

    }

    printMeeting():void {

        console.log("The  Accounting department meeting schedule on every monday");
    }
}

//Second class that extends abstract class 
export class ComputerScienceDepartment extends Department {

    constructor(){

    super("ComputerScienceDepartment");

    }

    printMeeting():void {

        console.log("The  COmputer Science department meeting schedule on every saturday");
    }
}