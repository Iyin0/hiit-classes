let students = ["Daniel", "Paul", "David", "Chioma"]

console.log(students)

// LOOP
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// students.forEach(student => {
//     console.log(student)
// })

// let i = 4

// while (i < students.length) {
//     console.log(students[i])
//     i++
// }

// do {
//     console.log(students[i])
//     i++
// } while (i < students.length)


// CONDITIONAL STATEMENT
// const scores = [50, 25, 32, 10, 11, 15, 41, 7, 75, 81, 1, 19, 90, 20, 65, 76, 90, 8]

// if...else

// let score = window.prompt('Enter a score')

// if (score >= 70) {
//     console.log('You passed')
// } else if (score >= 60) {
//     console.log('You did your best')
// } else if (score >= 50) {
//     console.log('You can do better')
// } else if (score >= 45) {
//     console.log('At least you tried')
// } else {
//     console.log('You failed')
// }

// Switch
// const username = prompt('Enter Grade')
// switch (username) {
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
//         console.log("Well.. at least you didn't fail")
//         break;
//     default:
//         console.log("You failed")
// }


// let scores = []

for (let i = 0; i < 20; i++) {
    scores[i] = Math.floor(Math.random() * 100)
}

console.log(scores)

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 70) {
        console.log("You passed. Your grade is 'A'")
    }
    else if (scores[i] >= 60 && scores[i] < 70) {
        console.log("You passed. Your grade is 'B'")
    }
    else if (scores[i] >= 55 && scores[i] < 60) {
        console.log("You passed. Your grade is 'C'")
        continue;
    }
    else if (scores[i] >= 50 && scores[i] < 55) {
        console.log("You passed. Your grade is 'D'")
    }
    else {
        console.log("You failed. Your grade is 'F'")
        // break;
    }
}