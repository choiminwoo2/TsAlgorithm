export class Timer{
    time : number

    constructor(time : number){
        this.time = time;
    }
    public setTime = (time: number) => {
        this.time = time;
    }
    public getTime = () =>{
        return this.time;
    }

    private startTimer = setInterval(()=>{
        this.time -= 1;
    }, 1000);

    private closeTimer = clearInterval(this.startTimer);

    public timeTest = () =>{
        return new Promise<number>((resolve, reject)=>{
            this.startTimer;
            if(this.time == 1){
                this.closeTimer;
                resolve(this.time);
            }

        });
    }

}