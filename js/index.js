const imagens = document.querySelectorAll('.js-list li')
const textos = document.querySelectorAll('.js-conteudo section')

console.log(imagens)
console.log(textos)

function ativarConteudo(indice){
    textos.forEach((item) => {
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, indice) =>{
    item.addEventListener('click', () =>{
        ativarConteudo(indice)
    })
})



const perguntas = document.querySelectorAll('.texto_faq .js-subtitulo')
const respostas = document.querySelectorAll('.js-resposta .resposta')

console.log(perguntas)
console.log(respostas)

function ativarRespostas(indice){
    respostas[indice].classList.add('active')
}

function removerRespostas(indice) {
    perguntas[indice].addEventListener('click', () => {
        if (respostas[indice].classList.contains('active')) {
            respostas[indice].classList.remove('active');
        }
        else {
            respostas[indice].classList.add('active');
        }
    });
}

perguntas.forEach((item, indice)=>{
    item.addEventListener('click', ()=>{
        ativarRespostas(indice)
        removerRespostas(indice)
    })
})
