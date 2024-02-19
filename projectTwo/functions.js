// function logToConsole() {
//     console.log("Class started")
// }

// logToConsole()

let a = 5
let b = 6

const areaRectangle = (a, b) => {
    let area = a * b
    console.log(area)

    return area
}

const perimeterRectangle = () => {
    let peri = 2 * (a + b)
    console.log(peri)
}


areaRectangle(7, 8)
perimeterRectangle()

let areaRect = areaRectangle(7, 8)

console.log(areaRect)

let scores = []

for (let i = 0; i < 20; i++) {
    scores[i] = Math.floor(Math.random() * 100)
}

console.log(scores)

const printTotal = (scores) => {
    let total = 0

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > 50) {
            total = total + scores[i]
        }

        console.log(total)
    }

    return total
}

console.log(printTotal(scores))
