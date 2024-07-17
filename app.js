alert('Bem vindo ao jogo do numero secreto!');

let numeroMaximo = prompt('Escolha o número máximo:')

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while ( chute != numeroSecreto ) {
    chute = prompt(`Qual o numero secreto entre 1 e ${numeroMaximo}?`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

document.getElementById('texto').innerHTML = `
<h1>Você <span class="container__texto-azul">acertou!</span></h1>
<h2>Você descobriu o número secreto!</h2>
`;

alert(`Parabéns, você acertou o número secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
