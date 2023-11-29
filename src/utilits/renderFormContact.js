export const renderFormContact =(contactForm,container)=>{
    contactForm.className = 'form-contact'
    const divFirstName = document.createElement('div')
    const labelFirstName = document.createElement('label')
    labelFirstName.htmlFor = 'firstName'
    labelFirstName.textContent = 'Введите ваше имя'
    const inputFirstName = document.createElement('input')
    inputFirstName.name = 'firstName'
    inputFirstName.type = 'text'
    inputFirstName.id = 'firstName'
    divFirstName.append(labelFirstName,inputFirstName)

    const divLastName = document.createElement('div')
    const labelLastName = document.createElement('label')
    labelLastName.htmlFor = 'phone'
    labelLastName.textContent = 'Введите ваш номер'
    const inputLastName = document.createElement('input')
    inputLastName.name = 'phone'
    inputLastName.type = 'phone'
    inputLastName.id = 'phone'
    divLastName.append(labelLastName,inputLastName)

    const submitContact = document.createElement('input')
    submitContact.type = 'submit'
    submitContact.name = 'submit-contact'
    submitContact.textContent = 'Отправить'

    contactForm.append(divFirstName,divLastName,submitContact)
    container.append(contactForm)
}