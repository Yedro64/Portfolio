function mostrarSeccion(nombreSeccion) {
    // Ocultar todas las secciones
    let secciones = document.querySelectorAll('.seccion-about');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });

    // Mostrar la sección correspondiente al botón seleccionado
    let seccionSeleccionada = document.querySelector(`.${nombreSeccion}`);
    seccionSeleccionada.style.display = 'block';

    // Eliminar la clase 'seleccionado' de todos los botones
    let botones = document.querySelectorAll('.boton');
    botones.forEach(boton => {
        boton.classList.remove('seleccionado');
    });

    // Agregar la clase 'seleccionado' al botón seleccionado
    event.target.classList.add('seleccionado');
}