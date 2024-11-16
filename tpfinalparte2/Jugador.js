class Jugador {
  constructor() {
    this.x = 100; 
    this.y = height / 2;  
    this.tamañoCuerpo = 30;  
  }

  
  mostrar() {
    fill(255);  
    ellipse(this.x, this.y, this.tamañoCuerpo, this.tamañoCuerpo);  
    fill(255, 0, 0);  
    textSize(16);  
    textAlign(CENTER, BOTTOM);  
    text("TORITO", this.x, this.y - this.tamañoCuerpo / 2 - 5); 
  }
  mover() {
    if (this.y < this.tamañoCuerpo / 2) {
      this.y = this.tamañoCuerpo / 2;
    }
    if (this.y > height - this.tamañoCuerpo / 2) {
      this.y = height - this.tamañoCuerpo / 2;
    }
    if (this.x < this.tamañoCuerpo / 2) {
      this.x = this.tamañoCuerpo / 2;
    }
    if (this.x > width - this.tamañoCuerpo / 2) {
      this.x = width - this.tamañoCuerpo / 2;
    }
  }
}
