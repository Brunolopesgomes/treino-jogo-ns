
let listaDeNumerosSorteados = [];

function exibirTextoNaTela(tag,texto){
let campoTag = document.querySelector(tag);
campoTag.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1','Bem vindo ao jogo do numero Secreto');
exibirTextoNaTela('p','Escolha um Numero de 1 a 10 ');

let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random()* 10 + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  
  if(quantidadeDeElementosNaLista == 10){
    listaDeNumerosSorteados = [];
  }


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function verificarChute(){
    let chute = document.querySelector('input').value;

    let palavraTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';

        if (chute == numeroSecreto){
            exibirTextoNaTela('h1','Parabens você Acertou');
            exibirTextoNaTela('p','O numero secreto era '+ numeroSecreto +' com '+ tentativa + ' ' + palavraTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else if(chute < numeroSecreto){
           exibirTextoNaTela('h1', 'Você errou, o numero é maior que '+ chute);
           exibirTextoNaTela('p', 'Escolha novamente entre 1 a 10');
        
        }
        if(chute > numeroSecreto){
            
           exibirTextoNaTela('h1', 'Você errou, o numero é menor que'+ chute);
           exibirTextoNaTela('p', 'Escolha novamente entre 1 a 10');

        }
    tentativa = tentativa + 1;
    limparCampo();
}

function limparCampo(){
chute = document.querySelector('input');
chute.value ='';

}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Bem vindo ao jogo do numero Secreto');
    exibirTextoNaTela('p','Escolha um Numero de 1 a 10 ');
}


function reiniciarJogo(){
    exibirMensagemInicial();
    limparCampo();
    numeroSecreto = gerarNumeroAleatorio();
document.getElementById('reiniciar').setAttribute('disabled',true);


} 