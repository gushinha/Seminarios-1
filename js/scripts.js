let valor1, valor2, resultado;
function logoff(){
    window.open("login.html");
}
function abrirdadospessoais(){
    window.open("dados_pessoais.html");
}
function abrirexperiencias(){
    window.open("experiencias.html");
}
function abrirformacao(){
    window.open("formacao.html");
}
function abrirmenu(){
    window.open("menu.html");
}
function receberValores(){
    valor1 = document.getElementById("valor1").value;
    valor2 = document.getElementById("valor2").value;
}
function somar(){
    receberValores();
    resultado = parseFloat(valor1) + parseFloat(valor2);
    calculadora(resultado);
}
function subtrair(){
    receberValores();
    resultado = parseFloat(valor1) - parseFloat(valor2);
    calculadora(resultado);
}
function multiplicar(){
    receberValores();
    resultado = parseFloat(valor1) * parseFloat(valor2);
    calculadora(resultado);
}
function dividir(){
    receberValores();
    resultado = parseFloat(valor1) / parseFloat(valor2);
    calculadora(resultado);
}
function calculadora(resultado){
        document.getElementById("demo").innerHTML = resultado;
}