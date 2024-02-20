class Rectangle {
    constructor(length, breadth) {
        this.length = length
        this.breadth = breadth
    }

    area() {
        return this.length * this.breadth
    }

    perimeter() {
        return 2 * (this.length + this.breadth)
    }

    // async randomCalc() {
    //     const area = await this.area()
    //     const perimeter = this.perimeter()

    //     return area + perimeter
    // }

    static squaredSide(length, breadth) {
        return (length ** 2) + (breadth ** 2)
    }
}

const firstRectangle = new Rectangle(5, 6)

const secondRectanlge = new Rectangle(9, 10)

console.log(firstRectangle.area())
console.log(firstRectangle.perimeter())

console.log(secondRectanlge.area())
console.log(secondRectanlge.perimeter())

const thirdRectangle = new Rectangle(11, 12).area()

console.log(thirdRectangle)

// static methods
console.log(Rectangle.squaredSide(10, 11))

// async await
// console.log(firstRectangle.randomCalc())