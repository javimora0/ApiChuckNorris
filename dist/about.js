(()=>{"use strict";const o=document.getElementById("frase");new class{constructor(o){this.value=o}};var t="https://api.chucknorris.io/jokes/random?category="+localStorage.getItem("categoriaSeleccionada");!async function(){try{const e=await fetch(t);if(!e.ok)throw new Error("No se pudo obtener la información de las categorías");const a=await e.json();console.log(a),function(t){o.textContent=t.value}(a)}catch(o){console.error(o)}}()})();