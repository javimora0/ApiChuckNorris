import { Categoria } from './clases.js';

const tablaCategorias = document.getElementById('tablaCategorias');
const apiUrl = 'https://api.chucknorris.io/jokes/categories';

var categorias = [];

obtenerCategorias();

function generarTabla(data) {
    data.forEach((categoria) => {
        const fila = document.createElement('tr');
        
        // Columna de las categorías
        const columnaCats = document.createElement('td');
        
        // Crear un enlace (<a>) y configurar su atributo "href" con la categoría como URL
        const enlace = document.createElement('a');
        enlace.href = 'frase.html';
        enlace.textContent = categoria.name;

        // Agregar el enlace al contenido de la columna
        columnaCats.appendChild(enlace);

        // Agrega las columnas a la fila
        fila.appendChild(columnaCats);

        // Agrega la fila a la tabla
        tablaCategorias.appendChild(fila);
    });
}

async function obtenerCategorias() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las categorias');
        }
        const data = await response.json();
        console.log(data);
        const categorias = guardarCategorias(data);
        generarTabla(categorias);
        navegar(categorias);
    } catch (error) {
        console.error(error);
    }
}

// Agrega un evento de clic a los enlaces dentro de la tabla
tablaCategorias.addEventListener('click', (event) => {
    const enlaceClicado = event.target; //https://developer.mozilla.org/es/docs/Web/API/Event/target

    // Verifica si el elemento clicado es un enlace (<a>)
    if (enlaceClicado.tagName === 'A') {
        const categoriaNombre = enlaceClicado.textContent;

        // Guarda el nombre de la categoría en el Local Storage
        localStorage.setItem('categoriaSeleccionada', categoriaNombre);
    }
});

function guardarCategorias(data) {
    for (let i = 0; i < data.length; i++) {
        categorias.push(new Categoria(data[i]));
    }
    return categorias;
}

function navegar(categorias) {
    const categoriasJSON = JSON.stringify(categorias);
    localStorage.setItem('categorias', categoriasJSON);
}

async function apiUrlRandom() {
    try {
        const apiUrlRandom = 'https://api.chucknorris.io/jokes/random';

        const response = await fetch(apiUrlRandom);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las categorias');
        }
        const data = await response.json();
        console.log(data);
        chiste.textContent = data.value;
    } catch (error) {
        console.error(error);
    }
}

const chiste = document.getElementById('chiste');
const boton = document.getElementById('button');

boton.addEventListener('click', () => { 
    apiUrlRandom();
});

const busqueda = document.getElementById('busqueda');
const textoBuscar = document.getElementById('textoBuscar');
busqueda.addEventListener('click', () => { 
    navegarChiste(textoBuscar.value);
    window.location.href = 'chiste.html';
});

function navegarChiste(chiste) {
    const chisteJSON = JSON.stringify(chiste);
    localStorage.setItem('chistes', chisteJSON);
}
