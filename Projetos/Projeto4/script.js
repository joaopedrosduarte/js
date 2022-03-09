var num = document.querySelector('#num')
var res = document.querySelector('#res')

function calcular(){
    if (num.value.length == 0){
        window.alert('Digite um número')
    } else {
        res.innerHTML = ''
        let num1 = Number(num.value)
        for (i = 1;i <= 10;i++){
            let item = document.createElement('option')
            item.text = `${num1} X ${i} = ${num1*i}`
            item.value = `tab${i}`
            res.appendChild(item)
        }
    }
}