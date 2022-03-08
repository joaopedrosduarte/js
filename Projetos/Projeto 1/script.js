var data = new Date()
var hora = data.getHours()
var time = document.querySelector('#time')
var img = document.querySelector('#img')

function run(){
    time.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        img.src = './public/AmanhacerC.png'
        document.body.style.background = '#7EA9AD'
    } else if (hora > 12 && hora < 18){
        img.src = './public/EntardecerC.png'
        document.body.style.background = '#A2555E'
        document.body.style.color = 'white'
        time.style.color = 'black'
    } else {
        img.src = './public/AnoitecerC.png'
        document.body.style.background = '#3E4364'
        document.body.style.color = 'white'
        time.style.color = 'black'
    }
}