// 1. Mapa de imágenes de la mochila según la categoría
const bagImages = {
    proyectos: 'assets/Mochila_Proyectos.png',
    habilidades: 'assets/Mochila_Habilidades.png',
    educacion: 'assets/Mochila_EducaciónyCursos.png',
    sobreMi: 'assets/Mochila_SobreMi.png',
    contactos: 'assets/Mochila_Contactos.png'
};

// 2. Tus datos organizados
const portfolioData = {
    proyectos: [
        { nombre: "Macchi E-commerce", descripcion: "Tienda online (2025). Proyecto web enfocado en diseño funcional y estética limpia." },
        { nombre: "TPI Data Analytics", descripcion: "Proyecto completo de análisis de datos utilizando Python, Pandas, Matplotlib y Seaborn." }
    ],
    habilidades: [
        { nombre: "Python & Librerías", descripcion: "Manipulación y visualización de datos avanzados." },
        { nombre: "Desarrollo Web", descripcion: "HTML, CSS y JS. Creación de interfaces amigables." },
        { nombre: "Inglés Avanzado", descripcion: "Facilidad para leer documentación técnica y resolver problemas." }
    ],
    educacion: [
        { nombre: "Image Campus", descripcion: "Tecnicatura en Programación Avanzada de Videojuegos (Inscripción para ciclo 2026)." }
    ],
    sobreMi: [
        { nombre: "Gaming & Cultura", descripcion: "Interés profundo en hardware, la saga Fate, y juegos competitivos (Valorant, LoL, Honkai: Star Rail)." },
        { nombre: "Deportes", descripcion: "Cuando no estoy programando, juego al fútbol como arquero." }
    ],
    contactos: [
        { nombre: "GitHub", descripcion: "¡Explora mi código fuente!" },
        { nombre: "LinkedIn", descripcion: "Conectemos profesionalmente." }
    ]
};

// Referencias a los elementos del HTML
const navButtons = document.querySelectorAll('.nav-btn');
const itemList = document.getElementById('item-list');
const dialogText = document.getElementById('dialog-text');
const bagSprite = document.getElementById('bag-sprite'); // Referencia a la imagen
const itemIcon = document.getElementById('item-icon-display');

// Función para mostrar los ítems según la categoría seleccionada
function renderItems(category) {
    itemList.innerHTML = '';
    const items = portfolioData[category];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nombre;
        
        li.addEventListener('click', () => {
            dialogText.textContent = item.descripcion;
        });

        itemList.appendChild(li);
    });
}

// Configurar los botones de navegación
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // --- LÓGICA DE ANIMACIÓN (Corregida) ---
        // 1. Quitamos la clase de animación si ya existía para resetearla
        bagSprite.classList.remove('animate-bag');
        
        // 2. Truco técnico para que el navegador "note" el cambio y pueda reiniciar la animación
        void bagSprite.offsetWidth; 
        
        // 3. Agregamos la clase de animación EXCLUSIVAMENTE a la imagen
        bagSprite.classList.add('animate-bag');

        // --- LÓGICA DE CAMBIO DE DATOS (Lo que ya tenías) ---
        navButtons.forEach(btn => btn.style.color = 'white');
        button.style.color = '#f8e870';

        const category = button.getAttribute('data-category');
        
        renderItems(category);
        
        // Cambiamos la imagen src (esto ocurre justo al inicio de la animación)
        bagSprite.src = bagImages[category];
        
        dialogText.textContent = "¿Qué vas a revisar?";
        itemIcon.innerHTML = ''; 
    });
});

// Inicializar la primera pestaña por defecto
renderItems('proyectos');
navButtons[0].style.color = '#f8e870';