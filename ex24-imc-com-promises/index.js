function calculateIMC(weight, height) {
    const imc = weight / (height * height)
    return new Promise((resolve, reject) => {
        if(typeof weight !== "number" || typeof height !== "number") {
            reject('Parâmetros inválidos')
        } else {
            resolve(imc)
        }
    })
}

function classifiedIMC (weight, height) {
    calculateIMC(weight, height).then((result) => {
        if(result < 18.5) {
            console.log(`Situação do IMC ${result}: magreza`)
        } else if (result < 24.9) {
            console.log(`Situação do IMC ${result}: normal`)
        } else if (result < 29.9) {
            console.log(`Situação do IMC ${result}: sobrepeso`)
        } else if (result < 39.9) {
            console.log(`Situação do IMC ${result}: obesidade`)
        } else {
            console.log(`Situação do IMC ${result}: obesidade grave`)
        }
    }).catch((err) => {
        console.log(`Erro ao calcular o IMC: ${err}`)
    })

    console.log(`Calculando o IMC para altura ${height}m e peso ${weight}kg`)
}

classifiedIMC(66, 1.72)
classifiedIMC(72,2)
classifiedIMC('texto', 1.88)
classifiedIMC(120,1.55)