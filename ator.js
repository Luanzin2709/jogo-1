//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false
let colisao3 = false
let meusPontos = 0

//oponente
let xAtorOponente = 390;
let yAtorOponente = 366;
let colisao2 = false
let colisao4 = false
let pontosDoOponente = 0

function mostraAtor(x,y){
  image(imagemDoAtor,x,y,30,30)
}

function movimentaAtor(){
  if (keyIsDown(87)){
    yAtor -= 3;
    yAtor = constrain(yAtor,5,310) 
  }
  if(keyIsDown(83)){
    yAtor += 3;
    yAtor = constrain(yAtor,10,366)
  }
  if(keyIsDown(68)){
    xAtor +=3;
    xAtor = constrain(xAtor,5,470)
  }
  if(keyIsDown(65)){
    xAtor -=3;
    xAtor = constrain(xAtor,0,470)
  }
}

function verificaColisao(){
   for (let i = 0; i < imagemCarros1.length; i +=1)
   for (let j = 0; j < imagemCarros2.length; j++){
   colisao = collideRectCircle(xCarros1[i],yCarros1[i], comprimentoCarro, alturaCarro,xAtor, yAtor,15) || collideRectCircle(xCarros2[j], yCarros2[j], comprimentoCarro, alturaCarro, xAtor, yAtor,15)
   if(colisao){
   voltaAtorPraPosicaoInicial();
   somColisao.play();
   if (colisao) {
   meusPontos -= 1
   if(meusPontos <0){
   meusPontos = 0
     
}
   }
   }
   }
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos +=1;
  somPonto.play();
  voltaAtorPraPosicaoInicial();
  }
}

function voltaAtorPraPosicaoInicial(){
  yAtor = 366;
}
  

function mostraAtorOponente(){
image(imagemDoAtorOponente,xAtorOponente,yAtorOponente,30,30)
}

function movimentaAtorOponente(){
  if (keyIsDown(UP_ARROW)){
    yAtorOponente -= 3;
    yAtorOponente = constrain(yAtorOponente,5,310) 
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtorOponente += 3;
    yAtorOponente = constrain(yAtorOponente,10,366)
  }
   if(keyIsDown(39)){
    xAtorOponente +=3;
    xAtorOponente = constrain(xAtorOponente,5,470)
  }
  if(keyIsDown(37)){
    xAtorOponente -=3;
    xAtorOponente = constrain(xAtorOponente,0,470)
  }
}

function verificaColisaoOponente(){
   for (let i = 0; i < imagemCarros1.length; i +=1)
   for (let j = 0; j < imagemCarros2.length; j++){
   colisao2 = collideRectCircle(xCarros1[i],yCarros1[i], comprimentoCarro, alturaCarro,xAtorOponente, yAtorOponente,15)|| collideRectCircle(xCarros2[j], yCarros2[j], comprimentoCarro, alturaCarro, xAtorOponente, yAtorOponente,15)
   if(colisao2){
   voltaAtorOponentePraPosicaoInicial();{
   somColisao.play();
   if (colisao2) {
   pontosDoOponente -= 1
   if(pontosDoOponente <0){
   pontosDoOponente = 0
   
         }
       }
     }
   }
 }     
}
  function marcaPontosDoOponente(){
  if (yAtorOponente < 15){
  pontosDoOponente +=1;
  somPonto.play();
  voltaAtorOponentePraPosicaoInicial();
  }
}

function voltaAtorPraPosicaoInicial(){
  yAtor = 366;
} 
  
function voltaAtorOponentePraPosicaoInicial(){
  yAtorOponente = 366
}



