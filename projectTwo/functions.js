// function logToConsole() {
//     console.log('Welcome to class')
// }

// logToConsole()

let a = 5
let b = 6

const areaRectangle = () => {

    let a = 5
    let b = 7

    let area = a * b
    console.log(area)
    return area
}

let calcArea = areaRectangle()

console.log(calcArea)
console.log(b)

const perimeterRect = (c, d) => {
    let peri = 2 * (c + d)
    console.log(peri)
    // return 2 * (c + d)
}

// console.log(perimeterRect(a, b))
perimeterRect(a, b)

const scores = [50, 49, 20, 15, 9, 46, 74, 25, 11, 99, 87, 65, 72, 31, 4, 10, 23, 30]

const printVal = (scores) => {
    let total = 0;

    for (let index = 0; index < scores.length; index++) {
        const element = scores[index];
        if (element >= 50) {
            total += element
        }

        // console.log(total)
    }

    return total
}

console.log(printVal(scores))
