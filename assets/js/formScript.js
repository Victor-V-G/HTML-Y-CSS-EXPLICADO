

//Esta función se encarga de recoger los valores de los campos del formulario y pasarlos a otra función para validarlos.
function validar(){
    let elementoNombre = document.getElementById("nombre")
    //Busca en el documento HTML el elemento con id="nombre" (posiblemente un <input>), y lo guarda en la variable elementoNombre.
    let valorIngresadoNombre = elementoNombre.value
    //Extrae el valor ingresado por el usuario en el campo de nombre y lo guarda en valorIngresadoNombre.
    let elementoErrorNombre = document.getElementById("errorNombre")

    let elementoApellido = document.getElementById("apellido")
    let valorIngresadoApellido = elementoApellido.value
    let elementoErrorApellido = document.getElementById("errorApellido")

    verificarLargoMinimo(elementoNombre,valorIngresadoNombre,elementoErrorNombre)
    verificarLargoMinimo(elementoApellido,valorIngresadoApellido,elementoErrorApellido)
}


function verificarLargoMinimo(elemento,valorIngresado,elementoError){
    if(valorIngresado.length==0 ){
        console.log("Debes completar este campo")
        alert("COMPLETA EL CAMPO MALDITA PERUANA")
    }
    else if(valorIngresado.length > 3){
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