// glosario:
//
//  1. let  =  Una palabra clave que declara una variable., 
//  Ejemplo: let nombre = "Juan";
//  Aquí estás creando una variable llamada nombre que guarda el texto "Juan".
//  
//  2. .value = Una propiedad que se usa para obtener o establecer el contenido de un elemento de formulario (como un <input> o <textarea>).
//  Ejemplo: let nombre = document.getElementById("nombre").value;
//  Aquí estás diciendo:
//  “Busca el elemento con id="nombre" y dame su valor”.
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



//Esta función se encarga de recoger los valores de los campos del formulario y pasarlos a otra función para validarlos.
function validar(){
    let elementoNombre = document.getElementById("nombre")
    //Busca en el documento HTML el elemento con id="nombre" (posiblemente un <input>), y lo guarda en la variable elementoNombre.
    let verificarNombre = elementoNombre.value
    //Extrae el valor ingresado por el usuario en el campo de nombre y lo guarda en verificarNombre.
    let elementoErrorNombre = document.getElementById("errorNombre")

    let elementoApellido = document.getElementById("apellido")
    let verificarApellido = elementoApellido.value
    let elementoErrorApellido = document.getElementById("errorApellido")

    verificarLargoMinimo(elementoNombre,verificarNombre,elementoErrorNombre)
    verificarLargoMinimo(elementoApellido,verificarApellido,elementoErrorApellido)
}

function verificarLargoMinimo(elemento,verificar,elementoError){
    if(verificar.length==0 ){
        console.log("Debes completar este campo")
        alert("COMPLETA EL CAMPO MALDITA PERUANA")
    }
    else if(verificar.length > 3){
        console.log("ESTA BUENO")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
    }
    else{
        console.log("ERROR, TE FALTARON CARACTERES MALDITA PERUANA")
        alert("DEBES INGRESAR AL MENOS 3 CARACTERES MALDITA PERUANA")
        elementoError.innerText = "DEBES INGRESAR AL MENOS 3 CARACTERES MALDITA PERUANA"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
    }
}