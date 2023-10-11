let allProducts = [
    {
        name: 'Fan',
        description: 'For Blowing Air',
        price: '400'
    },
    {
        name: 'Chair',
        description: 'For sitting',
        price: '4000'
    },
    {
        name: 'Table',
        description: 'For palcing items',
        price: '40'
    },
    {
        name: 'Screen',
        description: 'For viewing',
        price: '400'
    },
    {
        name: 'Board',
        description: 'For writing',
        price: '400'
    },
    {
        name: 'Marker',
        description: 'For writing on a board',
        price: '7000'
    },
    {
        name: 'Table',
        description: 'For placing tools',
        price: '7000'
    },
]

// TABLE

// create table
const table = document.createElement('table')
table.setAttribute('width', '100%')
table.setAttribute('border', '1')
table.setAttribute('cellspacing', '10px')
table.setAttribute('cellpadding', '5px')

// table head
const tableHead = document.createElement('thead')
table.appendChild(tableHead)

const tableHeadRow = document.createElement('tr')
tableHead.appendChild(tableHeadRow)

const headers = ['S/N', 'Name', 'Description', 'Price']

headers.forEach(element => {
    const th = document.createElement('th')
    th.innerText = element
    tableHeadRow.appendChild(th)
})


// create table body
const tableBody = document.createElement('tbody')
table.appendChild(tableBody)

allProducts.forEach((row, index) => {
    const tableBodyRow = document.createElement('tr')
    tableBody.appendChild(tableBodyRow)

    const td1 = document.createElement('td')
    td1.innerText = index + 1
    tableBodyRow.appendChild(td1)

    const td2 = document.createElement('td')
    td2.innerText = row.name
    tableBodyRow.appendChild(td2)

    const td3 = document.createElement('td')
    td3.innerText = row.description
    tableBodyRow.appendChild(td3)

    const td4 = document.createElement('td')
    td4.innerText = row.price
    tableBodyRow.appendChild(td4)
})



document.body.appendChild(table)