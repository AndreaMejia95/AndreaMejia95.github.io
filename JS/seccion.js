// TODO: Sección para hacer que aparezca/desaparezca secciones de la página
const images = document.querySelectorAll('.hero__figure');

function triggerAnimation(entries){
    entries.forEach(entry => {
        const image = entry.target.querySelector('img');
        image.classList.toggle('unset', entry.isIntersecting); //Agrego la clase de css si es true
    });
}

const options = {
    root: null,             //Contenedor que detectará el scroll cuando estemos en el área
    rootMargin: '0px',      //Margen que agregamos a ese contenedor de detección
    threshold: 0            //El observador
}
const observer = new IntersectionObserver(triggerAnimation, options);
images.forEach(image => {
    observer.observe(image);  //Asignamos el elemento que se deberá observar
});
//observer.observe(element);  //Asignamos el elemento que se deberá observar

