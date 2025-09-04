let nome = prompt("Whats your name?")
alert('Ola ' + nome + ', seja bem-vindo?')


// Exemplo de inicialização
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Projeto carregado com sucesso!");
  
  const app = document.getElementById("app");

  // Exemplo de conteúdo inicial
  const msg = document.createElement("p");
  msg.textContent = "Aqui vai a lógica do projeto.";
  app.appendChild(msg);
});
