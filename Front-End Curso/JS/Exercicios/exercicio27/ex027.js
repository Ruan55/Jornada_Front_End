function Adicionar() {

  // 1. Pega o elemento de input onde o usuário digita o texto.
  const input = document.getElementById("texto-input");

  // 2. Pega o valor (o texto) que está dentro do input.
  const textoDoInput = input.value;

  // 3. Verifica se o usuário realmente digitou algo.
  if (textoDoInput.trim() === "") {
    alert("Por favor, digite algo no campo de texto.");
    return; // Para a execução da função se o campo estiver vazio.
  }

  // 4. Pega o elemento de lista (<ul>) onde o novo item será adicionado.
  const lista = document.getElementById("lista");

  // 5. Cria um novo elemento <li>.
  const li = document.createElement("li");

  // 6. Define o texto do <li> como o texto que pegamos do input.
  li.textContent = textoDoInput;

  // 7. Adiciona o novo <li> à lista <ul>.
  lista.appendChild(li);

  // 8. Limpa o campo de input para a próxima adição e foca nele.
  input.value = "";
  input.focus();
  
}
