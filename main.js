"use strict"

const botaoTrocarImagem = document.getElementById('trocarfoto')
let numero = 0
let url = ""

function trocarImage(){
    if(numero === 4){
        numero = 0
    }
    numero++
    url = `url(./img/ordem${numero}.png)`
    document.documentElement.style.setProperty('--imagem-fundo' , url)
}

botaoTrocarImagem.addEventListener('click', trocarImage)




