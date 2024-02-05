var lastScrollTop = 0;

document.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('.header-container');

    if (scrollPosition > lastScrollTop) {
        // Scrolling hacia abajo
        header.style.backgroundColor = '#3b3b3b94'; // Transparente al bajar
    } else {
        // Scrolling hacia arriba
        var opacity = Math.min(1, 1.0 + scrollPosition / 500); // Limita la opacidad a un máximo de 1
        header.style.backgroundColor = 'rgba(51, 51, 51, ' + opacity + ')';
    }

    lastScrollTop = scrollPosition;
});