let students = ['Bello', 'Tega', 'Aisha', 'Emmanuel', "Eneh", 'Omoniyi', "Deborah", "Uzowulu"]
console.log(students)
// LOOP CONTROL

// for loop
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i])
// }

// students.forEach((student) => {
//     console.log(student)
// })

// while
// let i = 0

// while (i < students.length) {
//     console.log(students[i])
//     i++
// }

// do while

// let i = 8

// do {
//     console.log(students[i])
//     i++
// } while (i < students.length)


// CONDITIONAL STATEMENT
// const scores = [50, 49, 20, 15, 9, 46, 74, 25, 11, 99, 87, 65, 72, 31, 4, 10, 23, 30]

// if..else
// let score = prompt('Enter your score')
// console.log(score)
// if (score >= 70) {
//     console.log('You passed. Your grade is A')
// } else if (score >= 65 && score < 70) {
//     console.log('You passed. Your grade is B')
// } else if (score >= 60 && score < 65) {
//     console.log('You passed. Your grade is C')
// } else if (score >= 55 && score < 60) {
//     console.log('You passed. Your grade is D')
// } else if (score >= 50 && score < 55) {
//     console.log('You passed. Your grade is E')
// } else {
//     console.log('You passed. Your grade is F')
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
//         console.log('You can do better')
//         break;
//     case 'D':
//         console.log("Well.. at least you tried and didn't fail")
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
    } else if (score >= 55 && score < 60) {
        console.log('You passed. Your grade is C')
    } else if (score >= 50 && score < 55) {
        console.log('You passed. Your grade is D')
    } else if (score >= 44 && score < 50) {
        console.log('You passed. Your grade is E')
    } else {
        continue;
        // console.log('You passed. Your grade is F')
    }

}