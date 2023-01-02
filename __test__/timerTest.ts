import { Timer } from "../domain/Timer";

test('타이머테스트', ()=>{
    const timer = new Timer(3);

    timer.timeTest()
    .then((time)=>{
        expect(time).toBe(0);
    })
})