class Rectangle {
    constructor(length, breadth, height) {
        this.lenght = length
        this.breadth = breadth
        this.height = height
    }

    area() {
        return this.lenght * this.breadth
    }

    perimeter() {
        return 2 * (this.lenght + this.breadth)
    }

    volume() {
        return this.lenght * this.breadth * this.height
    }

    // async randomCal() {
    //     const area = this.area
    //     const perimeter = this.perimeter
    //     return await (area * perimeter)
    // }

    static squaredSides(length, breadth) {
        return (length ** 2) + (breadth ** 2)
    }
}


const rectangleVal = new Rectangle(10, 15, 20)
// const rectangleVal2 = new Rectangle(10, 5)
// console.log(rectangleVal2.area())

console.log(rectangleVal.area())
console.log(rectangleVal.perimeter())
console.log(rectangleVal.volume())
// console.log(rectangleVal.randomCal())
console.log(new Rectangle(1, 2, 4).volume())
console.log(Rectangle.squaredSides(10, 5))

