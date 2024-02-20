const user = {
    fullname: "Emeka Daniel",
    email: "emekadaniel@gmail.com",
    phone: [
        {
            home: "02145874566",
            mobile: "74524885694"
        }
    ],
    age: 26,
    children: ["Matthais", "Ikenna"],
    newBirth: function () {
        return `${this.fullname} births a new child`
    }
}

console.log(user)
console.log(user.fullname)
console.log(user.children)
console.log(user.newBirth())



// TASK

// 1. Write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task.

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task.

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task.