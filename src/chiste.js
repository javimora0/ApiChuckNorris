import { Frase } from './clases.js';

const arrayChistes = [];
var chistes = ''; // Declarada como variable global

async function apiUrlTexto() {
    try {
        recogerChiste();
        const apiUrlTexto = 'https://api.chucknorris.io/jokes/search?query=' + chistes;

        const response = await fetch(apiUrlTexto);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información de las categorías');
        }
        const data = await response.json();
        console.log(data);
        const chiste = guardarChiste(data);
        generarTabla(chiste);
    } catch (error) {
        console.error(error);
    }
}

function recogerChiste() {
    const chistesJSON = localStorage.getItem('chistes');
    chistes = JSON.parse(chistesJSON);
}

function guardarChiste(data) {
    const chistesArray = [];
    data.result.forEach((chiste) => {
        chistesArray.push(new Frase(chiste.value));
    });
    return chistesArray; // Agregado return
}

function generarTabla(chiste) {
    const tablaChiste = document.getElementById('tablaChiste');
    chiste.forEach((value) => {
        const fila = document.createElement('tr');

        // Columna de los chistes
        const columnaChiste = document.createElement('td');
        columnaChiste.textContent = value.value;

        // Agrega las columnas a la fila
        fila.appendChild(columnaChiste);

        // Agrega la fila a la tabla
        tablaChiste.appendChild(fila);
    });
}

apiUrlTexto(); // Llamada después de la definición de apiUrlTexto
