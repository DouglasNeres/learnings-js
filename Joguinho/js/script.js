const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const posicaoPipe = pipe.offsetLeft
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (posicaoPipe <= 120 && posicaoPipe > 0 && posicaoMario < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${posicaoPipe}px`

        pipe.style.animation = 'none'
        pipe.style.bottom = `${posicaoMario}px`

        pipe.style.animation = 'none'
        pipe.style.bottom = `${posicaoMario}px`
        
        mario.src = './imgs/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop)
        alert('GAME OVER, TENTE NOVAMENTE!')
        const btn = document.querySelector("#refresh")
        btn.addEventListener('click', () => {
            location.reload()
        })
        
    }

}, 10)
document.addEventListener('click', jump)

/*APLICANDO ENTRER AO BOTAO*/
/* document.addEventListener('keypress', function(e){
    if (e.key === "Enter") {
        const btn = document.querySelector("#refresh")
        btn.click()
    }
})
 */