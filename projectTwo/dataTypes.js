// NUMBERS
// console.log(10 + 10)   // 20
// console.log(10 - 2)     // 8
// console.log(10 * 2)    // 20
// console.log(10 / 3)     // 3 remainder 1, 3 modulus 1
// console.log(10 % 3)     // 1
// console.log(10 ** 3)    // 30

// NaN
// console.log(2 + true)       // 2true, true
// console.log(2 + false)      // 2false, false
// console.log(2 + "true")     // 2true
// console.log(2 - "true")     // 2false, false, 2true
// console.log("100" - 4)      // 96, NaN
// console.log("true" - 2)     // NaN
// console.log("100" + 4)      // 104
// console.log(100 - "4")      // 96
// console.log("10" * 2)       // 12
// console.log("true" * 2)     // NaN, 2
// console.log(("true") * 2)   // NaN
// console.log("10" ** 2)      // 100,
// console.log("10" % 2)       // 5, 0

// console.log(100 - - '2')
// console.log(100 - -"2")
// console.log(100 - + '2')
// console.log(100 + +'2')
// console.log(typeof Number('2'))
// console.log(typeof +'2')

// console.log(typeof '2')

// console.log("2" - - "2")
// console.log("2" + String(2))
// console.log(Number("true"))
// console.log(Number(true))
// console.log(Number("100"))

// MATH
// let r = 5
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

// console.log(Math.random())

// console.log(Math.floor(Math.random() * 1000))


// STRINGS

// concatenation

let firstName = 'Daniel'
let lastName = 'Emeka'
let age = 40
let country = "Nigeria"
let height = "5'7"
let weight = 70

// let userDetails = "My name is " + firstName + " " + lastName + ". I am " + age + " years old and I live in " + country + '. I am ' + height + " tall and weight " + weight + "kg."
// let userDetails = `My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${country}. I am ${height} tall and weight ${weight}kg.`

// console.log(userDetails)

// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam dolore quo impedit repellat quas sit quod vitae, ut, praesentium, ab laboriosam. Aliquid libero, illum vero commodi ad ea cumque culpa corporis tempora quasi! Cupiditate eum, quia inventore labore perferendis ipsum deleniti sequi. Ea laudantium aliquid architecto iusto maxime. Quos, ipsam!'


// string indexing

let fullname = firstName + ' ' + lastName

// console.log(fullname)
// console.log(fullname[1])
// console.log(fullname[5])
// console.log(fullname[7])
// console.log(fullname[20])


// string property
// console.log(fullname.length)

// string methods/functions
// console.log(fullname.toUpperCase())
// console.log(fullname.toLowerCase())
// console.log(fullname.indexOf('a'))
// console.log(fullname.indexOf('e'))
// console.log(fullname.lastIndexOf('e'))
// console.log(fullname.split('e'))
// console.log(fullname.split('e').join(' '))
// console.log(fullname.slice(1, 4))

let lowerName = fullname.toLowerCase()

// console.log(lowerName)

// capitalise the first letter in the lowerName
// let first_name = lowerName.split(' ')[0]
// console.log(lowerName.split(' '))
// console.log(first_name)
// console.log(first_name[0].toUpperCase())
// console.log(first_name.slice(1))
// console.log(`${lowerName.split(' ')[0][0].toUpperCase() + lowerName.split(' ')[0].slice(1)} ${lowerName.split(' ')[1][0].toUpperCase() + lowerName.split(' ')[1].slice(1)}`)


// Array
let students = ["Simon", "Promise", "Ahmed", "Ikenna", "Maxwell", 50, true]

// console.log(students)
// console.log(students.length)
// console.log(students[3])
// console.log(students.indexOf(true))

// students[5] = "Daniel"
// console.log(students)

// replace true with Emeka, but assume you can't count the array
// students[students.indexOf(true)] = "Emeka"
// console.log(students)

// students.push("Matthias")
// console.log(students)

// students.pop()
// console.log(students)


// let scores = [50, 70, 10, 5]
// console.log(scores)

// // const allData = students.concat(scores)
// const allData = [...students, "Dominion", ...scores, 100]
// console.log(allData)
// console.log(students)
// console.log(scores)
// console.log(students.join(', '))


// Boolean
console.log(10 > 2)     // false, true
console.log(10 < 2)     // true, false
console.log(10 <= 2)    // false
console.log(10 <= 10)   // true
console.log(10 <= "10") // true
console.log(10 >= 2)    // true, false
console.log(10 == 2)    // false
console.log(10 == '10') // true
console.log(10 === '10')    // true
console.log(10 !== '10')    // false
console.log(10 != '10')     // true, false