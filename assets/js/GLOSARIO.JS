// glosario:
//
//  1. let  =  Una palabra clave que declara una variable., 
//  Ejemplo: let nombre = "Juan";
//  Aquí estás creando una variable llamada nombre que guarda el texto "Juan".
//  
//  2. .value = Una propiedad que se usa para obtener o establecer el contenido de un elemento de formulario (como un <input> o <textarea>).
//  Ejemplo: let nombre = document.getElementById("nombre").value;
//  Aquí estás diciendo:
//  “Busca el elemento con id="nombre" y dame su valor y almacenalo en la variable nombre”.
//  Si un input tiene esto en HTML:
//  <input id="nombre" value="Ana">
//  Entonces .value será "Ana".
//
//  3. document = Es un objeto global que representa el documento HTML cargado en la página.
//  Te permite acceder, leer y modificar elementos del DOM (Document Object Model).
//  Ejemplo:
//  document.getElementById("titulo")
//  Esto busca un elemento del HTML que tenga id="titulo".
//
//  4. .getElementById() = Una función que pertenece al objeto: document
//  esta busca en la página un elemento con el id que le indiques.
//  Ejemplo:
//  let campo = document.getElementById("apellido");
//  Busca en el HTML un elemento con id="apellido" y lo guarda en la variable campo.
//
//  5. .innerText =  Una propiedad que pertenece a los elementos HTML.
//  Permite leer o cambiar el texto visible que contiene un elemento en la página.
//  Ejemplo:
//  document.getElementById("mensaje").innerText = "¡Hola, mundo!";
//  Busca el elemento con id="mensaje" y cambia su texto interno por "¡Hola, mundo!".
//  ejemplo: si pones un parrafo : <p id="mensaje">  </p> el innerText lo dejara asi: <p id="mensaje"> ¡Hola, mundo! </p>




//  [].push() agrega al final del arreglo
//  [].unshift() agrega al principop del arreglo
//  [].pop() saca el ultimo
//  [].shift() saca el ultimo y lo lleva al final
//  [].filter() busca elemento por conincidencia
//  [].map( () => ) recore un array y que retorna segun () para convertir valores  || es igual a for x in element
//  [].join("-") convierte una lista a un string uniendolos
//  [].concat([]) agreaga una concatenacion
//  [[]].flat() aplana y reduce a una dimesnion, por ejemplo dos listado en una lista
//  [].slice(1,2)  agarra los items de una lista como una rebanada de pastel

