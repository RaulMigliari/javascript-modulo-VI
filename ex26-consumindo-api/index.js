function renderTranstion(transactionData) {
    const transaction = document.createElement('div')
    transaction.id = `transaction-${transactionData.id}`

    const name = document.createElement('h3')
    name.textContent = transactionData.name

    const value = document.createElement('div')
    value.textContent = transactionData.value

    transaction.append(name, value)
    document.querySelector('#transactions').append(transaction)
}

async function getTransactions() {
    const transactions = await fetch('http://localhost:3000/transactions').then(res => res.json())
    transactions.forEach(renderTranstion)
}

document.addEventListener('DOMContentLoaded', () => {
    getTransactions()
})

const form = document.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const transactionData = {
        "name": document.querySelector('#name').value,
        "value": document.querySelector('#value').value
    }

    const transaction = await fetch('http://localhost:3000/transactions', {
        method: 'POST',
        headers: {
            'ContentType': 'applications/json'
        },
        body: JSON.stringify(transactionData)
    }).then(res => res.json()).catch(err => console.error(`Erro: ${err}`))

    form.reset()
    renderTranstion(transaction)
    console.log(transaction)
})