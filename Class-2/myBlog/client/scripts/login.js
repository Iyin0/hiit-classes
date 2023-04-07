const uri = 'https://hiit-blog-api.onrender.com'     // the server url

const details = document.querySelectorAll('input')

const btn = document.querySelector('.submit')
const msg = document.querySelector('.message')


btn.addEventListener('click', (e) => {
    e.preventDefault()
    msg.innerText = ''

    if (!details[0].value || !details[1].value) {
        msg.innerText = 'All fields must be filled'
    }
    else {
        let user = {
            email: details[0].value,
            password: details[1].value
        }

        loginUser(user)
    }

})

async function loginUser(data) {
    try {
        const response = await fetch(`${uri}/accounts/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        window.localStorage.setItem('token', result.token)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
        if (result.error) msg.innerText = result.error
        if (response.status === 200) window.location.href = 'index.html'
        console.log(result);
    } catch (error) {
        msg.innerText = error.error
        console.error(error);
    }
}