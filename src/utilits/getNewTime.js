import moment from "moment";

export const getNewTime =()=>{
        var today = moment();
        var newYear = moment([2024, 0, 1]);
        const milliseconds = newYear.diff(today)
        const days = Math.floor(milliseconds/1000/60/60/24)
        const hours = Math.floor(milliseconds/1000/60/60)%24
        const minuts = Math.floor(milliseconds/1000/60)%60
        const seconds = Math.floor(milliseconds/1000)%60
    
        return `${days} Дней , ${hours} Часов, ${minuts} Минут и ${seconds} Секунд`
}