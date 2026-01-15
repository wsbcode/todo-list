// Selecionado elementos do HTML e adicionando em variáveis

const campoTexto = document.getElementById("tarefas");
const adicionar = document.getElementById("adicionar");
const remover = document.getElementById("remover");

// Input para receber valor digitado
function valorInput() {
   // armazena o texto do input
   const valorDigitado = campoTexto.value;
   console.log(valorDigitado);

   // limpa o campo apos adicionar tarefa
   campoTexto.value = "";
}
// Botão adicionar tarefas
adicionar.addEventListener("click", () => {
   valorInput();
});

// Botão para remover tarefas
remover.addEventListener("click", valorInput);
