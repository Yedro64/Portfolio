document.addEventListener('scroll', function() {
   // console.log('scroll detectado');
    var elemento = document.querySelector('.element-aparecer');
    var posicionElemento = elemento.getBoundingClientRect().top;

    var alturaPantalla = window.innerHeight;

    // Ajusta estos valores según sea necesario para controlar cuándo quieres que aparezca el elemento.
    if (posicionElemento < alturaPantalla * 0.50) {
        elemento.classList.add('aparecer');
    } else {
        elemento.classList.remove('aparecer');
    }
});

