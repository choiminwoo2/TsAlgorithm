const merge = (firArr : Array<number>, secArr : Array<number>) =>{
    let result : Array<number>= [];
    let i = 0;
    let j = 0;
    //두 배열을 비교하여 순차적으로 새 배열에 push.
    while( i < firArr.length && j < secArr.length){
        if(secArr[j] > firArr[i]){
            result.push(firArr[i]);
            i++;
        }else{
            result.push(secArr[j]);
            j++;
        }
    }
    // j가 i보다 작은 경우 배열을 타지 못하면 firArr배열이 루프를 타지 못하여 처리해야함.
    while(i < firArr.length){
        result.push(firArr[i]);
        i++;
    }
    //  i가 j보다 작은 경우 배열을 타지 못하면  secArr 배열이 루프를 타지 못하여 처리해야함.
    while(j < secArr.length){
        result.push(secArr[j]);
        j++;
    }
    return result;
}

// 재귀 호출을 사용하여 배열이 1이하까지 줄여질 때 까지 반복하고 새 배열을 만들어준다.
export const mergeSort = (arr : Array<number>) : Array<number>=>{
    if(arr.length <= 1) return arr;
    let middlePoint =  Math.floor(arr.length / 2);
    let leftArr = mergeSort(arr.slice(0, middlePoint));
    let rightArr = mergeSort(arr.slice(middlePoint));
    return merge(leftArr, rightArr);

}