const pivot = (arr : Array<number>, start = 0, end = arr.length) : number=>{
    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);

    return swapIdx;
}

const swap = (arr : Array<number>, i : number, j : number) : void => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}