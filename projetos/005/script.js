var res = document.querySelector('#res')
var num = document.querySelector('#num')
var list = document.querySelector('#list')
var array = []

function adicionar(){
    var n = Number(num.value)
    if (n < 1 || n > 100){
        window.alert('Error : Número maior que 100 ou menor que 1')
    } else {
        if (array.indexOf(n) != -1){
            window.alert('Error : Número ja adicionado')
        } else {
            res.innerHTML = ''
            array.push(n)
            var item = document.createElement('option')
            item.text = `Número ${n} adicionado`
            list.appendChild(item)
        }
    }
    num.value = ''
    num.focus()
}

function maior(){
    let maior = array[0]
    for (let i = 0;i < array.length;i++){
        if (array[i] > maior){
            maior = array[i]
        }
    }
    return maior
}

function menor(){
    let menor = array[0]
    for (let i = 0;i < array.length;i++){
        if (array[i] < menor){
            menor = array[i]
        }
    }
    return menor
}

function soma(){
    let soma = 0
    for (let i = 0;i < array.length;i++){
        soma += array[i]
    }
    return soma
}

function media(soma){
    let media = soma / array.length
    return media
}

function finalizar(){
    res.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior()}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor()}</p>`
    res.innerHTML += `<p>A soma de todos os valores do array foi ${soma()}</p>`
    res.innerHTML += `<p>A media entre os valores do array é ${media(soma())}</p>`
}

