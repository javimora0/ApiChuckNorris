import { Categoria } from "./clases.js";
import { Frase } from "./clases.js";

const frase = document.getElementById('frase');
const chiste = new Frase();
const categoriaSeleccionada = localStorage.getItem('categoriaSeleccionada');
var apiUrl = "https://api.chucknorris.io/jokes/random?category=" + categoriaSeleccionada;
obtenerCategorias();

async function obtenerCategorias() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las categorías');
        }
        const data = await response.json();
        console.log(data);
        
        crearChiste(data);
    } catch (error) {
        console.error(error);
    }
}

function crearChiste(data) { 
    frase.textContent = data.value;
}
