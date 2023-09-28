// NUMBERS
// console.log(10 + 10)   // 20
// console.log(10 - 2)     // 8
// console.log(10 * 2)   // 20
// console.log(10 / 2)     // 5
// console.log(10 % 3)   // 1
// console.log(10 ** 3)  // 1000

// NaN
// console.log(2 + true)       // 2true, error, true
// console.log(2 + false)      // false, 2false, NaN
// console.log(2 + "true")    // 2true, true
// console.log(2 - "true")     // error, NaN, 
// console.log("100" - 4)      // error, NaN
// console.log("true" - 2)     // error
// console.log("100" + 4)      // 1004, 104
// console.log(100 - "4")      // error
// console.log("10" * 2)       // 10, 12, 1010, 12
// console.log("true" * 2)     // truetrue
// console.log(("true") * 2)   // error, true true
// console.log("10" ** 2)      // 100, 102
// console.log("10" % 2)       // 5, error, true, 0


// Type conversion
// console.log(100 - - '2')        // 98, 99, 102
// console.log(100 - -'2')         // 102, 98
// console.log(100 - + '2')        // 102, 98, 99
// console.log(100 - +'2')         // 98, 
// console.log(Number('2'))
// console.log(Number('true'))
// console.log(Number(true))
// console.log(typeof '2')
// console.log(typeof 2)
// console.log(typeof true)
// console.log(Boolean('2'))
// console.log(typeof +'2')


// MATH
// let r = 14.5

// let area = Math.PI * (r ** 2)
// let roundedArea = Math.round(area)
// let floorArea = Math.floor(area)
// let ceilArea = Math.ceil(area)

// console.log(area)
// console.log(roundedArea)
// console.log(floorArea)
// console.log(ceilArea)

let rndNum = Math.random()
// console.log(rndNum)
rndNum = rndNum.toFixed(2) * 100

console.log(rndNum)