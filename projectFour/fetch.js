// setTimeout(() => {
//     console.log('Hello')
// }, 5000)

// const getTodos = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const responseData = await response.json()
//     console.log(responseData)
//     // console.log(response)
// }

// getTodos()

const getTodosAlso = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

getTodosAlso()