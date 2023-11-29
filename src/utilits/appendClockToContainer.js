import {getNewTime} from './getNewTime'

export const appendClockToContainer =(clock,container)=>{
    clock.className = 'clock'  
    clock.textContent = getNewTime()
    container.append(clock)
    setInterval(()=>{
        clock.textContent = getNewTime()
    },1000)
     
}