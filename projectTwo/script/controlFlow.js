let students = ["Okiki", "Theresa", "James", "Nonye", "Chioma"]

// LOOP CONTROL

// for loop

// for (let i = 0; i < students.length; i++) {
//     console.log(`Student name is ${students[i]}`)
// }

// students.forEach(student => {
//     console.log(`Student name is ${student}`)
// })

// while

// let i = 5

// while (i < students.length) {
//     console.log(`Student name is ${students[i]}`)
//     i++
// }


// do while

// let i = 0

// do {
//     console.log(`Student name is ${students[i]}`)
//     i++
// } while (i < students.length)


// CONDITIONAL STATEMENT
// const scores = [53, 10, 2, 35, 14, 1, 62, 90, 48, 44, 60, 74, 31, 13]

// if..else if...else

// let score = prompt('Enter score')

// if (score >= 70) {
//     console.log('You passed. Your grade is A')
// } else if (score >= 60 && score < 70) {
//     console.log('You passed. Your grade is B')
// } else if (score >= 50 && score < 60) {
//     console.log('You passed. Your grade is C')
// } else if (score >= 44 && score < 50) {
//     console.log('You passed. Your grade is D')
// }
// else {
//     console.log('You failed. Your grade is F')
// }

// Switch

// const grade = prompt('Enter your grade')

// switch (grade.toUpperCase()) {
//     case 'A':
//         console.log("Excellent Work")
//         break;
//     case 'B':
//         console.log("Good Work")
//         break;
//     case 'C':
//         console.log("You can do better")
//         break;
//     case 'D':
//         console.log("Well... at least you tried and didn't fail")
//         break;
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
        console.log('You passed. Your grade is A')
    } else if (score >= 60 && score < 70) {
        console.log('You passed. Your grade is B')
    } else if (score >= 50 && score < 60) {
        console.log('You passed. Your grade is C')
    } else if (score >= 44 && score < 50) {
        console.log('You passed. Your grade is D')
    }
    else {
        continue
        // console.log('You failed. Your grade is F')
        // break
    }
}