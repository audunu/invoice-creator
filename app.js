let totalSum = 0;
let serviceArray = []
const services = [
    {
        service: 'Wash Car',
        price: '10'
    },
    {
        service: 'Mow Lawn',
        price: '20'
    },
    {
        service: 'Pull Weeds',
        price: '30'
    }
]



const washBtn = document.querySelector('.wash-btn')
const mowBtn = document.querySelector('.mow-btn')
const pullBtn = document.querySelector('.pull-btn')
const invoiceBtn = document.querySelector('.send-invoice-btn')
const outputContainerElement = document.querySelector('.output-container')
const totalAmount = document.querySelector('.total-amount')
const weAccept = document.querySelector('.we-accept')

function calculateTotal() {
    totalSum = 0;
    for (i = 0; i < serviceArray.length; i++) {
        totalSum += parseInt(serviceArray[i].price)
    }
    return totalSum
}


function renderItems() {
    let output = ''
    outputContainerElement.innerHTML = ''
    for (i = 0; i < serviceArray.length; i++) {
        output += `
            <div class='item-container'>
                <div class='item-name'>${serviceArray[i].service}</div>
                <div class='item-remove'>Remove</div>
                <div class='item-price'>$ ${serviceArray[i].price}</div>
            </div>
        `
    }
    outputContainerElement.innerHTML = output
    const removeButtons = document.querySelectorAll('.item-remove')
    removeButtons.forEach(button => button.addEventListener('click', e => {
        for (i = 0; i < serviceArray.length; i++) {
            if (serviceArray[i].service === e.target.parentElement.childNodes[0].nextSibling.textContent) {
                serviceArray.splice(i, 1)
            }
        }
        calculateTotal()
        renderItems()
        renderTotal()


    }))

}

function renderTotal() {
    totalAmount.textContent = `$ ${calculateTotal()}`
    if (totalSum !== 0) {
        weAccept.classList.remove('we-accept')
    }
}

washBtn.addEventListener('click', () => {
    if (serviceArray.some(element => element === services[0])) {
        return
    }
    else {
        serviceArray.push(services[0])
        renderItems()
        renderTotal()
    }
})

mowBtn.addEventListener('click', () => {
    if (serviceArray.some(element => element === services[1])) {
        return
    }
    else {
        serviceArray.push(services[1])
        renderItems()
        renderTotal()
    }
})

pullBtn.addEventListener('click', () => {
    if (serviceArray.some(element => element === services[2])) {
        return
    }
    else {
        serviceArray.push(services[2])
        renderItems()
        renderTotal()
    }
})

invoiceBtn.addEventListener('click', () => {
    serviceArray = []
    totalSum = 0
    weAccept.classList.add('we-accept')
    renderItems()
    renderTotal()
})


renderTotal()