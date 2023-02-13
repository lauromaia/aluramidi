function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

listaDeTeclas.forEach(tecla => {
    const instrumento = tecla.classList[1];
    const idAuto = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAuto);
    }

})


