//Comision 1//
//Martin Bonoris y Santino Albarracin//
//https://youtu.be/1tjvmDZlaJE//
let juego;

function setup() {
  createCanvas(640, 480);  
  juego = new Juego(); 
}

function draw() {
  background(0);  
  juego.actualizar();  
  juego.mostrar();  
}
