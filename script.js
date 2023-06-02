/*1) A ModalGR possui um sistema em desenvolvimento que recebe uma palavra/frase, a partir disso exibir a quantidade de letra(s) “a” minúscula(s) presentes nessa palavra/frase
Entrada: Ana Maria da Silva Coração Saída: Quantidade de letras “a” minúscula: 6
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! Após a finalização exibir em tela a mensagem no padrão exigido.
Observação:  Ignorar letra “a” com acentuação.*/

let palavraChave = "Ana Maria da Silva Coração";
let letras = 0;

for (let i = 0; i < palavraChave.length; i++) {
  if (palavraChave[i] == "a") {
    letras = letras + 1;
  }
}

console.log(`Quantidade de letras "a" minúscula: ${letras}`);

/*2) A ModalGR possui um sistema em desenvolvimento que recebe dois vetores de 20 números inteiros. A partir desses valores armazenar em um terceiro vetor números que se repetem, por exemplo:
Entradas: a = [1, 2, 3, ... ] e b = [4, 2, 4, ... ] Saída: [2]
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! Após a finalização exibir em tela os valores do terceiro vetor.
Observações:  Valores repetidos no mesmo vetor não devem ser armazenados no vetor final;  Caso o vetor ”a” contenha dois ou mais números repetidos e no vetor “b” contenha uma ou mais ocorrências desse valor, deve-se armazenar no vetor
final apenas uma ocorrência dessa situação.*/

/*3) A ModalGR possui um sistema em desenvolvimento e numa parte específica será necessário separar dados numéricos de strings, a partir de uma variável do tipo string contendo diversos valores delimitados por vírgula, como por exemplo:
Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978, A, VIVA, 35, 125, 8999, ...Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! Após a separação dos dados exibi-los em tela.
Observação:  O tamanho da string com os dados base é variável, ou seja, não possui um limite fixo.*/
