function adivinhe() {
    var numeroSecreto = parseInt(Math.random() * 11);
    var chute = parseInt(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');

    if (chute == numeroSecreto) {
        resultado.textContent = 'Parabéns você acertou!';
    } else if (chute > 10 || chute < 0 || !chute) {
        resultado.innerHTML =
            'Digite um número entre <strong>0</strong> e <strong>10</strong> para continuiar.';
    } else {
        resultado.innerHTML =
            '<p>Você errou! O número correto era <strong>' +
            numeroSecreto +
            '</strong></p>';
    }
}
