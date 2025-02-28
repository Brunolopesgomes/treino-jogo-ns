let listaDeNumeros = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1 ;
let numeroLimite = 10;
let palavraTentativas = tentativas > 1? 'tentativas': 'tentativa';

function exibirTextoNaTela(tag,texto){
let campoTag = document.querySelector(tag);
campoTag.innerHTML = texto;

}
exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto');
exibirTextoNaTela('p','Escolha um numero de 1 a ' + numeroLimite);

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero de 1 a '+ numeroLimite);
}

function mensagemAcerto(){
    exibirTextoNaTela('h1', `Parabens, o numero secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
    exibirTextoNaTela('p','Escolha novamente entre 1 e '+ numeroLimite);

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

function endGame(){
    if (listaDeNumeros.length == 10 ){
        exibirTextoNaTela('h1', 'zerado');
        exibirTextoNaTela('p', 'Parabens você chegou ao fim do jogo');
        
document.getElementById('reiniciar').setAttribute('disable', true);
    }
}





function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    endGame();
    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
            return numeroEscolhido;
    }
}





function limparCampo(){
chute = document.querySelector('input');
chute.value = '';

}
function reiniciarJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}
