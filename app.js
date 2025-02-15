let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

let tentativas = 1 ;
let palavraTentativas = tentativas > 1? 'tentativas': 'tentativa';

function exibirTextoNaTela(tag,texto){
let campoTag = document.querySelector(tag);
campoTag.innerHTML = texto;

}
exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero de 1 a 10');

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero de 1 a 10');
}

function mensagemAcerto(){
    exibirTextoNaTela('h1', `Parabens, o numero secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
    exibirTextoNaTela('p','Escolha novamente entre 1 e 10');

}

 

function verificarChute(){
let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){ 
    mensagemAcerto();
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
            if(chute < numeroSecreto){
                
                exibirTextoNaTela('h1', `Quase, o numero secreto é maior que ${chute}`);
                exibirTextoNaTela('p','Escolha novamente entre 1 e 10');


            }
            if(chute > numeroSecreto){
                exibirTextoNaTela('h1', `Quase, o numero secreto é menor que ${chute}`);
                exibirTextoNaTela('p','Escolha novamente entre 1 e 10');


            }
        tentativas++;
        limparCampo();
        }


} 

function gerarNumeroAleatorio(){
  return parseInt(Math.random() * 10 + 1)
}

function limparCampo(){
chute = document.querySelector('input');
chute.value = '';

}
function reiniciarJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true)
}