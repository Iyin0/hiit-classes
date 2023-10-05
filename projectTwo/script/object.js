const user = {
    fullName: "Choima Theresa",
    email: "chiomatheresa@gmial.com",
    age: 21,
    phoneNumber: [
        {
            home: '214577456999',
            mobile: '85586566554'
        }
    ],
    children: ['Okiki', 'James'],
    newBirth: function () {
        return `${this.fullName} birthed a new child`
    }
}

console.log(user)
console.log(user.fullName)
console.log(user.newBirth())
user.fullName = "Theresa Chioma"
console.log(user.fullName)
console.log(user.age)
console.log(user.newBirth())



// TASK

// 1. Write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task.

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task.

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task.