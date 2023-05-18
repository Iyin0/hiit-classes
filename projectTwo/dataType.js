// NUMBERS
// console.log(10 + 10)    // 20
// console.log(10 - 2)     // 8
// console.log(10 * 2)     // 20
// console.log(10 / 3)     // 1, 3, 3.1
// console.log(10 % 3)     // 1
// console.log(10 ** 3)    // 1000

// NaN
// console.log(2 + true)       // error, NaN, 2true, true
// console.log(2 + false)      // NaN, error, false, 2false
// console.log(2 + "true")     // 2true, error, NaN
// console.log(2 - "true")     // error, 2true, 2, true
// console.log("100" - 4)      // error, 1004, NaN
// console.log("true" - 2)
// console.log("100" + 4)      // 1004
// console.log(100 - "4")      // NaN, 1004, 96, error, 100
// console.log("10" * 2)       // NaN, 1010, 20
// console.log("true" * 2)     // truetrue, true, error,
// console.log(("true") * 2)   // true, truetrue
// console.log("10" ** 2)      // error, NaN, 1010, 100, 101010
// console.log("10" % 2)       // 5, 0, error, NaN

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


// Math Class
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
// console.log(typeof areaTDP)

// console.log(Math.floor(Math.random() * 10000))
// console.log((Math.random() * 10000).toFixed(0))


// STRING

//concatenation

// let surname
// let firstName = 'Dominion'
// let lastName = 'Precious'
// let country = 'Nigeria'
// let age = 40
// let height = "5'7"
// let weight = 70
// let email = "dominion@precious.org"

// let userDetails = "My name is " + firstName + " " + lastName + ", and I am from " + country + ". I am " + age + " years old, I am " + height + " tall and weigh" + weight + "kg. My email is " + email + "."
// console.log(userDetails)
// userDetails = `My name is ${firstName} ${lastName}, and I am from ${country}. I am ${age} years old, I am ${height} tall and weigh ${weight}kg. My email is ${email}.`
// console.log(userDetails)

// let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea culpa eaque voluptate. Sint quas quaerat quasi, dolorum exercitationem recusandae!'

// string indexing

// let fullName = firstName + " " + lastName

// console.log(fullName)
// console.log(fullName[5])    // i
// console.log(fullName[9])    // o, e, r,  P, " "
// console.log(fullName[14])   // u, o,
// console.log(fullName[4])    // n, m
// console.log(fullName[20])   // undefined

// string properties
// console.log(fullName.length)

// string methods/function
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.indexOf("n"))
// console.log(fullName.split("n"))
// console.log(fullName.slice(4, 9))

// let lowerName = fullName.toLowerCase()
// console.log(lowerName)
// let formatedFirstName = lowerName[0]
// let splitFirstName = lowerName.split('d')
// console.log(formatedFirstName)
// console.log(splitFirstName[1])
// let upperFirstFirstName = formatedFirstName.toUpperCase()
// let finalName = upperFirstFirstName + splitFirstName[1]
// console.log(finalName)

// console.log(lowerName[0].toUpperCase() + lowerName.split('d')[1])


// Array
// let students = ["Simon", "Promise", "Ahmed", "Ikenna", "Maxwell", 50, true]

// console.log(students)
// console.log(students.length)
// console.log(students[3])
// console.log(students.indexOf(true))

// students[5] = "Daniel"
// console.log(students)

// // students[true] = "Matthias"
// students[students.indexOf(true)] = "Sever"
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
console.log(10 > 2)     // true, false
console.log(10 < 2)     // false, true
console.log(10 <= 2)    // false
console.log(10 <= 10)   // true
console.log(10 <= "10") // false, true
console.log(10 >= 2)    // true
console.log(10 == 2)    // false
console.log(10 == '10') // true
console.log(10 === '10')    // true
console.log(10 !== '10')    // false
console.log(10 != '10')     //false