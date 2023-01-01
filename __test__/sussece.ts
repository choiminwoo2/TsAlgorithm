import { Dollar } from "../domain/Dollar";

test('곱셈 테스트', ()=>{
    const dollar = new Dollar(10);

    dollar.times(2);

    expect(dollar.amount).toBe(20);
})