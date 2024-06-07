// variáveis da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 15;
let raio = diametro / 2;



// velocidade da bolinha 
let velocidadexbolinha = 6;
let velocidadeybolinha = 6;

let colidiu = false;

//variáveis da raquete 
let xraquete = 5;
let yraquete = 150;
let raquetelargura = 10;
let raquetealtura = 90;
let meuespontos = 0;
let pontosoponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrabolinha();
  rect(xraquete,vraquete,raquetelargura,raquetealtura);
  movimentabolinha();
  mostraraquete(xraqueteoponenete,yraqueteoponenete0;
  movimentaminharaquete();
  verificacolisaoborda();
  verificacolisaoraquete();
  
  function movimentabolinha(){
    
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
    
  function verificacolisaoborda(){ 
    
  if (xbolinha + raio > width || xbolinha < 0) {
  velocidadexbolinha *= - 1;
    
   if (ybolinha + raio > height || ybolinha < 0) {
  velocidadeybolinha *= - 1;
       
  }
}

function mostrabolinha() {
  circle(xbolinha,ybolinha,diametro);  
  
}
    
function movimentaraquete(){
   if(keyisdown(UP_ARROW)){
   yraquete -= 10;    
}
   if(keyisdown(DOWN_ARROW)){
   yraquete += 10;  
     
   }
  
function verificacolisaoraquete(x,y){
  if(xbolinha-raio < xraquete + raquetelargura 
  && ybolinha - raio < yraquete + raquetealtura
  && ybolinha + raio > yraquete)
 {
 velocidadexbolinha *= - 1;       
  }
  function incluiplacar(){
    
  }
  
