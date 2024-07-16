/* funções em typescript */

function number(num: number): number {
  return num
}

function number2(num: number) {
  return num
}

// funções anônimas com algum retorno específico
(num: number): number => { return num }

// funções anônimas que retornam qualquer tipo
(num: number | string) => { return num }

// tentativa de fazer um algoritmo de busca dentro de um array:

const arrayExemplo: string[] = ["joao", "maria", "claudio"];
const toSearchExemplo: string = "claudio";
function search(array: string[], toSearch: string) {
  for (let arrayString of array) {
    if (arrayString === toSearch) return toSearch
  }
}

const resultado = search(arrayExemplo, toSearchExemplo);

console.log(resultado);
