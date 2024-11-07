// Obtém o botão e o parágrafo onde a mensagem será exibida
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    mensagem.textContent = "Você clicou no botão!";  // Mostra a mensagem no parágrafo
});
