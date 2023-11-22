class Rectangle {
    constructor(length, breadth) {
        this.length = length,
            this.breadth = breadth
    }

    area() {
        return this.length * this.breadth
    }

    perimeter() {
        return 2 * (this.length + this.breadth)
    }

    static sqauredSide(length, breadth) {
        return (length ** 2) + (breadth ** 2)
    }
}

const retangleVal = new Rectangle(5, 6)

console.log(retangleVal.area())
console.log(retangleVal.perimeter())

const calcArea = new Rectangle(7, 8).area()
const calcPerimeter = new Rectangle(7, 8).perimeter()

console.log(calcArea)
console.log(calcPerimeter)

const calSqure = Rectangle.sqauredSide(5, 6)

console.log(calSqure)