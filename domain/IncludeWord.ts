interface type{
    t : String
    p : String
}

export function solution(t : type['t'], p : type['p']) : number{
    let answer : number = 0;
    let index : number = 0;
    let tempStr : String = '';
    for(let i =0; i < t.length; i++){
        tempStr += t[i];
        if(tempStr.length === p.length){
            
            if(+tempStr < +p){
                answer ++;
                i = index;
                index++;
                tempStr = '';
            }
        }       

    }
    return answer;
}