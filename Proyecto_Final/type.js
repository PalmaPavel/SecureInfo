// Contenido de tu archivo: carrusel.js
const slides = document.querySelectorAll('.portada-slide');
let indiceActual = 0;

function cambiarSlide() {
    slides[indiceActual].classList.remove('active');
    indiceActual = (indiceActual + 1) % slides.length;
    slides[indiceActual].classList.add('active');
}

// Cambia automáticamente cada 4 segundos
setInterval(cambiarSlide, 4000);