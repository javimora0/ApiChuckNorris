import { Categoria } from './clases.js';

const apiUrl = 'https://api.chucknorris.io/jokes/categories';
var categorias = [];
obtenerCategorias();

function generarTabla(data) {
    const tablaPilotos = document.getElementById('tablaCategorias');

    data.forEach((categoria) => {

        const fila = document.createElement('tr');
        // Columna de la cats 
        const columnaCats = document.createElement('td');        
        columnaCats.textContent = `Categoria: ${categoria.name}`;


        // Agrega las columnas a la fila
        fila.appendChild(columnaCats);

        // Agrega la fila a la tabla
        tablaPilotos.appendChild(fila);
    });
}

async function obtenerCategorias() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la informaciónde las categorias');
        }
        const data = await response.json();
        console.log(data);
        const categorias = guardarCategorias(data);
        generarTabla(categorias)
        navegar(categorias);
    } catch (error) {
        console.error(error);
    }
}


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



function obtenerCategoriasDesdeLocalStorage() {
    const categoriasJSON = localStorage.getItem('categorias');
    categorias = JSON.parse(categoriasJSON);
}