(()=>{"use strict";class t{constructor(t){this.name=t}}const e=document.getElementById("tablaCategorias");var n=[];function o(e){for(let o=0;o<e.length;o++)n.push(new t(e[o]));return n}!async function(){try{const t=await fetch("https://api.chucknorris.io/jokes/categories");if(!t.ok)throw new Error("No se pudo obtener la información de las categorias");const n=await t.json();console.log(n);const c=o(n);!function(t){t.forEach((t=>{const n=document.createElement("tr"),o=document.createElement("td"),c=document.createElement("a");c.href="frase.html",c.textContent=t.name,o.appendChild(c),n.appendChild(o),e.appendChild(n)}))}(c),function(t){const e=JSON.stringify(t);localStorage.setItem("categorias",e)}(c)}catch(t){console.error(t)}}(),e.addEventListener("click",(t=>{const e=t.target;if("A"===e.tagName){const t=e.textContent;localStorage.setItem("categoriaSeleccionada",t)}}));const c=document.getElementById("chiste");document.getElementById("button").addEventListener("click",(()=>{!async function(){try{const t="https://api.chucknorris.io/jokes/random",e=await fetch(t);if(!e.ok)throw new Error("No se pudo obtener la información de las categorias");const n=await e.json();console.log(n),c.textContent=n.value}catch(t){console.error(t)}}()}));const a=document.getElementById("busqueda"),s=document.getElementById("textoBuscar");a.addEventListener("click",(()=>{!function(t){const e=JSON.stringify(t);localStorage.setItem("chistes",e)}(s.value),window.location.href="chiste.html"}))})();