let xCarros1 = [600,600,600];
let xCarros2 = [600,600,600];
let yCarros1 = [40, 96, 150];
let yCarros2 = [210,270,318];
let veloxCarros1 = [2,3,4,]
let veloxCarros2 = [-2,-3,-4]                   
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros1.length; i++){
   image(imagemCarros1 [i], xCarros1[i], yCarros1[i],comprimentoCarro,alturaCarro)
   }
   for (let j = 0; j < imagemCarros2.length; j++){
   image(imagemCarros2 [j], xCarros2[j], yCarros2[j],comprimentoCarro,alturaCarro)
} 
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros1.length; i +=1){
  xCarros1[i] -= veloxCarros1[i];
  }
  for (let j = 0; j < imagemCarros2.length; j++){
   xCarros2[j] -= veloxCarros2[j];
} 
}

function voltaPosicaoIncialDoCarro(){
  for (let i = 0; i < imagemCarros1.length; i +=1){
  if (passouTodaATela(xCarros1[i])){
    xCarros1[i] = 600
   }
  }
  for (let j = 0; j < imagemCarros2.length; j++){
   if (passouTodaATela2(xCarros2[j])){
  xCarros2[j] = 0
   }
  }  
}

function passouTodaATela(xCarros1){
  return xCarros1 < -45
}

 function passouTodaATela2(xCarros2){
   return xCarros2 > 600
}





