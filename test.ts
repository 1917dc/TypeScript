interface Aluno {
  nome: string;
  id: number;
  cpf: string;
}

class contaAluno {
  nome: string;
  id: number;
  cpf: string;

  constructor(nome: string, id: number, cpf: string) {
    this.nome = nome;
    this.id = id;
    this.cpf = cpf;
  }
}

const aluno: Aluno = new contaAluno("Teste", 1, "01");


/* declarando unions */

function getLength(obj: string | string[]) {
  return obj.length;
}

/* posso fazer uma função retornar valores diferentes dependendo de condições */
function wrapinArray(obj: string | string[]) {
  if (typeof obj == "string") {
    return [obj];
  }
  return obj;
}

const pessoa = "Teste"
console.log(typeof (wrapinArray(pessoa)))
console.log(typeof (pessoa))

// generics são formas de especificar tipos de objetos vazios:

type StringArray = Array<string>;
type NumberArray = Array<number>;


