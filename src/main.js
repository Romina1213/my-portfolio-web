import './style.css'
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos el botón del menú de hamburguesa y el menú de navegación
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Verificamos que ambos elementos existan en la página
    if (menuToggle && navLinks) {
        // Agregamos un "escuchador de eventos" al botón de hamburguesa
        menuToggle.addEventListener('click', () => {
            // Cuando se hace clic, alternamos la clase 'active' en el menú de navegación
            navLinks.classList.toggle('active');
        });
    }
});