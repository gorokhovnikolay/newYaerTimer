export const appendTextareaToContainer =(postForm,container)=>{
    const textarea = document.createElement('textarea')
    textarea.rows = 8
    textarea.name = 'postText'
    textarea.placeholder = `Дорогой Дедушка Мороз!!!
Меня зовут ...`
    const submitPost = document.createElement('input')
    submitPost.type = 'submit'
    submitPost.name = 'submit-post'
    submitPost.textContent = 'Отправить письмо'
    postForm.append(textarea,submitPost)
    container.append(postForm)
}