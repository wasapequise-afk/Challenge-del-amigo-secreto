// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    input.focus();
    resultado.innerHTML = "";
    mostrarLista();
}

function mostrarLista() {
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "✖";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.setAttribute("aria-label", `Eliminar ${amigo}`);
        btnEliminar.addEventListener("click", () => {
            amigos.splice(index, 1);
            mostrarLista();
        });

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") agregarAmigo();
});
