const element = document.getElementById("pulsar");
element.addEventListener("click", saludar);

function saludar() {
    alert("Hello!");
    document.getElementById("pulsar").innerHTML = "Hola!";
}


