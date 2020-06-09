function actualizar(number) {
    const input = document.getElementById("textNumber");
    input.value += number;
}

function raiz() {
    const input = document.getElementById("textNumber");
    input.value = Math.sqrt(input.value);

}

function result() {
    const input = document.getElementById("textNumber");
    try {
        input.value = eval(input.value);
    } catch (error) {
        const span = document.getElementById("textError");
        span.innerText = "expresion malformada"

    }


}

function borrar() {
    const input = document.getElementById("textNumber");
    input.value = 0;
}

function retur() {
    const input = document.getElementById("textNumber");
    input.value = input.value.substring(0, input.value.length - 1)

}