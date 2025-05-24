
let personas = [] // array o arreglo vacio para guardar datos

//Esta función se encarga de recoger los valores de los campos del formulario y pasarlos a otra función para validarlos.
function validar(){
    let elementoNombre = document.getElementById("nombre")
    // Busca en el documento HTML el elemento con id="nombre" (posiblemente un <input>), 
    // y lo guarda en la variable elementoNombre.
    let valorIngresadoNombre = elementoNombre.value
    // Extrae el valor ingresado por el usuario en el campo de nombre y lo guarda en valorIngresadoNombre.
    let elementoErrorNombre = document.getElementById("errorNombre")
    // Busca en el documento HTML el elemento con id="errorNombre" (posiblemente un <input>), 
    // y lo guarda en la variable elementoErrorNombre.

    let elementoApellido = document.getElementById("apellido")
    // Busca en el documento HTML el elemento con id="apellido" (posiblemente un <input>), 
    // y lo guarda en la variable elementoApellido.
    let valorIngresadoApellido = elementoApellido.value
    // Extrae el valor ingresado por el usuario en el campo apellido y lo guarda en valorIngresadoApellido.
    let elementoErrorApellido = document.getElementById("errorApellido")
    // Busca en el documento HTML el elemento con id="errorApellido" (posiblemente un <input>), 
    // y lo guarda en la variable elementoErrorApellido.

    // vlm = validar largo minimo
    let vlmNombre = validarLargoMinimo(elementoNombre,valorIngresadoNombre,elementoErrorNombre) 
    let vlmApellido = validarLargoMinimo(elementoApellido,valorIngresadoApellido,elementoErrorApellido)
    // Aquí estás usando (llamando) la función validarLargoMinimo, y le estás pasando valores 
    // reales (también llamados argumentos).
    // elementoNombre → se pasa como valor para el parámetro elemento
    // valorIngresadoNombre → se pasa como valor para el parámetro valorIngresado
    // elementoErrorNombre → se pasa como valor para el parámetro elementoError

    // Estas dos líneas ejecutan una función llamada validarLargoMinimo() 
    // para validar si los campos "nombre" y "apellido" 
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
        // Limpian los campos del formulario después de agregar la persona.
        // Es decir, el usuario verá los campos vacíos para ingresar otra persona.
        console.log(personas)
        // Muestra por consola el array completo personas.
        cargarTablaDatosPersonas()
        // Llama a una función que actualiza una tabla en pantalla para mostrar la lista de personas ingresadas.
    }



}


