class Fondo {
  constructor() {
    this.x = width - 20;  
    this.y = 0;  
    this.tamaño = height;  
    this.imagenFondo = loadImage('data/Ring.jpg');  
  }

  mostrar() {
    image(this.imagenFondo, 0, 0, width, height);  
    fill(0, 0, 255);  
    rect(this.x, this.y, 20, this.tamaño);  
  }

  alcanzada(jugador) {
    return jugador.x > this.x - 20 && jugador.x < this.x + 20 && jugador.y > this.y && jugador.y < this.y + this.tamaño;
  }
}
