class Rectangle {
    constructor(length, breadth, height) {
        this.length = length
        this.breadth = breadth
        this.height = height
    }

    area() {
        return this.length * this.breadth
    }

    perimeter() {
        return 2 * (this.length + this.breadth)
    }

    volume() {
        return this.length * this.breadth * this.height
    }

    // async randomCalc() {

    //     const area = this.area

    //     const perimeter = this.perimeter

    //     return await (area + perimeter)
    // }

    static squaredSides(length, breadth) {
        return (length ** 2) + (breadth ** 2)
    }
}

const rectangleVal = new Rectangle(6, 10)

console.log(rectangleVal.area())
console.log(rectangleVal.perimeter())

// console.log(new Rectangle(5, 6).area())

// console.log(rectangleVal.randomCalc())
// console.log(Rectangle.squaredSides(9, 10))

const calcVolume = new Rectangle(5, 6, 7)
console.log(calcVolume.volume())