// const container = document.querySelector('div.password')
// const container = document.querySelectorAll('div.password')
// const tagContainer = document.getElementsByTagName('div')

// console.log(container)
// console.log(tagContainer)

// container.forEach(element => {
//     console.log(element)
// })

// tagContainer.forEach(element => {
//     console.log(element)
// })

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('button')
const errMsg = document.querySelector('.errMsg')

const login = () => {

    let user = {
        email: '',
        password: ''
    }

    allInputs.forEach(input => {
        if (input.type == 'email') {
            if (input.value.includes('@') && input.value.includes('.')) {
                user.email = input.value
                input.value = ''
            } else if (input.value == '') {
                errMsg.innerText = 'Email is required'
            } else {
                errMsg.innerText = 'Invalid Email Address'
            }

        } else if (input.type == 'password') {
            if (input.value == '') {
                errMsg.innerText = 'Password is required'
            } else if (input.value.length < 8) {
                errMsg.innerText = 'Password not strong enough'
            } else {
                user.password = input.value
                input.value = ''
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
    errMsg.innerText = ''
    document.body.appendChild(popup)
})