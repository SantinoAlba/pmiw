class Puño {
  constructor(nivel) {
    this.x = width; 
    this.y = random(1, height);  
    this.velocidad = 3 + nivel;  
    this.radio = 30;  
    this.anchoRectangulo = 30; 
    this.altoRectangulo = 15;  
  }

  mover() {
    this.x -= this.velocidad;  
  }

  mostrar() {
    fill(255, 0, 0);  
    ellipse(this.x, this.y, this.radio * 2, this.radio * 2);
    rect(this.x, this.y - this.altoRectangulo / 2, this.anchoRectangulo, this.altoRectangulo);
  }

  choca(jugador) {
    let distanciaCirculo = dist(jugador.x, jugador.y, this.x, this.y);
    let colisionCirculo = distanciaCirculo < this.radio;  
    let colisionRectangulo = jugador.x + jugador.ancho > this.x && jugador.x < this.x + this.anchoRectangulo &&
                              jugador.y + jugador.alto > this.y - this.altoRectangulo / 2 && jugador.y < this.y + this.altoRectangulo / 2;
                              
    return colisionRectangulo || colisionCirculo;
  }
}
