
let limite=10;
let tentativas=0;
let listaNumeroSecreto= [];
let numeroSecreto=gerarNumeroSecreto(listaNumeroSecreto);

var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];

exibirMensagemInicial();

//funtions
function InserirCampo(tag,texto) {
  let campo= document.querySelector(tag);
  campo.innerHTML=texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female");
}
function limparCampo() {
  let chute=document.querySelector('input');
  chute.value='';
}
function verificarChute(){

  let chute='0';
  chute=document.querySelector('input').value;
  tentativas++;

  if (chute==numeroSecreto) {
    InserirCampo('h1','Acertou');
    tentativas++;
    let palavra=tentativas>1?'tentativas':'tentativa';
    let mensagem=`Você descobriu o numero secreto com ${tentativas} ${palavra}`;
    InserirCampo('p',mensagem);
    document.getElementById('reiniciarBtn').removeAttribute('disabled');

  } else {
    InserirCampo('h1','Errou');
    let maiorMenor=numeroSecreto>chute?'maior':'menor';
    InserirCampo('p','O numero secreto é '+maiorMenor+' tente de novo');
    limparCampo()
  }
}


// Função para gerar um número secreto único
function gerarNumeroSecreto(listaNumero=[]) {
  /*
  let numeroEscolhido = parseInt(Math.random() * limite + 1);
  console.log("tamnho: "+listaNumeroSecreto.length);
  console.log("lista:"+listaNumeroSecreto.toString());
  if (listaNumeroSecreto.length==limite) {
    listaNumeroSecreto=[];
  }

  if(listaNumeroSecreto.includes(numeroEscolhido)){
    gerarNumeroSecreto(listaNumeroSecreto);
  }else{
    listaNumeroSecreto.push(numeroEscolhido);
    return numeroEscolhido;
  }*/

  let numeroEscolhido;
    
    
  numeroEscolhido = parseInt(Math.random() * limite + 1);
    
    
  return numeroEscolhido;
}


function exibirMensagemInicial() {
  InserirCampo('h1','Jogo do Numero Sereto');
  InserirCampo('p','Escolha um numero de  1 a '+limite);
}
function reiniciarJogo(){
  numeroSecreto=gerarNumeroSecreto(listaNumeroSecreto);
  limparCampo();
  tentativas=0;
  exibirMensagemInicial();
  document.getElementById('reiniciarBtn').setAttribute('disabled',false);
}