// Esta función se encarga de verificar si el texto ingresado en un campo 
// tiene un mínimo de caracteres requeridos, en este caso, más de 3.
function validarLargoMinimo(elemento,valorIngresado,elementoError){
    // elemento, valorIngresado y elementoError son nombres de variables internas (también llamadas parámetros)
    // Son como cajas vacías que se llenarán cuando alguien llame a esta función y le pase valores reales.
    // elemento: el input HTML (como el campo nombre o apellido).
    // valorIngresado: el texto que el usuario escribió.
    // elementoError: un contenedor (por ejemplo, un <span> o <div>) donde se puede mostrar un mensaje de error.
    if(valorIngresado.length==0 ){
        // .length mide cuántos caracteres tiene el texto
        // Si el usuario no escribió nada, es decir, texto vacío (longitud 0) la validacion falla.
        elementoError.innerText = "DEBES INGRESAR ALGO" 
        // Se muestra el mensaje de error en la página
        alert("COMPLETA EL CAMPO MALDITA PERUANA")
        return false 
        // La función indica que la validación falló con el return false
    }
    else if(valorIngresado.length > 3){
        // Si el texto tiene más de 3 caracteres, se considera válido
        elementoError.innerText = ""
        // .innerText borra el texto de error, si había uno antes dejando " " vacias
        elemento.style.backgroundColor = "green"
        // .style.backgroundColor cambia el fondo del campo a color verde
        elemento.style.color = "white"
        // .style.color cambia el color del texto dentro del campo a blanco
        return true
        // Todo bien, pasa la validación y la marca como true
    }
    else{
        // Si tiene entre 0 y 3 caracteres, es inválido
        alert("DEBES INGRESAR AL MENOS 3 CARACTERES MALDITA PERUANA")
        elementoError.innerText = "DEBES INGRESAR AL MENOS 3 CARACTERES MALDITA PERUANA"
        // Se muestra el mensaje de error en la página
        elemento.style.backgroundColor = "red"
        // Se pone el fondo del campo en rojo
        elemento.style.color = "white"
        // Y el texto en blanco, para que se vea bien
        return false
        // La validación falla
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

        // index: es el número de posición de ese elemento dentro del array.
        // Es decir, su lugar en la lista: 0, 1, 2, 3...
        // aqui Estás creando un botón con el número del índice (index) incrustado en la función onclick.
        // Gracias al index, cada botón sabe exactamente a qué persona corresponde. Luego, cuando haces clic en 
        // "Eliminar" o "Actualizar", se ejecuta la función con ese index como parámetro.

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

//  esta funcion elimina una persona (nombre + apellido) que está guardada en una posición específica del 
// arreglo personas[], y luego actualizar la tabla que se muestra en pantalla.
// "<td><button onclick='eliminar("+index+")'>Eliminar</button>"+
// la funcion lleva el nombre debido a que en html la columna ingresada se veria asi
// onclick=eliminar(index)
function eliminar(indice){
    // El parámetro indice representa la posición de la persona que quieres borrar del array.
    // indice es el número que tú pasaste al hacer clic en el botón.
    // Por ejemplo: si haces eliminar(0), se eliminará el primer elemento del array personas = [].
    // en este caso indice se refiere a index de: button onclick=eliminar(index) , este almacena la posicion de 
    // la persona en el array personas el cual va incrustado en el boton eliminar
    personas = personas.filter((p,index)=>{
        // Aquí se reemplaza el array original personas con el nuevo array filtrado.
        // Resultado: el array ahora ya no contiene la persona que estaba en esa posición indice.

        // Aquí usamos el método .filter() que sirve para crear un nuevo array a partir de otro, excluyendo ciertos elementos.
        // Lo que está entre paréntesis ((p, index) => { ... }) es una función anónima que se ejecuta una vez por cada persona en el array.
        // p: representa la persona actual que está siendo evaluada.
        // Ejemplo: { nombre: "Laura", apellido: "Fernández" }
        // index: representa la posición de esa persona en el array.
        // Ejemplo: 0, 1, 2, 3...
        console.log(personas)
        if(index != indice){
            return p
        }
        // Aquí se verifica si la posición actual (index) no es igual al indice que se pasó como argumento a la función.
        // Si NO es igual (!=), eso significa que NO es la persona que queremos eliminar → entonces la devolvemos con 
        // return p, para que se quede en el nuevo array.
        // Si es igual, significa que es la persona a eliminar → no hacemos return, 
        // por lo tanto se descarta automáticamente del nuevo array.
        // tecnicamente no se borra, solo no se guarda en el array siendo una manera de "eliminar".

        // ejemplo: al utilizar .filter se filtra el id del array o mejor dicho el id de la persona y se compara junto al id del boton
        // y si coinciden, esa persona no se guarda en el array quedando eliminada
        // ejemplo como se ve: 
        // - aqui se presiona el boton eliminar de persona2
        // 0: <tr><td>persona1</td><td>persona1</td><td><button onclick='eliminar(0)'>Eliminar</button> - aqui no coindiden = se conserva en el array
        // 1: "<tr><td>persona2</td><td>persona2</td><td><button onclick='eliminar(1)'>Eliminar</button> - aqui coinciden = no se guardara "se elimina"
        // coincidico el 1: con el onclick='eliminar(1)' por lo que no se retornan en el nuevo array
    })
    console.log("filtrando")
    console.log(personas)
    cargarTablaDatosPersonas()
    // Llama a una función que redibuja la tabla HTML en pantalla.
    // Esto es fundamental, porque si no lo haces, los datos en pantalla no se actualizan aunque el array haya cambiado.
    // Esta función lee el array personas y crea de nuevo todas las filas <tr> de la tabla.
}