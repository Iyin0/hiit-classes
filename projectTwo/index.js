import { allProducts } from "./allProducts.js"

let products = allProducts

// Table
const table = document.createElement('table')
table.setAttribute('border', '1px')
table.setAttribute('width', '100%')

// table head
const thead = document.createElement('thead')
table.appendChild(thead)

const theadRow = document.createElement('tr')
thead.appendChild(theadRow)

let tableHeading = ['S/N', 'Name of Product', 'Description', 'Price']

tableHeading.forEach(heading => {
    const th = document.createElement('th')
    th.innerText = heading
    theadRow.appendChild(th)
})

const renderTable = () => {

    // table body
    const tbody = document.createElement('tbody')
    table.appendChild(tbody)

    products.forEach((row, index) => {
        // create row
        const tbodyRow = document.createElement('tr')
        tbody.appendChild(tbodyRow)

        Object.keys(row).forEach((tableData) => {
            const td = document.createElement('td')

            // if (tableData === 'id') td.innerText = index + 1
            // else if (tableData === 'name') td.innerText = row.name
            // else if (tableData === 'description') td.innerText = row.description
            // else if (tableData === 'price') td.innerText = row.price

            if (tableData === 'id') td.innerText = index + 1
            else td.innerText = row[tableData]

            tbodyRow.appendChild(td)

            // console.log(row["id"])
            // console.log(row."id")

        })

        const td = document.createElement('td')
        const deleteBtn = document.createElement('button')
        deleteBtn.innerText = 'Delete'
        td.appendChild(deleteBtn)
        tbodyRow.appendChild(td)

        deleteBtn.addEventListener('click', () => {
            deleteItem(row["id"])
        })

    })
}

const removeTbody = () => {
    const body = document.querySelector('tbody')

    if (body) {
        table.removeChild(body)
    }
}

const deleteItem = (id) => {
    console.log(id)
    products = products.filter((item) => {
        return item.id !== id
    })

    console.log(products)

    removeTbody()
    renderTable()
}

renderTable()

// console.log(allProducts)
// console.log(Object.keys(allProducts[0]))

// form
const form = document.createElement('form')

// name
const nameContainer = document.createElement('div')
const nameLabel = document.createElement('label')
nameLabel.innerText = 'Name: '
const nameTag = document.createElement('input')
nameTag.setAttribute('type', 'text')
nameTag.setAttribute('placeholder', 'Enter the name of Product')
nameContainer.appendChild(nameLabel)
nameContainer.appendChild(nameTag)
form.appendChild(nameContainer)

// price
const priceContainer = document.createElement('div')
const priceLabel = document.createElement('label')
priceLabel.innerText = 'Price: '
const priceTag = document.createElement('input')
priceTag.setAttribute('type', 'number')
priceTag.setAttribute('placeholder', 'Enter the price of Product')
priceContainer.appendChild(priceLabel)
priceContainer.appendChild(priceTag)
form.appendChild(priceContainer)

// description
const descContainer = document.createElement('div')
const descLabel = document.createElement('label')
descLabel.innerText = 'Description: '
const descTag = document.createElement('textarea')
descTag.setAttribute('placeholder', 'Enter the description of Product')
descContainer.appendChild(descLabel)
descContainer.appendChild(descTag)
form.appendChild(descContainer)

// button
const addBtn = document.createElement('button')
addBtn.innerText = 'Submit'
form.appendChild(addBtn)

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addItem()
})


const addItem = () => {
    if (!nameTag.value || !priceTag.value || !descTag.value) {
        alert('All fields must be filled')
    }
    else {
        const data = {
            id: Math.round(Math.random() * 1000000),
            name: nameTag.value,
            price: priceTag.value,
            description: descTag.value
        }
        console.log(products)
        products.push(data)
        removeTbody()
        renderTable()
        console.log(products)
        nameTag.value = ''
        priceTag.value = ''
        descTag.value = ''
    }

}

document.body.appendChild(table)
document.body.appendChild(form)