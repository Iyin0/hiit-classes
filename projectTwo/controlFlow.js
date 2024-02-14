let students = ["Simon", "Promise", "Ahmed", "Ikenna", "Maxwell", "Daniel", "Emeka"]

// console.log(students)

// LOOP CONTROL

//  for loop

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])

//     if (students[i] == "Promise") {
//         break
//     }
// }


// students.forEach(student => {
//     console.log(student)
//     if (student == "Promise") {
//         break
//     }
// })

// while loop

// let i = 0;

// while (i < students.length) {
//     console.log(students[i])
//     i++
// }


// do {
//     console.log(students[i])
//     i++
// } while (i < students.length)



// CONDITIONAL STATEMENT

// let score = window.prompt('Enter a score')

// console.log(score)

// if...else if...else

// if (score >= 70) {
//     console.log("You passed. Your grade is A")
// } else if (score >= 60) {
//     console.log("You passed. Your grade is B")
// } else if (score >= 55) {
//     console.log("You passed. Your grade is C")
// } else if (score >= 50) {
//     console.log("You passed. Your grade is D")
// } else {
//     console.log("You failed. Your grade is F")
// }

// let first = "true"
// let second = "false"

// if (first === "true" && second === "true") {
//     console.log("Both are true")
// } else if (first === "true" || second === "true") {
//     console.log("At least one is true or false")
// }


// Switch 
// const grade = prompt('Enter Grade')

// switch (grade) {
//     case 'A':
//         console.log('Excellent Work')
//         break
//     case 'B':
//         console.log('Good Work')
//         break
//     case 'C':
//         console.log('You can do better')
//         break
//     case 'D':
//         console.log('Well... at least you tried')
//         break
//     default:
//         console.log('You failed')
// }


let scores = []

for (let i = 0; i < 20; i++) {
    scores[i] = Math.floor(Math.random() * 100)
}

console.log(scores)

for (let i = 0; i < scores.length; i++) {
    let score = scores[i]
    if (score >= 70) {
        console.log("You passed. Your grade is A")
    } else if (score >= 60) {
        console.log("You passed. Your grade is B")
    } else if (score >= 55) {
        console.log("You passed. Your grade is C")
        // break;
    } else if (score >= 50) {
        continue
        console.log("You passed. Your grade is D")
    } else {
        console.log("You failed. Your grade is F")

    }
}