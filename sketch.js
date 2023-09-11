function setup() {
    createCanvas(500,400);
    somTrilha.loop()
    
    }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor(xAtor,yAtor);
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoIncialDoCarro();
    verificaColisao();
    incluiPontos();
    marcaPontos();
    //mostraAtorOponente(xAtorOponente,yAtorOponente);
    //movimentaAtorOponente();
    //verificaColisaoOponente ();
    //incluiPontosOponente();
    //marcaPontosDoOponente ();
  }
  
  function incluiPontos(){
    textAlign(CENTER);
    textSize(25)
    fill(255,255,0)
    rect(79,3,44,27)
    fill(0,0,255)
    text(meusPontos,width/5,25)
  }
  
  function incluiPontosOponente(){
    textAlign(CENTER);
    textSize(25)
    fill(255,255,0)
    rect(380,3,44,27)
    fill(0,0,255)
    text(pontosDoOponente,402,25)
  }
  
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
    imagemCarros1 = [imagemCarro,imagemCarro2, imagemCarro3],
    imagemCarros2 = [imagemCarro,imagemCarro2, imagemCarro3];
    imagemDoAtorOponente = loadImage ("imagens/ator-1.png")
    somTrilha = loadSound("sons/trilha (online-audio-converter.com).wav");
    somColisao = loadSound ("sons/colidiu (online-audio-converter.com).wav")
    somPonto = loadSound ("sons/pontos (online-audio-converter.com) (1).wav")
  } 
  
    
  