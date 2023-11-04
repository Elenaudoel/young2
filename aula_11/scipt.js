// PEGAR NOTA
let data = new Date()
console.log(data.getHours())
let hora = window.prompt('que horas sao?')

let msg = document.getElementById('msg')
let img = document.getElementById('foto')
let corpo = document. getElementsByTagName('body')


let manha = 'https://i.pinimg.com/736x/8e/81/e7/8e81e795b09eebe6d76313105fa0d32d.jpg'
let tarde = 'https://classic.exame.com/wp-content/uploads/2020/04/whatsapp-image-2020-04-15-at-18.07.35.jpeg?quality=70&strip=info&w=960'
let noite = 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Ibirapuera_Sampa.jpg'

msg.innerHTML = `Agora são exatamente ${hora} horas.`

if (hora >= 4 && hora < 12)
{
    corpo[0].style.background = '#ef9e2d'
   img.src = manha
}
else if (hora <= 18) {
    corpo[0].style.background = '#ee5412'
    img.src = tarde
}
else {
    corpo[0].style.background = '#002a36'
    img.src = noite
}

