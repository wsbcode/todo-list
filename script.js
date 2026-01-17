// Seleciona o campo de texto do HTML onde o usuário digita a tarefa
// O elemento é identificado pelo id "pegaTarefas"
const campoTexto = document.getElementById("pegaTarefas");

// Seleciona a lista (ul ou ol) onde as tarefas serão adicionadas
// O elemento é identificado pelo id "tarefas"
const lista = document.getElementById("tarefas");

// Seleciona o botão responsável por adicionar a tarefa
// O elemento é identificado pelo id "adicionar"
const adicionar = document.getElementById("adicionar");

// Função responsável por criar e adicionar uma nova tarefa na lista
function adicionarTarefa() {
   // Armazena o texto digitado pelo usuário no input
   const textoDigitado = campoTexto.value;

   // Verifica se o campo está vazio
   // Se estiver, mostra um alerta e interrompe a função
   if (campoTexto.value === "") {
      alert("Digite uma tarefa");
      return; // impede que o código abaixo seja executado
   }

   // Cria um novo elemento <li> (item de lista)
   const novaTarefa = document.createElement("li");

   // Define o texto do <li> com o que o usuário digitou
   novaTarefa.innerText = textoDigitado;

   // Adiciona o <li> criado dentro da lista (ul ou ol)
   lista.appendChild(novaTarefa);

   // Limpa o campo de texto após adicionar a tarefa
   campoTexto.value = "";
}

// Adiciona um "ouvinte de evento" ao botão
// Quando o botão for clicado, a função adicionarTarefa será executada
adicionar.addEventListener("click", adicionarTarefa);
