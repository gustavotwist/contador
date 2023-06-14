function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'copia 1.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'copia 3.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'copia 2.png'
        document.body.style.background = '#515154'
    }
}