import { allProducts } from "./allProducts.js"

let products = allProducts

//  FORM
const form = document.createElement('form')

const formBody = ['Name', 'Price', 'Description']

formBody.forEach((element, index) => {
    const container = document.createElement('div')
    const label = document.createElement('label')
    label.innerText = element
    container.appendChild(label)

    if (element === 'Description') {
        const input = document.createElement('textarea')
        container.appendChild(input)
    } else if (element === 'Price') {
        const input = document.createElement('input')
        input.setAttribute('type', 'number')
        input.setAttribute('class', 'price')
        container.appendChild(input)
    } else {
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('class', 'name')
        container.appendChild(input)
    }

    form.appendChild(container)
})

const btn = document.createElement('button')
btn.innerText = 'Add Item'
form.appendChild(btn)

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const name = document.querySelector('.name')
    const price = document.querySelector('.price')
    const description = document.querySelector('textarea')

    const data = {
        name: name.value,
        description: description.value,
        price: price.value
    }

    name.value = ''
    description.value = ''
    price.value = ''

    products.push(data)
    removeTableBody()
    addTableBody()
})

document.body.appendChild(form)


//  TABLE
const table = document.createElement('table')
table.setAttribute('width', '100%')
table.setAttribute('border', '1')
table.setAttribute('cellspacing', '10px')
table.setAttribute('cellpadding', '5px')

const tableHead = document.createElement('thead')
table.appendChild(tableHead)
const tableBody = document.createElement('tbody')
table.appendChild(tableBody)


const tableHeadRow = document.createElement('tr')
tableHead.appendChild(tableHeadRow)

const headers = ['S/N', 'Name', 'Description', 'Price', 'Action']

headers.forEach(element => {
    const th = document.createElement('th')
    th.innerText = element
    tableHeadRow.appendChild(th)
})

const removeTableBody = () => {
    const tableBodyRows = document.querySelectorAll('tbody tr')
    tableBodyRows.forEach(element => {
        tableBody.removeChild(element)
    })
}

const deleteItem = (index) => {
    products = products.filter(a => products.indexOf(a) !== index)
    removeTableBody()
    addTableBody()
}

const addTableBody = () => {

    products.forEach((element, index) => {
        const row = document.createElement('tr')

        const td1 = document.createElement('td')
        td1.innerText = index + 1
        row.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerText = element.name
        row.appendChild(td2)

        const td3 = document.createElement('td')
        td3.innerText = element.description
        row.appendChild(td3)

        const td4 = document.createElement('td')
        td4.innerText = element.price
        row.appendChild(td4)

        // const td5 = document.createElement('td')
        const button = document.createElement('button')
        button.innerText = 'Remove'

        button.addEventListener('click', () => {
            deleteItem(index)
        })
        row.appendChild(button)

        tableBody.appendChild(row)
    })
}

addTableBody()



document.body.appendChild(table)
