import { allProducts } from "./allProducts.js"

// dropdown
const profile_btn = document.querySelector('.profile')
const dropdown = document.querySelector('.dropdown')
let dropdownState = false
// profile_btn.removeChild(dropdown)
dropdown.classList.add('hidden')

profile_btn.addEventListener('click', () => {
    dropdownState = !dropdownState
    if (dropdownState) {
        // profile_btn.appendChild(dropdown)
        dropdown.classList.remove('hidden')
    }
    else {
        // profile_btn.removeChild(dropdown)
        dropdown.classList.add('hidden')
    }

})

let products = allProducts

// table
const main = document.querySelector('main')
const table = document.createElement('table')
table.setAttribute('border', '1px')
table.setAttribute('width', '100%')
table.setAttribute('cellpadding', '2px')
table.setAttribute('cellspacing', '10px')

const tableHeaderRow = document.createElement('tr')
table.appendChild(tableHeaderRow)

const headers = ['S/N', 'Item', 'Description', 'Price', 'Action']

headers.forEach(element => {
    let tableHeader = document.createElement('th')
    tableHeader.innerText = element
    tableHeaderRow.appendChild(tableHeader)
})


const createTableList = () => {

    products.forEach((element, index) => {
        let tableRow = document.createElement('tr')
        tableRow.className = 'row'

        let td1 = document.createElement('td')
        td1.innerText = index + 1
        tableRow.appendChild(td1)

        let td2 = document.createElement('td')
        td2.innerText = element.name
        tableRow.appendChild(td2)

        let td3 = document.createElement('td')
        td3.innerText = element.description
        tableRow.appendChild(td3)

        let td4 = document.createElement('td')
        td4.innerText = element.price
        tableRow.appendChild(td4)

        let td5 = document.createElement('button')
        td5.innerText = 'Delete'

        td5.addEventListener('click', () => {
            removeProduct(element.id)
        })

        tableRow.appendChild(td5)

        table.appendChild(tableRow)
    })
}

const removeProduct = (id) => {
    products = products.filter(product => product.id !== id)
    removeTableRows()
    createTableList()
}

createTableList()



// form
const form = document.createElement('form')

// item
const itemLabel = document.createElement('label')
itemLabel.innerText = 'Item name'

const itemInput = document.createElement('input')
itemInput.setAttribute('type', 'text')

const itemContainer = document.createElement('div')
itemContainer.appendChild(itemLabel)
itemContainer.appendChild(itemInput)
form.appendChild(itemContainer)

// description
const descriptionLabel = document.createElement('label')
descriptionLabel.innerText = 'Description'

const descriptionInput = document.createElement('textarea')

const descriptionContainer = document.createElement('div')
descriptionContainer.appendChild(descriptionLabel)
descriptionContainer.appendChild(descriptionInput)
form.appendChild(descriptionContainer)

// Price
const priceLabel = document.createElement('label')
priceLabel.innerText = 'Price'
form.appendChild(priceLabel)

const priceInput = document.createElement('input')
priceInput.setAttribute('type', 'number')
form.appendChild(priceInput)

const priceContainer = document.createElement('div')
priceContainer.appendChild(priceLabel)
priceContainer.appendChild(priceInput)
form.appendChild(priceContainer)

const submitForm = document.createElement('button')
submitForm.innerText = 'Add Item'
form.appendChild(submitForm)

const removeTableRows = () => {
    const tableRows = document.querySelectorAll('.row')

    tableRows.forEach(row => {
        table.removeChild(row)
    })
}

submitForm.addEventListener('click', (e) => {
    e.preventDefault()

    if (itemInput.value && descriptionInput.value && priceInput.value) {
        let item = {
            id: allProducts.length + 1,
            name: itemInput.value,
            description: descriptionInput.value,
            price: priceInput.value
        }

        products = [...products, item]
        removeTableRows()
        createTableList()
        itemInput.value = ''
        descriptionInput.value = ''
        priceInput.value = ''
    }
    else {
        alert('Insert all fields')
    }

})


main.appendChild(table)
main.appendChild(form)
document.body.appendChild(main)

