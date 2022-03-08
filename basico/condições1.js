var vel = 15
var data = new Date()
var hora = data.getDay()

if (vel > 14){
    console.log(`Você esta acima da velocidade permitida pela lei 14Km/h / Sua velocidade : ${vel}`)
} else {
    console.log(`A velocidade do seu carro é ${vel}Km/h`)
}

console.log(`Dirija sempre com o cinto de segurança!`)

console.log('\nDia da semana : ')
switch (hora) {
    case 0:
        console.log('Domingo')
        break
    
    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
        break 

    case 3:
        console.log('Quarta')
        break

    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6:
        console.log('Sabado')
        break

    default:
        console.log('Error')
        break
}