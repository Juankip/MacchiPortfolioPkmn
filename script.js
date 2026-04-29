const bagImages = {
    proyectos: 'assets/Mochila_Proyectos.png',
    habilidades: 'assets/Mochila_Habilidades.png',
    educacion: 'assets/Mochila_EducaciónyCursos.png',
    sobreMi: 'assets/Mochila_SobreMi.png',
    contactos: 'assets/Mochila_Contactos.png'
};

const portfolioData = {
    proyectos: [
        { 
            nombre: "La Verdulería de Teto", 
            descripcion: "Proyecto frontend: Página web ficticia desarrollada con HTML, CSS y JS. <a href='https://juankip.github.io/La-verduleria-de-teto/' target='_blank'>[Ver código]</a>",
            icono: "assets/icon-html.png" 
        },
        { 
            nombre: "Análisis de Datos", 
            descripcion: "Proyecto de análisis y manipulación de datos en Google Colab utilizando Pandas. <a href='https://colab.research.google.com/drive/16nbbUx7tiCqJHq6NEUK87a_d4ohKdysB#scrollTo=FHVl1QPkte0x' target='_blank'>[Ver código]</a>",
            icono: "assets/icon-GoogleCollab.png"
        }
    ],
    habilidades: [
        { nombre: "Data & Backend", descripcion: "Python, Pandas, C++ y MySQL.", icono: "assets/icon-python.png" },
        { nombre: "Desarrollo Web", descripcion: "HTML, CSS y JavaScript.", icono: "assets/icon-JavaScript.png" },
        { nombre: "Soft Skills", descripcion: "Pensamiento analítico, lógica, atención al detalle y aprendizaje autodidacta.", icono: "assets/icon-Logica.png" },
        { nombre: "Idiomas", descripcion: "Inglés C1 Avanzado y Español Nativo.", icono: "assets/icon-Argentina.png" },
        { nombre: "Ofimática", descripcion: "Microsoft Word, Excel y PowerPoint Avanzado (Paquete Office).", icono: "assets/icon-Office.png" }
    ],
    educacion: [
        { 
            nombre: "Programación & Web", 
            descripcion: "Certificados: <a href='./Multimedia/Certificados/Certificado_Front_EndJS.pdf' target='_blank'>[Front-End JS]</a> <a href='./Multimedia/Certificados/Diploma_CAC.pdf' target='_blank'>[Prog. Inicial Codo a Codo]</a> <a href='./Multimedia/Certificados/Certificado_Cobol.pdf' target='_blank'>[Intro a Cobol]</a> <a href='./Multimedia/Certificados/SOA_Python.pdf' target='_blank'>[Python]</a>", 
            icono: "assets/icon-code.png" 
        },
        { 
            nombre: "Data e IA", 
            descripcion: "Certificados: <a href='./Multimedia/Certificados/DataAnalytics.pdf' target='_blank'>[Data Analytics]</a> <a href='./Multimedia/Certificados/SOA_CienciaDatos.pdf' target='_blank'>[Ciencia de Datos]</a> <a href='./Multimedia/Certificados/IntroduccionIA.pdf' target='_blank'>[Intro a IA]</a> <a href='./Multimedia/Certificados/SOA_Gemini.pdf' target='_blank'>[Google: IA y Productividad]</a>", 
            icono: "assets/icon-chart.png" 
        },
        { 
            nombre: "Negocios & Tech", 
            descripcion: "Certificados: <a href='./Multimedia/Certificados/SOA_Ecommerce.pdf' target='_blank'>[E-Commerce]</a> <a href='./Multimedia/Certificados/curso_santander___habilidades_digitales_para_el_siglo_xxi.pdf' target='_blank'>[Hab. Digitales s.XXI]</a> <a href='./Multimedia/Certificados/SOA_PowerBI.pdf' target='_blank'>[Power BI]</a> <a href='./Multimedia/Certificados/SOA_Excel.pdf' target='_blank'>[Excel]</a> <a href='./Multimedia/Certificados/SOA_IoT.pdf' target='_blank'>[Internet de las Cosas]</a>", 
            icono: "assets/icon-book.png" 
        },
        { 
            nombre: "Idiomas & Soft Skills", 
            descripcion: "Certificados: <a href='./Multimedia/Certificados/AgHa_Ingles.pdf' target='_blank'>[Inglés Nivel Int. 1]</a> <a href='./Multimedia/Certificados/SOA_Ingles.pdf' target='_blank'>[Business English]</a> <a href='./Multimedia/Certificados/SOA_CommEstrat.pdf' target='_blank'>[Comunicación Estratégica]</a> <a href='./Multimedia/Certificados/SOA_Psico.pdf' target='_blank'>[Comportamiento Consumidor]</a>", 
            icono: "assets/icon-chat.png" 
        }
    ],
    sobreMi: [
        { nombre: "Perfil Profesional", descripcion: "Estudiante de Análisis en Sistemas. Altamente motivado, atento al detalle y con fuertes habilidades lógicas.", icono: "assets/icon-user.png" },
        { nombre: "Experiencia Laboral", descripcion: "Digitador en MANPOWER Argentina (2023 y 2025). Gestión de datos, mecanografía y análisis.", icono: "assets/icon-work.png" }
    ],
    contactos: [
        { nombre: "LinkedIn", descripcion: "¡Conectemos para futuras oportunidades! <a href='https://www.linkedin.com/in/juan-sebastián-macchi-441191230/' target='_blank'>[Mi Perfil]</a>", icono: "assets/icon-linkedin.png" },
        { nombre: "Email y Celular", descripcion: "juasemacchi@gmail.com | (011) 3559-5106", icono: "assets/icon-mail.png" },
        { nombre: "Ubicación", descripcion: "Capital Federal, Buenos Aires, Argentina.", icono: "assets/icon-maps.png" }
    ]
};

