var data = new Date()
var atualAno = data.getFullYear()
var nAno = document.querySelector('#year')
var res = document.querySelector('#res')

function verificar() {
    var Ano = Number(nAno.value)
    var age = atualAno - Ano
    if (Ano <= 0 || Ano > atualAno || age > 120) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var radsex = document.getElementsByName('radsex')
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radsex[0].checked) {
            gen = 'Masculino'
            if (age < 16){
                img.setAttribute('src', './public/Criança_homem.png')
            } else if (age >= 16 && age <= 21) {
                img.setAttribute('src', './public/Joven_homem.png')
            } else {
                img.setAttribute('src', './public/Idoso_Homem2.png')
            }
        } else {
            gen = 'Feminino'
            if (age < 16){
                img.setAttribute('src', './public/Criança_mulher.png')
            } else if (age >= 16 && age <= 21) {
                img.setAttribute('src', './public/Jovem_mulher.png')
            } else {
                img.setAttribute('src', './public/Idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${age} anos`
        res.appendChild(img)
    }
}