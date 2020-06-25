function actualizar(number) {
    const input = document.getElementById("textNumber");
    input.value += number;
}

function raiz() {
    const input = document.getElementById("textNumber");
    input.value = Math.sqrt(input.value);

}

function result() {
    const span = document.getElementById("textError");
    const input = document.getElementById("textNumber");
    try {
        input.value = eval(input.value);
        span.innerText = ""
    } catch (error) {
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

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.getElementById("reloj").innerText = horaImprimible;

    
}

setInterval(mueveReloj, 1000);