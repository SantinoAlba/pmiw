//Comision 1//
//Santino Alabarracin y Martin Bonoris//
//https://youtu.be/OpSWEDUh1zM//
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
