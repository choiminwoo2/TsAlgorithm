export class Dollar{

    amount : number;

    constructor(amount : number){
        this.amount = amount;
    }

    times(mutiplier : number){
        this.amount *= mutiplier;
    }

    
}