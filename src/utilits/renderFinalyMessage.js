import morozImg from '../img/moroz.png'

export const renderFinalyMessage = (finalyMessage,container)=>{
    finalyMessage.className = 'finalyMessage'
    const headingLast = document.createElement('h3')
    headingLast.textContent = 'Письмо успешно отправлено Деду Морозу'

    const imageMoroz = document.createElement('img')
    imageMoroz.src = morozImg

    finalyMessage.append(headingLast)
    container.append(finalyMessage,imageMoroz)

}