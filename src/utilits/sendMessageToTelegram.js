export const sendMessageToTelegram = async(userInfo) =>{
    const URL = `https://api.telegram.org/bot6911996220:AAGiLCjSlZTETTLxNY2f8cf5WikQsE3w_3M/sendMessage?chat_id=-4057129375`
    const params = new URLSearchParams();
    params.append('text', 
    `Имя: ${userInfo.name}
    Телефон: ${userInfo.phone},
    Письмо: ${userInfo.post}
    `)

    try {
        // https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew1/sendMessage?chat_id=123456&text=Привет, как дела? &text=${userInfo.post} ,Телефон: ${userInfo.phone} Имя ${userInfo.name}
        
        const response = await fetch(URL,{
            mode: 'no-cors',
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: params,   
        })
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
   
}