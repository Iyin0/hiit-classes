// const container = document.querySelector('div.password')
// const container = document.querySelectorAll('div.password')
// const queryContainer = document.querySelectorAll('div')

// const tagContainer = document.getElementsByTagName('div')


// console.log(container)
// console.log(tagContainer)

// queryContainer.forEach(element => {
//     console.log(element)
// })

// tagContainer.forEach(element => {
//     console.log(element)
// })


const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const emailError = document.querySelector('.err-email')
const pwdError = document.querySelector('.err-pwd')

const login = () => {

    let user = {
        email: '',
        password: ''
    }

    console.log(user)

    allInputs.forEach(element => {
        if (element.type === 'email') {
            if (element.value.includes("@") && element.value.includes(".")) {
                user.email = element.value
                emailError.innerText = ''
            }
            else if (element.value === '') {
                emailError.innerText = 'Input your Email address'
            }
            else {
                emailError.innerText = 'Invalid Email address'
            }

        }
        else if (element.type === 'password') {
            if (element.value === '') {
                pwdError.innerText = 'Input your password'
            }
            else if (element.value.length < 8) {
                pwdError.innerText = 'Password too short'
            }
            else {
                user.password = element.value
                console.log(element.value.length)
                pwdError.innerText = ''

            }
        }
    })

    console.log(user)
    document.body.removeChild(popup)
}

const removePopup = () => {
    const removePop = document.querySelector('.popup')
    removePop.remove()
}

const popup = document.createElement('div')
popup.setAttribute('class', 'popup')
popup.innerHTML = '<p>Are you sure you want to login?</p>'

const yes_btn = document.createElement('button')
yes_btn.setAttribute('onclick', 'login()')
yes_btn.innerText = 'Yes'
popup.appendChild(yes_btn)

const no_btn = document.createElement('button')
no_btn.setAttribute('onclick', 'removePopup()')
no_btn.innerText = 'No'
popup.appendChild(no_btn)


btn.addEventListener('click', (e) => {
    e.preventDefault()
    document.body.appendChild(popup)
})
// btn.addEventListener('click', login)

