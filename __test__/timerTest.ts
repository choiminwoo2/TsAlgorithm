import { Timer } from "../domain/Timer";

test('타이머테스트', ()=>{
    //given
    const timer = new Timer(3);
    //when
    timer.timeTest()
    .then((time)=>{
        //then
        expect(time).toBe(0);
    })
})