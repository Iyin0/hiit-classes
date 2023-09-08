// MAKE SURE TO INSTALL NODE.JS. VISIT https://nodejs.org/en TO DOWNLOAD AND INSTALL

const os = require('os')
const data = require('./data.js')


// console.log('Welcome to Node.JS class today')
// console.log(os)

// console.log(__dirname)
// console.log(__filename)

const greeting = (name) => {
    console.log(`Welcome ${name}`)
}

// greeting('Samuel')

// console.log(users)
// console.log(age)

console.log('Running from intro file ' + data.users)
console.log('Running from intro file ' + data.age)