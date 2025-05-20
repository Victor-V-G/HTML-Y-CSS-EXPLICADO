
let personas = [] // array o arreglo vacio para guardar datos

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

    // vlm = validar largo minimo
    let vlmNombre = validarLargoMinimo(elementoNombre,valorIngresadoNombre,elementoErrorNombre) 
    let vlmApellido = validarLargoMinimo(elementoApellido,valorIngresadoApellido,elementoErrorApellido)
    // Estas dos líneas ejecutan una función llamada validarLargoMinimo() para validar si los campos "nombre" y "apellido" 
    // tienen al menos cierta cantidad de caracteres.
    // El resultado de cada validación (true o false) se guarda en las variables vlmNombre y vlmApellido.

    if (vlmNombre == true && vlmApellido == true){
    // Esta condición se cumple solo si los dos campos están bien validados (es decir, si ambas funciones devolvieron true).
        let persona = {
            nombre : valorIngresadoNombre,
            apellido : valorIngresadoApellido
        }
        // almacena una persona (nombre y apellido) mediante {} que es un objeto, 
        // Un objeto en JavaScript es una estructura que te permite agrupar datos relacionados en un solo lugar, usando clave: valor (key: value).
        // con las dos propiedades: nombre y apellido
        // nombre: que toma valor de la variable valorIngresadoNombre
        // apellido: que toma valor de la variable valorIngresadoApellido

        personas.push(persona)
        // Esta línea agrega el objeto persona al array personas.
        // Eso significa que estás guardando los datos validados en una lista.
        elementoNombre.value = ""
        elementoApellido.value = ""
        console.log(personas)
        cargarTablaDatosPersonas()
    }



}


function validarLargoMinimo(elemento,valorIngresado,elementoError){
    if(valorIngresado.length==0 ){
        console.log("Debes completar este campo")
        alert("COMPLETA EL CAMPO MALDITA PERUANA")
        return false
    }
    else if(valorIngresado.length > 3){
        console.log("ESTA BUENO")
        elementoError.innerText = ""
        elemento.style.backgroundColor = "green"
        elemento.style.color = "white"
        return true
    }
    else{
        console.log("ERROR, TE FALTARON CARACTERES MALDITA PERUANA")
        alert("DEBES INGRESAR AL MENOS 3 CARACTERES MALDITA PERUANA")
        elementoError.innerText = "DEBES INGRESAR AL MENOS 3 CARACTERES MALDITA PERUANA"
        elemento.style.backgroundColor = "red"
        elemento.style.color = "white"
        return false
    }
}


// Define una función llamada cargarTablaDatosPersonas, que se encarga de mostrar los datos almacenados en el arreglo
// personas dentro de una tabla HTML.
function cargarTablaDatosPersonas(){
    let tablaDatosPersonas = document.getElementById("tablaDatosPersonas")
    //  Usa document.getElementById(...) para obtener el elemento de la página HTML con id="tablaDatosPersonas" (seguramente una <tbody> o <table>).
    //  El resultado se guarda en la variable tablaDatosPersonas.
    let personasMap = personas.map((p,index)=>{
        // El método .map() sirve para recorrer el array: personas = []
        // En cada vuelta, p representa a una persona (es decir, un objeto con nombre y apellido, siendo key : value)
        // index es la posición de esa persona en el array (0, 1, 2, ...), y se usará para identificar cada fila (por ejemplo, para eliminarla o actualizarla).
        // Entonces, en personas.map((p, index) => { ... }), cuando el map recorre el array personas, en cada vuelta:
        // p toma uno de esos objetos { nombre: ..., apellido: ... }
        // p.nombre accede al valor asociado a la clave nombre que es el mismo valor que tenía la variable valorIngresadoNombre cuando 
        // se creó el objeto y este pasado por la validacion.
        // p.apellido accede al valor asociado a la clave apellido que es el mismo valor que tenía la variable valorIngresadoApellido cuando 
        // se creó el objeto y este pasado por la validacion.
        // por lo que personasMap sera un array, Porque .map() SIEMPRE devuelve un nuevo array.
        return "<tr><td>"+p.nombre+"</td>"+
                "<td>"+p.apellido+"</td>"+
                "<td><button onclick='eliminar("+index+")'>Eliminar</button>"+
                "<button onclick='cargarDatos("+index+")'>Actualizar</button>"+
                "</td></tr>"
                //  .map() recorre cada persona (p) y retorna una cadena HTML (<tr>...</tr>) por cada una.
                //  Así que el resultado es un nuevo array de strings HTML, uno por persona:
                //  [   
                //    "<tr><td>Ana</td><td>Gómez</td>...botones</td></tr>",
                //    "<tr><td>Luis</td><td>Torres</td>...botones</td></tr>"
                //  ]
                // Este array de filas HTML se guarda en la variable personasMap.
    })
    console.log("Convirtiendo...")
    console.log(personasMap)
    let personasStr = personasMap.join("")
    //  .join("") convierte el array personasMap (que contiene varios strings con filas HTML) en un solo string sin separadores.
    //   Esto es necesario porque .innerHTML solo acepta un string plano, no un array.
    tablaDatosPersonas.innerHTML = personasStr
    //  Esta línea actualiza el contenido de la tabla en la página web.
    //  Inserta todas las filas generadas dinámicamente dentro del elemento con id tablaDatosPersonas.
    //  Esto permite que cada vez que agregas una nueva persona, se muestre automáticamente en la tabla sin recargar la página.

}