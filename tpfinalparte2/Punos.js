class Puño {
  constructor(nivel) {
    this.x = width;  
    this.y = random(1, height); 
    this.velocidad = 3 + nivel;  
    this.radio = 30;  
    this.imagenGuante = loadImage('data/guante.png');  
  }

  mover() {
    this.x -= this.velocidad; 
  }

  mostrar() {
    image(this.imagenGuante, this.x - this.radio, this.y - this.radio, this.radio * 2, this.radio * 2);
  }

  choca(jugador) {
    let distanciaCirculo = dist(jugador.x, jugador.y, this.x, this.y);
    return distanciaCirculo < this.radio;
  }
}
