// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Función para añadir amigo
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

//Función para sortear amigos
function sortearAmigos() {
    if (amigos.length < 3) {
        alert("Deben haber al menos 3 amigos en la lista para realizar sorteo");
    }

    const asignaciones = {};
    const copiaAmigos = [...amigos];

    amigos.forEach((amigo) => {
        let opciones = copiaAmigos.filter(opcion => opcion !== amigo);    

        if (opciones.length === 0) {
            alert("No se puede realizar el sorteo");
            return;
        }

        const elegido = opciones[Math.floor(Math.random() * opciones.length)];
        asignaciones[amigo] = elegido;
        copiaAmigos.splice(copiaAmigos.indexOf(elegido), 1);
    });

    mostrarResultados(asignaciones);
}

//Función para mostrar resultados
function mostrarResultados(asignaciones) {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = '';

    for (const [amigo, asignado] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} le regala a ${asignado}`;
        resultados.appendChild(li);
    }


}


