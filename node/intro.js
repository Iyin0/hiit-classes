// MAKE SURE TO INSTALL NODE.JS. VISIT https://nodejs.org/en TO DOWNLOAD AND INSTALL

const os = require('os')
const data = require('./data')


// console.log('Welcome to Node.JS class today')
// console.log(os)

// console.log(__dirname)
// console.log(__filename)

const greeting = (name) => {
    console.log(`Welcome ${name}`)
}

// greeting('Samuel')

// const users = ['Uzo', 'Ayo', 'Emeka', 'Ola']

// const age = [28, 17, 33, 25]
// console.log(users)
// console.log(age)

console.log('Running from intro file ' + data.users)
console.log('Running from intro file ' + data.age)