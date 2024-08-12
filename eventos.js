//para el click del boton
function saludar() {
    alert("Hola!");
}

// mensaje del div
function saludar2(event) {
    // Check if the click was inside the button, if not, show the alert
    if (!event.target.closest("#pulsar")) {
        alert("Hola soy el div!");
    }
}

// funcionalidad del div
const container = document.getElementById("container");
container.addEventListener("click", saludar2);

// funcionalidad del boton
const button = document.getElementById("pulsar");
button.addEventListener("click", saludar);