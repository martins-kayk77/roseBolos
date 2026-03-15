function mudarSlide(botao,direcao){

const carousel = botao.parentElement
const imagens = carousel.querySelectorAll('img')

let atual = 0

imagens.forEach((img,index)=>{

if(img.classList.contains('ativo')){
atual=index
img.classList.remove('ativo')
}

})

let novo = atual + direcao

if(novo < 0) novo = imagens.length - 1
if(novo >= imagens.length) novo = 0

imagens[novo].classList.add('ativo')

}