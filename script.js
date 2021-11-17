function numero(numero) {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado + numero;

    if (resultado == Infinity) {
        document.getElementById("resultado").innerHTML = numero;
    }
}

function operadores(operadores) {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado + operadores;

    if (!resultado) {
        document.getElementById("resultado").innerHTML = "";
    }

    else if (resultado == Infinity) {
        document.getElementById("resultado").innerHTML = "";
    }
}

function limpar() {
    document.getElementById("resultado").innerHTML = "";
}

function voltar() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length - 1)

    if (resultado == Infinity) {
        document.getElementById("resultado").innerHTML = "";
    }
}

function resultadoFinal() {
    var resultado = document.getElementById("resultado").innerHTML;
    var addHistorico = document.getElementById("ultimo-calculo").innerHTML;
    document.getElementById("ultimo-calculo").innerHTML = "<br>" + "<br>" +resultado + " = " + eval(resultado) + addHistorico
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado)
    }
}

function abrirHistorico() {
    document.getElementById("historico-calculo").style.display = "flex"
    document.getElementById("table").style.display = "none"
}

function fecharHistorico() {
    document.getElementById("historico-calculo").style.display = "none"
    document.getElementById("table").style.display = "flex"
}