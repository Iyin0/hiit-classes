const baseUrl = "http://localhost:5000"

export const getAllItem = async () => {
    try {
        const response = await fetch(`${baseUrl}/getAllItems`);
        const jsonData = await response.json();
        return jsonData
    } catch (error) {
        if (error.message === "Failed to fetch") alert('Unable to connect to server')
    }
}

export const addItem = async (data) => {

    const response = await fetch(`${baseUrl}/addItem`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
    })

    const jsonData = await response.json()

    if (!response.ok) alert(jsonData.erorr)

    return jsonData;
}

export const deleteItem = async (id) => {

    const response = await fetch(`${baseUrl}/deleteItem/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },

    })
}