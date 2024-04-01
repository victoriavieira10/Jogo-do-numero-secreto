let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas  = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou!');
        let palavraTentativas = tentativas > 1?'tentativas':'tentativas';
        let mensagemTentativas =  `Voce descobriu o numero secreto com  ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p','o Numero secreto e menor ');}
          else{
                exibirTextoNaTela('p','O numero secreto e maior');
            }
            tentativas++;
            limparCampo();
        }

        }

    
function gerarNumeroAleatorio() {
let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite){
    listadeNumerosSorteados = [];
}
if(listadeNumerosSorteados.includes(NumeroEscolhido)){
    return gerarNumeroAleatorio();
}else{
    listadeNumerosSorteados.push(NumeroEscolhido);
    console.log(listadeNumerosSorteados)
    return NumeroEscolhido;
}
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}












