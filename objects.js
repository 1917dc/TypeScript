/* funções em typescript */
function number(num) {
    return num;
}
function number2(num) {
    return num;
}
// funções anônimas com algum retorno específico
(function (num) { return num; });
// funções anônimas que retornam qualquer tipo
(function (num) { return num; });
// tentativa de fazer um algoritmo de busca dentro de um array:
var arrayExemplo = ["joao", "maria", "claudio"];
var toSearchExemplo = "claudio";
function search(array, toSearch) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var arrayString = array_1[_i];
        if (arrayString === toSearch)
            return toSearch;
    }
}
var resultado = search(arrayExemplo, toSearchExemplo);
console.log(resultado);
