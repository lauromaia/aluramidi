function tocaSom(seletorDeAudio){
    const elemento = document.querySelector(seletorDeAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAuto = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAuto);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

})


