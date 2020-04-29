let img = document.getElementsByTagName('img')[0]
let msg = document.getElementById('msg')
let date = new Date()
let hour = date.getHours()

function loadPage() {
    if (hour <= 12) {
        img.src = './imagens/dia.jpg'
        document.body.style.background = '#A68988'
        msg.innerHTML = `São ${hour} horas, bom dia!`
    } else if (hour <= 18) {
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#F2BE4A'
        msg.innerHTML = `São ${hour} horas, boa tarde!`
    } else if (hour <= 22) {
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#151C32'
        msg.innerHTML = `São ${hour} horas, boa noite!`
    }
}
