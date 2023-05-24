let students = ["Simon", "Ikenna", "Ahmed", "Promise", "Maxwell", "Daniel", "Dominion"]

// console.log(students)

// LOOP CONTROL


// for loop
// for (let i = 0; i < students.length; i++) {
//     // console.log(students[i])
//     console.log(`Name: ${students[i]}`)
// }

// students.forEach((student) => {
//     // console.log(student)
//     console.log(`Name: ${student}`)
// })

// while loop
// let i = 0;

// while (i < students.length) {
//     console.log(students[i])
//     i++;
// }

// do while
// let i = 7;

// do {
//     console.log(students[i])
//     i++
// }
// while (i < students.length)

// alert("Welcome!")
// const username = window.prompt("Enter username")
// console.log(username)



// CONDITIONAL STATEMENT
// const score = [50, 25, 32, 10, 11, 15, 41, 7, 75, 81, 1, 19, 90, 20, 65, 76, 90, 8]


// if...else
// let score = prompt("Enter you score")

// if (score >= 70) {
//     console.log("You passed. Your grade is 'A'")
// }
// else if (score >= 60 && score < 70) {
//     console.log("You passed. Your grade is 'B'")
// }
// else if (score >= 55 && score < 60) {
//     console.log("You passed. Your grade is 'C'")
// }
// else if (score >= 50 && score < 55) {
//     console.log("You passed. Your grade is 'D'")
// }
// else {
//     console.log("You failed. Your grade is 'F'")
// }

// let first = "true"
// let second = "false"

// if (first === "true" && second === "true") {
//     console.log('Both true')
// }
// else if (first === "true" || second === "true") {
//     console.log('At least one is true or false')
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

let scores = []

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