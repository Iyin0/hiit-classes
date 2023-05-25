const user = {
    fullName: "Ahmed Maxwell",
    email: "daniel@dominion.com",
    phone: [
        {
            home: '0255417856',
            mobile: '784558877556'
        }
    ],
    age: 30,
    children: ["Matthias", "Ikenna"],
    newBirth: function () {
        return `${this.fullName} births a new child`
    }
}

console.log(user.fullName)
console.log(user.children)
console.log(user.newBirth())