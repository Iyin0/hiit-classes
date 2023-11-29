let allProducts = [
    {
        id: 1,
        name: 'AC',
        description: 'For Cooling',
        price: '200'
    },
    {
        id: 2,
        name: 'Washing Machine',
        description: 'For dry cleaning clothes and beddings',
        price: '500'
    },
    {
        id: 3,
        name: 'Screen',
        description: 'For viewing content',
        price: '300'
    },
    {
        id: 4,
        name: '	Keyboard',
        description: 'Typing',
        price: '50'
    },
    {
        id: 5,
        name: 'Phone',
        description: 'Making Calls',
        price: '1150'
    },
    {
        id: 6,
        name: 'Marker',
        description: 'Writing',
        price: '50'
    },
    {
        id: 7,
        name: 'Table',
        description: 'Placing items',
        price: '50'
    },
    {
        id: 8,
        name: 'Chair',
        description: 'Sitting',
        price: '5'
    },
    {
        id: 9,
        name: 'Cap',
        description: '	For providing shade',
        price: '2'
    },
    {
        id: 10,
        name: 'Electricity',
        description: '	For providing power',
        price: '500'
    },
]

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

// table body
const tbody = document.createElement('tbody')
table.appendChild(tbody)

allProducts.forEach((row, index) => {
    // create row
    const tbodyRow = document.createElement('tr')
    tbody.appendChild(tbodyRow)

    Object.keys(row).forEach((tableData, i) => {
        const td = document.createElement('td')
        if (i == 0) td.innerText = index + 1
        else td.innerText = row[tableData]
        tbodyRow.appendChild(td)

        // console.log(row["id"])
        // console.log(row."id")

    })

})

// console.log(allProducts)
// console.log(Object.keys(allProducts[0]))

document.body.appendChild(table)