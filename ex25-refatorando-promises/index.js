// function calculateIMC(weight, height) {
//     const imc = weight / (height * height)
//     return new Promise((resolve, reject) => {
//         if(typeof weight !== "number" || typeof height !== "number") {
//             reject('Parâmetros inválidos')
//         } else {
//             resolve(imc)
//         }
//     })
// }

// function classifiedIMC (weight, height) {
//     calculateIMC(weight, height).then((result) => {
        // if(result < 18.5) {
        //     console.log(`Situação do IMC ${result}: magreza`)
        // } else if (result < 24.9) {
        //     console.log(`Situação do IMC ${result}: normal`)
        // } else if (result < 29.9) {
        //     console.log(`Situação do IMC ${result}: sobrepeso`)
        // } else if (result < 39.9) {
        //     console.log(`Situação do IMC ${result}: obesidade`)
        // } else {
        //     console.log(`Situação do IMC ${result}: obesidade grave`)
        // }
//     }).catch((err) => {
//         console.log(`Erro ao calcular o IMC: ${err}`)
//     })

//     console.log(`Calculando o IMC para altura ${height}m e peso ${weight}kg`)
// }

async function calculateIMC(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('arguments must be of type number')
    } else {
        return weight / (height * height)
    }
}

async function classifiedIMC(weight, height) {
    try {

        console.log(`Calculando o IMC para peso ${weight}kg e altura ${height}m...`)

        const imc = await (calculateIMC(weight, height))

        if(imc < 18.5) {
            console.log(`Situação do IMC ${imc}: magreza`)
        } else if (imc < 24.9) {
            console.log(`Situação do IMC ${imc}: normal`)
        } else if (imc < 29.9) {
            console.log(`Situação do IMC ${imc}: sobrepeso`)
        } else if (imc < 39.9) {
            console.log(`Situação do IMC ${imc}: obesidade`)
        } else {
            console.log(`Situação do IMC ${imc}: obesidade grave`)
        }
    } catch (err) {
        console.log(err)
    }
}

classifiedIMC(66, 1.72)
classifiedIMC(77, 1.45)
classifiedIMC(66, null)