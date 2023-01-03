import { solution } from "../domain/IncludeWord";

test('크기가 작은 부분문자열', () => {
    const result = solution('3141592','271')
    expect(result).toBe(2);
})