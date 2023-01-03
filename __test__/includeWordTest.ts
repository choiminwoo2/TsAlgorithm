import { solution } from "../domain/IncludeWord";

test('크기가 작은 부분문자열', () => {
    const result = solution('211','40')
    expect(result).toBe(2);
})