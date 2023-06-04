/*1) A ModalGR possui um sistema em desenvolvimento que recebe uma palavra/frase, a partir disso exibir a quantidade de letra(s) “a” minúscula(s) presentes nessa palavra/frase
Entrada: Ana Maria da Silva Coração Saída: Quantidade de letras “a” minúscula: 6
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! Após a finalização exibir em tela a mensagem no padrão exigido.
Observação:  Ignorar letra “a” com acentuação.*/

let palavraChave = "Ana Maria da Silva Coração";

//forma simples
let letrasA = 0;
for (let i = 0; i < palavraChave.length; i++) {
  if (palavraChave[i] == "a") {
    letrasA = letrasA + 1;
  }
}

//com função
function contadorLetraA(frase) {
  let letras = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == "a") {
      letras = letras + 1;
    }
  }

  return letras;
}

console.log(
  `Quantidade de letras "a" minúscula: ${contadorLetraA(palavraChave)}`
); //com função

console.log(`Quantidade de letras "a" minúscula: ${letrasA}`); //forma simpes

/*2) A ModalGR possui um sistema em desenvolvimento que recebe dois vetores de 20 números inteiros. A partir desses valores armazenar em um terceiro vetor números que se repetem, por exemplo:
Entradas: a = [1, 2, 3, ... ] e b = [4, 2, 4, ... ] Saída: [2]
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! Após a finalização exibir em tela os valores do terceiro vetor.
Observações:  Valores repetidos no mesmo vetor não devem ser armazenados no vetor final;  Caso o vetor ”a” contenha dois ou mais números repetidos e no vetor “b” contenha uma ou mais ocorrências desse valor, deve-se armazenar no vetor
final apenas uma ocorrência dessa situação.*/

let listaA = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let listaB = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 20, 28, 30, 20, 34, 36, 38, 20,
];
let listaC = [];

function verificandoDuplicidade(num) {
  let duplicidade = false;
  for (let i = 0; i < listaC.length; i++) {
    if (num == listaC[i]) {
      duplicidade = true;
      break;
    }
  }
  return duplicidade;
}

for (let i = 0; i < listaA.length; i++) {
  for (let j = 0; j < listaB.length; j++) {
    if (listaA[i] === listaB[j]) {
      if (!verificandoDuplicidade(listaA[i])) {
        listaC.push(listaA[i]);
      }
    }
  }
}

console.log(listaC);

/*3) A ModalGR possui um sistema em desenvolvimento e numa parte específica será necessário separar dados numéricos de strings, a partir de uma variável do tipo string contendo diversos valores delimitados por vírgula, como por exemplo:
Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999, ...Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! Após a separação dos dados exibi-los em tela.
Observação:  O tamanho da string com os dados base é variável, ou seja, não possui um limite fixo.*/

let listaDeDados = [
  "Ana",
  89,
  78,
  "Maria",
  45.8,
  27,
  56,
  "Paula Pereira",
  978,
  "A",
  "VIVA",
  35,
  125,
  8999,
];
let listaNums = [];
let listaString = [];

for (let i = 0; i < listaDeDados.length; i++) {
  if (typeof listaDeDados[i] === "number") {
    listaNums.push(listaDeDados[i]);
  } else {
    listaString.push(listaDeDados[i]);
  }
}

console.log(listaNums);
console.log(listaString);
