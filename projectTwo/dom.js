// const container = document.querySelector('div')
const container = document.querySelectorAll('div')

const classContainer = document.getElementsByClassName('field')

// console.log(container)
// console.log(classContainer)

// container.forEach(element => {
//     console.log(element)
// })

// classContainer.forEach(element => {
//     console.log(element)
// })

// for (let index = 0; index < classContainer.length; index++) {
//     const element = classContainer[index];
//     console.log(element)
// }

const allInputs = document.querySelectorAll('input')
const btn = document.querySelector('form button')
const errMsg = document.querySelector('.errMsg')


// console.log(allInputs)

// console.log(btn)

const login = () => {

    const user = {
        email: "",
        password: ""
    }
    // console.log(allInputs)

    allInputs.forEach(element => {
        if (element.id === 'email') {
            if (element.value.includes('@')) {
                // console.log(`Email: ${element.value}`)
                user.email = element.value
                // element.value = ""
            } else {
                errMsg.innerText = "Invalid Email"
            }
        } else if (element.id === 'password') {
            if (element.value.length > 8) {
                // console.log(`Password: ${element.value}`)
                user.password = element.value
                // element.value = ""
            } else {
                errMsg.innerText = "Password too short"
            }
        }

    })

    console.log(user)

}

// create popup
const popup = document.createElement('div')
const btnContainer = document.createElement('div')
const info = document.createElement('p')
const yesBtn = document.createElement('button')
const noBtn = document.createElement('button')

info.innerText = 'Are you sure you want to login?'
yesBtn.innerText = "Yes"
noBtn.innerText = "No"

yesBtn.setAttribute('onclick', 'login()')
noBtn.addEventListener('click', () => removePopup())

btnContainer.className = 'btnContainer'

btnContainer.appendChild(yesBtn)
btnContainer.appendChild(noBtn)

popup.appendChild(info)
popup.appendChild(btnContainer)

const showPopup = () => {
    document.body.appendChild(popup)
}

const removePopup = () => {
    // popup.remove()
    document.body.removeChild(popup)
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    errMsg.innerText = ''

    // login()
    showPopup()
})