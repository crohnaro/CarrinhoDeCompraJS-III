document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Capturar os valores de entrada (não é necessário para esta lógica, mas mantido para referência)
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Remover a validação e redirecionar diretamente
    window.location.href = 'pagina de compras.html';
});
