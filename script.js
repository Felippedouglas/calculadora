function numero(numero) {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado + numero;

    if (resultado == Infinity) {
        document.getElementById("resultado").innerHTML = numero;
    }
}

function operadores(operadores) {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado + operadores.replace('*', 'x');

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
    var pegarValor = parseFloat(document.getElementById("total-de-calculos").innerHTML);
    if (resultado) {
        resultado = resultado.replace('x', '*')
        calculo = eval(resultado)
        document.getElementById("resultado").innerHTML = calculo;
        document.getElementById("ultimo-calculo").innerHTML =  "<br>" + resultado + " = " + calculo + "<br>" + addHistorico;
        document.getElementById("total-de-calculos").innerHTML = pegarValor + 1;
        document.getElementById("ultimo-calculo-externo").innerHTML =  "<br>" + resultado + " = " + calculo + "<br>" + addHistorico;
        document.getElementById("total-de-calculos-externo").innerHTML = pegarValor + 1;
    }
}

function abrirHistorico() {
    document.getElementById("historico-calculo").style.display = "flex";
    document.getElementById("table").style.display = "none";
}

function fecharHistorico() {
    document.getElementById("historico-calculo").style.display = "none";
    document.getElementById("table").style.display = "flex";
}

function limparHistorico() {
    document.getElementById("ultimo-calculo").innerHTML = '';
    document.getElementById("total-de-calculos").innerHTML = '0';
    document.getElementById("ultimo-calculo-externo").innerHTML = '';
    document.getElementById("total-de-calculos-externo").innerHTML = '0';
}

function abrirHistoricoExterno() {
    document.getElementById("historico-calculo-externo").style.display = "flex"
    document.getElementById("historico-calculo-externo").style.height = "450px"
    document.getElementById("historico-calculo-externo").style.marginLeft = "5px"
    document.getElementById("historico-calculo").style.display = "none";
    document.getElementById("table").style.display = "flex";
    document.getElementById("abrir-historico").setAttribute("disabled", "");
}

function fecharHistoricoExterno() {
    document.getElementById("historico-calculo-externo").style.display = "none"
    document.getElementById("historico-calculo").style.display = "flex";
    document.getElementById("table").style.display = "none";
    document.getElementById("abrir-historico").removeAttribute("disabled", "");
}