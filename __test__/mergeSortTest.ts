import { mergeSort } from "../domain/mergeSort";

test('숫자배열병합테스트',() =>{
    //given
    const arr = [1,8,4,2,7,9,10];
    //when
    const resultArr = mergeSort(arr);

    //then
    expect(resultArr).toEqual([1,2,4,7,8,9,10])
})