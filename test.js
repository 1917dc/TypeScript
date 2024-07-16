var contaAluno = /** @class */ (function () {
    function contaAluno(nome, id, cpf) {
        this.nome = nome;
        this.id = id;
        this.cpf = cpf;
    }
    return contaAluno;
}());
var aluno = new contaAluno("Teste", 1, "01");
/* declarando unions */
function getLength(obj) {
    return obj.length;
}
/* posso fazer uma função retornar valores diferentes dependendo de condições */
function wrapinArray(obj) {
    if (typeof obj == "string") {
        return [obj];
    }
    return obj;
}
var pessoa = "Teste";
console.log(typeof (wrapinArray(pessoa)));
console.log(typeof (pessoa));
