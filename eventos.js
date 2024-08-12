const element = document.getElementById("pulsar");
element.addEventListener("click", saludar);

function saludar() {
    alert("Hola!");
    document.getElementById("pulsar").innerHTML = "Hola!";
}


