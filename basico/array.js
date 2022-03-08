let array1 = [1, 3, 7, 8, 2]
let array2 = [4 ,2 ,6 ,10 ,8]

array1.sort();

console.log(`Array1 : ${array1}`)

array1.push(0)
console.log(`Adicionando 0 ao array : ${array1}`)

console.log(`O array tem ${array1.length} posições`)
console.log(`O Primeiro valor do array é ${array1[0]}\n`)

console.log('Segundo exemplo')
console.log(`Teste 1`)
for (let i = 0 ;i < array2.length;i++){
    console.log(`A posição ${i} possui o valor ${array2[i]}`)
}

console.log('\n')
// TESTE 1 == TESTE 2

console.log(`Teste 2`)
for (let i in array2){
    console.log(`A posição ${i} possui o valor ${array2[i]}`)
}

console.log('Terceiro exemplo')
array2.push(2)
console.log(array2.indexOf(2))
array2[1] = 1
console.log(array2.indexOf(2))
if (array2.indexOf(2) != -1){
    console.log(`Numero Achado na posição : ${array2.indexOf(2)}`)
} else {
    console.log('Numero não encontrado')
}


