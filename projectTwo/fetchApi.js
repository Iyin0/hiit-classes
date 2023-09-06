console.log('Fetch API')

let url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
}

const sendPost = async (data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
    })

    const json = await response.json()

    console.log(response)
    console.log(json)

    if (response.ok) {
        alert('Post Uploaded')
    } else {
        alert('Error uploading post')
    }
}

const data = {
    titles: 'HIIT Class',
    bodys: 'Welcome to class',
    userId: 62476299
}

sendPost(data)

// getPosts()