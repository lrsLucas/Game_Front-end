/*fazer os pulos*/ /*faz a  mecanica*/
/*personagem pular ao apertar qualquer tecla*/
const personagem = document.querySelector('.personagem');
const cerca = document.querySelector('.cerca');
const nuvens = document.querySelector('.nuvens')
const score = document.querySelector('.score')

const jump =() => {
    personagem.classList.add('jump');
  
    setTimeout(() =>{
        personagem.classList.remove('jump');
    }, 400);
}

/*loop verificação se o jogador perdeu ou não*/
const loop = setInterval(()=>{
    console.log('loop');/*loop para no final repetir */
    
    /*cost para ao bater permanecer no local os objetos*/
    const cercaPosition = cerca.offsetLeft;
    const nuvensPosition = nuvens.offsetLeft;
    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '');
    console.log(personagemPosition);
        /*lado esquerdo*/      /*lado direito*/      
    if (cercaPosition <= 30 && cercaPosition > -80 && personagemPosition <= 60) {
        /*ao bater parar a animação*/
        cerca.style.animation = 'none';
        cerca.style.left = `${cercaPosition}px`;

        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;

        
        /*tela d morte*/
        personagem.src = './images/game-over.png';
        
        /*limpa o loop qnd o jogo está parado, nao fica gerando coordenadas no console*/
        clearInterval(loop);
    }
}, 10); 

/* timeout para remover o jump e ficar em loop para conseguir ficar pulando*/
document.addEventListener('keydown', jump);
