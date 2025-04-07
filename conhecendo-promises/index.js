function execute () {
    return new Promise((resolve, reject) => {
        console.log('A Promise está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a Promise.')
            resolve('Resultado')
        }, 1000)
    })
}

const p = execute()

console.log(p)

setTimeout(() => {
    console.log(p)
}, 2000)