const title = document.querySelector('input')
const body = document.querySelector('textarea')
const btn = document.querySelector('form button')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (title.value && body.value) {
        let blog = {
            title: title.value,
            body: body.value
        }

        console.log(blog)
        title.value = ''
        body.value = ' '

    }
})