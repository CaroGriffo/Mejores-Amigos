
let amigos = [];


const input = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");


function actualizarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


function agregarAmigo() {
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  amigos.push(nombre);
  input.value = "";
  actualizarLista();
  resultado.innerHTML = ""; 
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero agrega al menos un nombre.");
    return;
  }
  const idx = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[idx];
  resultado.innerHTML = `<li>🎉 El mejor amigo elegido es: <strong>${elegido}</strong></li>`;
}


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregarAmigo();
});
