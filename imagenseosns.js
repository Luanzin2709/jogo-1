let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro
let imagemCarro2
let imagemCarro3
let imagemDoAtorOponente

let somTrilha
let somColisao
let somPonto

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png")
  imagemDoAtor = loadImage ("imagens/ator-1.png")
  imagemCarro = loadImage("imagens/carro-1.png")
  imagemCarro2 = loadImage("imagens/carro-2.png")
  imagemCarro3 = loadImage("imagens/carro-3.png")
  imagemDoAtorOponente = loadImage ("imagens/ator-1.png")
  imagemCarros1 = [imagemCarro,imagemCarro2, imagemCarro3],
  imagemCarros2 = [imagemCarro,imagemCarro2, imagemCarro3];
  
  somTrilha = loadSound ("sons/trilha (online-audio-converter.com).wav")
  somColisao = loadSound ("sons/colidiu (online-audio-converter.com).wav")
  somPontos = loadSound ("sons/pontos (online-audio-converter.com) (1).wav")
}
