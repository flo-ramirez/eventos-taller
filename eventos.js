const element = document.getElementById("pulsar");
element.addEventListener("click", saludar);

function saludar() {
    alert("Hola!");
}

const element2 = document.getElementsByTagName("div");
element.addEventListener("click", saludar2);

function saludar2(){
    alert("Hola soy el div!");
}
