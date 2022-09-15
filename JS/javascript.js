function adivinhe() {
    var numeroSecreto = parseInt(Math.random() * 11);
    var chute = parseInt(document.getElementById('valor').value);
    var resultado = document.getElementById('resultado');

    if (chute == numeroSecreto) {
    } else if (chute > 10 || chute < 0) {
        resultado.textContent =
            'Digite um número entre 0 e 10 para continuiar.';
    } else {
        console.log('Você errou');
    }
}
