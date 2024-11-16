//Comision 1//
//Martin Bonoris y Santino Albarracin//
//https://youtu.be/JXjzhx1Ehh4//

let juego; 
let imagenes = [];
let imagenCreditos; 
let sound;

function preload() {
  for (let i = 1; i < 16; i++) {
    imagenes.push(loadImage(`imagenes/TORITO.${i}.png`));
  }
  imagenCreditos = loadImage(`imagenes/TORITO.16.png`);
  sound = loadSound('imagenes/SONIDAZO.mp3');
}

function setup() {
  createCanvas(640, 480);
  juego = {
    imagenActual: imagenes[0],
    indiceMensajeActual: 0,
    musica: false,
    mensajes: [
      "Torito es un viejo ex boxeador el cual\nrecuerda sus principios en el deporte",
      "Recuerda a su madre y a Tani (su mejor amigo),\nquienes nunca le soltaron la mano y siempre lo motivaron\na seguir adelante.",
      "Torito recuerda sus primeras peleas, su gloria, orgullo y\nsu pelea más importante en NY contra el negrito flores.",
      "Juego", 
      "Torito se envuelve en fama y gloria", 
      "La carrera de Torito va en picada\npierde su reconocimiento y prestigio",
      "No sabe si renunciar o volver a intentarlo\nde nuevo por el miedo a la derrota\ny al fracaso", 
      "Lo intenta de nuevo, consiguiendo una\nrevancha con el negro Flores", 
      "Termina su sesión de nostalgia", 
      "Juego", 
      "Dejando de tomar sus medicamentos, Torito\npierde la vida, dejando detrás suyo un pasado\nde fama, reconocimiento y orgullo.",
      "Enfermo y frágil tiene la decisión de seguir\ncon su vida recordando o morir en paz",
      "Tomando sus medicamentos decide disfrutar\ndel poco tiempo que le queda, recordando sus\nbuenos momentos.", 
      "Dejando de tomar sus medicamentos, Torito\npierde la vida, dejando detrás suyo un pasado\nde fama, reconocimiento y orgullo", 
      "Pasa toda su vida con vergüenza y arrepentimiento,\nperdiendo su relación con su madre y Tani",
      "\n''Torito'' por Julio Cortazar \n\n Martín Bonoris 120282/4 | Santino Albarracín 91971/7 "
    ],
    opcionesBotones: [
      ["Siguiente"], 
      ["Siguiente"], 
      ["Jugar"], 
      ["Gana", "Pierde"], 
      ["Siguiente"],  
      ["Siguiente"],  
      ["No lo intenta", "Lo intenta"], 
      ["Siguiente"],  
      ["Siguiente"],  
      ["Gana", "Pierde"], 
      ["Gana", "Pierde"], 
      ["Seguir", "Morir en paz"], 
      ["Créditos"], 
      ["Créditos"], 
      ["Créditos"], 
      ["Reiniciar"]
    ]
  };
}

function draw() {
  background(220);
  
  juego.imagenActual.resize(width, height);
  image(juego.imagenActual, 0, 0);

  dibujarCajaTexto();
  dibujarBotones();
}

function dibujarCajaTexto() {
  textSize(20);
  fill(255,0,0);
  textAlign(CENTER, CENTER);
  textFont('Arial');

  let lineas = juego.mensajes[juego.indiceMensajeActual].split("\n");
  let alturaLinea = textAscent() + textDescent();

  for (let i = 0; i < lineas.length; i++) {
    let lineaY = (95 / 2) - (lineas.length * alturaLinea) / 2 + i * alturaLinea;
    text(lineas[i], width / 2, lineaY);
  }
}


function dibujarBotones() {
  let opciones = juego.opcionesBotones[juego.indiceMensajeActual];
  let anchoBoton = 120;
  let altoBoton = 50;
  let botonY = height - altoBoton - 20;

  for (let i = 0; i < opciones.length; i++) {
    let botonX = (width - (opciones.length * anchoBoton + (opciones.length - 1) * 20)) / 2 + i * (anchoBoton + 20);

    fill(139, 0, 0);
    rect(botonX, botonY, anchoBoton, altoBoton);

    fill(255);
    textSize(20);
    stroke(0)
    textAlign(CENTER, CENTER);
    text(opciones[i], botonX + anchoBoton / 2, botonY + altoBoton / 2);
  }
}

function mousePressed() {
  if (!juego.musica && sound && !sound.isPlaying()) {
    sound.loop();
    juego.musica = true;
    sound.setVolume(0.1);
  }
  
  let opciones = juego.opcionesBotones[juego.indiceMensajeActual];
  let anchoBoton = 120;
  let altoBoton = 50;
  let botonY = height - altoBoton - 20;

  for (let i = 0; i < opciones.length; i++) {
    let botonX = (width - (opciones.length * anchoBoton + (opciones.length - 1) * 20)) / 2 + i * (anchoBoton + 20);

    if (mouseX > botonX && mouseX < botonX + anchoBoton && mouseY > botonY && mouseY < botonY + altoBoton) {
      manejarSeleccionOpcion(opciones[i]);
      break;
    }
  }
}

function manejarSeleccionOpcion(opcion) {
  if (juego.indiceMensajeActual === 3) {
    if (opcion === "Gana") {
      juego.indiceMensajeActual = 4;
    } else if (opcion === "Pierde") {
      juego.indiceMensajeActual = 5;
    }
  } else if (juego.indiceMensajeActual === 9) {
    if (opcion === "Gana") {
      juego.indiceMensajeActual = 4; 
    } else if (opcion === "Pierde") {
      juego.indiceMensajeActual = 14; 
    }
  } else if (juego.indiceMensajeActual === 5) {
    juego.indiceMensajeActual = 6;
  } else if (juego.indiceMensajeActual === 4) {
    juego.indiceMensajeActual = 8;
  } else if (juego.indiceMensajeActual === 6) {
    if (opcion === "No lo intenta") {
      juego.indiceMensajeActual = 14;
    } else if (opcion === "Lo intenta") {
      juego.indiceMensajeActual = 7;
    }
  } else if (juego.indiceMensajeActual === 7) {
    juego.indiceMensajeActual = 9;
  } else if (juego.indiceMensajeActual === 8) {
    juego.indiceMensajeActual = 11;
  } else if (juego.indiceMensajeActual === 10) {
    if (opcion === "Gana") {
      juego.indiceMensajeActual = 4;
    } else if (opcion === "Pierde") {
      juego.indiceMensajeActual = 8;
    }
  } else if (juego.indiceMensajeActual === 11) {
    if (opcion === "Seguir") {
      juego.indiceMensajeActual = 12;
    } else if (opcion === "Morir en paz") {
      juego.indiceMensajeActual = 13;
    }
  } else if (juego.indiceMensajeActual === 12 || juego.indiceMensajeActual === 13 || juego.indiceMensajeActual === 14) {
    
  } else {
    juego.indiceMensajeActual++;
  }

  if (opcion === "Créditos") {
    juego.imagenActual = imagenCreditos; 
    juego.indiceMensajeActual = 15;
    return; 
  }

  if (opcion === "Reiniciar") {
    juego.indiceMensajeActual = 0; 
    juego.imagenActual = imagenes[juego.indiceMensajeActual]; 
    return; 
  }

  juego.imagenActual = imagenes[juego.indiceMensajeActual];
}
