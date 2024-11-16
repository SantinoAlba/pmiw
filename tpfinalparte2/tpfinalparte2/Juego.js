class Juego {
  constructor() {
    this.jugador = new Jugador();
    this.puños = [];
    this.fondo = new Fondo(); 
    this.nivel = 1;
    this.juegoTerminado = false;
    this.juegoGanado = false;
    this.botones = new Botones(this);  
    this.botonvolver = createButton('Volver al Menú'); 
    this.botonvolver.size(100, 40);
    this.botonvolver.position(width / 2 - 50, height / 2 + 100); 
    this.botonvolver.mousePressed(() => this.volverAlMenu());  
    this.botonvolver.hide();  
  }
  generarPuños() {
    if (frameCount % 60 === 0) {
      this.puños.push(new Puño(this.nivel)); 
      console.log("Puño generado: ", this.puños); 
    }
  }

  actualizar() {
    if (this.juegoTerminado || this.juegoGanado) {
      return;  
    }
    this.fondo.mostrar();
    this.botones.moverJugador();  
    this.jugador.mover();
    this.generarPuños();

    for (let i = this.puños.length - 1; i >= 0; i--) {
      this.puños[i].mover();
      this.puños[i].mostrar();
      
      if (this.puños[i].choca(this.jugador)) {
        this.juegoTerminado = true;
      }

      if (this.puños[i].x < 0) {
        this.puños.splice(i, 1);
      }
    }

    if (this.fondo.alcanzada(this.jugador)) {
      this.nivel++;
      if (this.nivel > 5) {
        this.juegoGanado = true;  
        this.botonvolver.show(); 
      }
      this.reiniciar();  
    }

    this.jugador.mostrar();
  }


  reiniciar() {
    this.jugador.x = 100;
    this.jugador.y = height / 2;
    this.puños = [];
    this.fondo.x = width - 20;  
    this.juegoTerminado = false;
  }

 
  mostrarPantallaGanada() {
    fill(0, 255, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GANASTE", width / 2, height / 2 - 50);
  }

  volverAlMenu() {
    menu.volverAlMenu();
    this.botonvolver.hide();
  }

  mostrar() {
    if (this.juegoTerminado) {
      fill(255, 0, 0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("GAME OVER", width / 2, height / 2);
      this.botones.gestionarBotones();  
    } else if (this.juegoGanado) {
      this.mostrarPantallaGanada();  
      this.botones.gestionarBotones();  
      this.botonvolver.show();
    } else {
      fill(255);
      textSize(16);
      textAlign(LEFT, TOP);
      text("Nivel: " + this.nivel, 10, 10);
    }
  }
}
