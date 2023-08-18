// NUMBERS
// console.log(10 + 10)    // 20, 1010
// console.log(10 - 2)     // 8
// console.log(10 * 2)     // 20
// console.log(10 / 2)     // 5
// console.log(10 % 3)     // 1
// console.log(10 ** 3)   // 1000

// NaN
// console.log(2 + true)       // 3, error, NaN, invalid
// console.log(2 + false)      // NaN, 1, 2
// console.log(2 + "true")    // NaN, 2true
// console.log(2 - "true")     // NaN, error, 2true
// console.log("100" - 4)      // NaN, 96,
// console.log("true" - 2)     // NaN, true2, error,
// console.log("100" + 4)      // 1004, 104, NaN
// console.log(100 - "4")      // 96, NaN,
// console.log("10" * 2)       // 20, NaN, 1010
// console.log("true" * 2)     // NaN, truetrue, error
// console.log(("true") * 2)   // NaN, truetrue, error
// console.log("10" ** 2)      // NaN, 1010, 100, error
// console.log("10" % 2)       // NaN, 0

// Type conversion
// console.log(100 - - '2')        // 102
// console.log(100 - -'2')         // 102, 98, -102
// console.log(100 - + '2')        // 98, NaN, error
// console.log(100 - +'2')         // 98
// console.log(Number('2'))
// console.log(Number('true'))
// console.log(Number(true))
// console.log(typeof '2')
// console.log(typeof 2)
// console.log(typeof true)
// console.log(Boolean('2'))
// console.log(typeof +'2')

// MATH
// let r = 4.9

// let area = Math.PI * (r ** 2)
// let roundedArea = Math.round(area)
// let floorArea = Math.floor(area)
// let ceilArea = Math.ceil(area)
// let areaTDP = area.toFixed(2)
// console.log(area)
// console.log(roundedArea)
// console.log(floorArea)
// console.log(ceilArea)
// console.log(areaTDP)

// let rndNum = Math.random()
// console.log(rndNum)
// rndNum = rndNum.toFixed(2) * 100

// console.log(rndNum)

// let num = Math.random().toFixed(2) * 100
// console.log(num)

// console.log(Math.random())


// STRING
// concatenation
let firstName = 'Samuel'
let lastName = 'Ebube'
let age = 35
let height = "5'7"
let weight = 70
let email = "tega@bello.com"

// console.log(firstName + ' ' + lastName)

// let userIntro = 'My name is ' + lastName + ' ' + firstName + '. I am ' + age + ' years old, I weigh ' + weight + 'kg and I am ' + height + 'ft tall. You can contact me via my email on ' + email
// console.log(userIntro)
// userIntro = `My name is ${lastName} ${firstName}. I am ${age} years old, I weigh ${weight}kg and I am ${height}ft tall. You can contact me via my email on ${email}`
// console.log(userIntro)

// let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium debitis reprehenderit, sit dolores corporis nulla harum praesentium dolor libero!'

// string index
let fullName = firstName + ' ' + lastName

// console.log(fullName)
// console.log(fullName[5])
// console.log(fullName[6])
// console.log(fullName[20])

// string property
// console.log(fullName.length)

// string methods/fuctions
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName)
// console.log(fullName.indexOf('u'))
// console.log(fullName.lastIndexOf('u'))
// console.log(fullName.split(' '))
// console.log(fullName.slice(0, 5))

// let lowerName = fullName.toLowerCase()
// console.log(lowerName)

// let lowercase = lowerName.toUpperCase()[0, 7]

// console.log(lowercase)

// let lowercase2 = lowerName[0]
// console.log(lowercase2)

// let lowercase3 = lowercase2.toUpperCase()
// console.log(lowercase3)

// let lowerNames = lowerName.split(' ')

// console.log(lowerNames)
// console.log(lowerNames[0])
// console.log(lowerNames[0][0])
// console.log(lowerNames[0][0].toUpperCase())
// console.log(lowerNames[0].slice(1))

// console.log(lowerNames[0][0].toUpperCase() + lowerNames[0].slice(1) + ' ' + lowerNames[1][0].toUpperCase() + lowerNames[1].slice(1))


// ARRAY
let students = ['Bello', 'Tega', 'Aisha', 'Emmanuel', 50, 100, true]

// console.log(students)
// console.log(students.length)
// console.log(students[3])
// console.log(students.indexOf(true))

students[4] = "Eneh"
// console.log(students)

students[students.indexOf(100)] = 'Omoniyi'
// console.log(students)

students.pop()
// console.log(students)

students.push("Deborah")
// students.push(true)
// students.push(false)
students.push("Uzowulu")
// students.push(5)
// console.log(students)

students.sort()
// console.log(students)

const scores = [50, 70, 90, 5, 7]
// console.log(scores)

// const allData = students.concat(scores)
const allData = [...students, 'Love', ...scores]
// console.log(allData)

// console.log(fullName.split(' ').join('-'))

// console.log(allData.join('-'))


// BOOLEAN
console.log(10 > 2)     // true
console.log(10 < 2)     // false
console.log(10 <= 2)       // false
console.log(10 <= 10)       // true
console.log(10 <= '10')     // true, false
console.log(10 >= 2)        // true
console.log(10 == 2)        // false
console.log(10 == '10')     // true
console.log(10 === '10')    // false, true
console.log(10 !== '10')    // false
console.log(10 != '10')     // false