var res = document.querySelector('#res')
var tstart = document.querySelector('#start')
var tend = document.querySelector('#end')
var tpass = document.querySelector('#pass')

function calcular() {
    if (tstart.value.length == 0 || tend.value.length == 0 || tpass.value.length == 0){
        res.innerHTML = 'Impossivel contar. insira Início e Fim'
    } else {
        var start = Number(tstart.value)
        var end = Number(tend.value)
        var pass =Number(tpass.value)

        if (start > end){
            res.innerHTML = 'Impossivel contar. Inicio > Fim'
        } else {
            if (pass == 0){
                window.alert('Passo invalido considerando Passo = 1')
                pass = 1
            }
            res.innerHTML = `Contando : \n`
            while (start <= end){
                res.innerHTML += `${start} -> `
                start += pass
            }
            res.innerHTML += `Fim!`
        }
    } 
}