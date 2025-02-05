// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para añadir amigo, getElementsById sirve para obtener un elemento del DOM (HTML) por su id
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    

    //Excepción si no se ingresa amigo
    if (amigo === "") {
        alert("Debes ingresar un amigo");
        return;
    }
    //Excepción si se repite amigo
    if (amigos.includes(amigo)) {
        alert("Este amigo ya fue agregado");
        return;
    }

    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos();
}

//Función para actualizar lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

//Función para validar sorteo de amigos
function sortearAmigos() {
    if (amigos.length < 3) {
        alert("Deben haber al menos 3 amigos en la lista para realizar sorteo");
        return;
    }

    let asignaciones = {};
    let copiaAmigos = [...amigos];

   

    //comprobar que no se asignen a sí mismos
    let intentos = 0;
    while (intentos < 100) {
        let valido = true;
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === copiaAmigos[i]) {
                valido = false;
                break;
            }
        }
        if (valido) break;
        copiaAmigos = copiaAmigos.sort(() => Math.random() - 0.5);
        intentos++;
    }

    if (intentos >= 100) {
        alert("No se puede realizar el sorteo");
        return;

    }

    //Asignar los amigos
    amigos.forEach((amigo, index) => {
        asignaciones[amigo] = copiaAmigos[index];
    });

    mostrarResultados(asignaciones);
}

//Función para realizar sorteo

//function realizarSorteo() {
//    const copiaAmigos = [...amigos];
//    const asignaciones = {};
//
//    for (let amigo of amigos) {
//        let opciones = [...copiaAmigos];
//        const elegido = opciones[Math.floor(Math.random() * opciones.length)];
//
//        asignaciones[amigo] = elegido;
//
//        //Comprobando que no haya conflictos
//        if (Object.keys(asignaciones).length === amigos.length) {
//            return asignaciones;
//        }
//
//
//
//        const valoresUnicos = new Set(Object.values(asignaciones));
//        if (valoresUnicos.size < amigos.length) {
//            return null;
//        }
//    }
//    return asignaciones;
//}

function mostrarResultados(asignaciones) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} le regala a ${asignado}`;
        resultado.appendChild(li);

    }
}