const navButtons = document.querySelectorAll('.nav-btn');
const itemList = document.getElementById('item-list');
const dialogText = document.getElementById('dialog-text');
const bagSprite = document.getElementById('bag-sprite');
const itemIcon = document.getElementById('item-icon-display');

// --- Efecto de sonido retro ---
const selectSound = new Audio('assets/gba_sound.mp3');
selectSound.volume = 0.3; // Volumen al 30% para que sea agradable

function renderItems(category) {
    itemList.innerHTML = '';
    const items = portfolioData[category];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nombre;
        
        li.addEventListener('click', () => {
            // Actualiza el texto
            dialogText.innerHTML = item.descripcion;
            
            // Actualiza el ícono si existe
            if (item.icono) {
                // Inyectamos la imagen con la clase pixel-art para que no se vea borrosa
                itemIcon.innerHTML = `<img src="${item.icono}" alt="${item.nombre}" style="width: 100%; height: 100%; object-fit: contain;" class="pixel-art">`;
            } else {
                itemIcon.innerHTML = ''; // Lo deja vacío si por algún motivo no le pusiste ícono
            }
        });

        itemList.appendChild(li);
    });
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Reproducir el sonido
        selectSound.currentTime = 0; 
        selectSound.play().catch(error => console.log("El navegador bloqueó el audio", error));

        // Animación de la mochila
        bagSprite.classList.remove('animate-bag');
        void bagSprite.offsetWidth; 
        bagSprite.classList.add('animate-bag');

        // Estilos de los botones
        navButtons.forEach(btn => btn.style.color = 'white');
        button.style.color = '#f8e870';

        const category = button.getAttribute('data-category');
        
        renderItems(category);
        
        // Cambiar mochila y resetear texto/ícono
        bagSprite.src = bagImages[category];
        dialogText.innerHTML = "¿Qué vas a revisar?";
        itemIcon.innerHTML = ''; // Limpia el ícono al cambiar de bolsillo
    });
});

renderItems('proyectos');
navButtons[0].style.color = '#f8e870';
