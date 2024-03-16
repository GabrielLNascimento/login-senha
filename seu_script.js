// Credenciais válidas (usuário e senha)
var credenciais = {
    "gabriel": "1234",
    "usuario2": "senha2"
};

// Função para verificar as credenciais
function verificarCredenciais(usuario, senha) {
    // Verifica se o usuário existe nas credenciais e se a senha corresponde
    return credenciais[usuario] === senha;
}

// Captura o formulário e o elemento de mensagem
var formLogin = document.getElementById('loginForm');
var mensagem = document.getElementById('mensagem');

// Adiciona um ouvinte de evento de envio ao formulário
formLogin.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém o usuário e a senha inseridos pelo usuário
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    // Verifica as credenciais
    if (verificarCredenciais(usuario, senha)) {
        window.location.href = '../index.html'; // Exibe mensagem de sucesso
        // Aqui você pode redirecionar o usuário para outra página
        // Por exemplo: window.location.href = 'outra_pagina.html';
    } else {
        mensagem.textContent = 'Usuário ou senha incorretos. Por favor, tente novamente.'; // Exibe mensagem de erro
    }
});