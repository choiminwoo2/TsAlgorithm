const merge = (firArr : Array<number>, secArr : Array<number>) =>{
    let result : Array<number>= [];
    let i = 0;
    let j = 0;
    while( i < firArr.length && j < secArr.length){
        if(secArr[j] > firArr[i]){
            result.push(firArr[i]);
            i++;
        }else{
            result.push(secArr[j]);
            j++;
        }
    }
    while(i < firArr.length){
        result.push(firArr[i]);
        i++;
    }
    while(j < secArr.length){
        result.push(secArr[j]);
        j++;
    }
    return result;
}

export const mergeSort = (arr : Array<number>) : Array<number>=>{
    if(arr.length <= 1) return arr;
    let middlePoint =  Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, middlePoint));
    let rightArr = mergeSort(arr.slice(middlePoint));
    return merge(leftArr, rightArr);

}