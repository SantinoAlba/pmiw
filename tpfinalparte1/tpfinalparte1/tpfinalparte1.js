let imagenes = [];
let imagenActual;
let indiceMensajeActual = 0;
let musicaDeFondo;

let mensajes = [
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
];

let opcionesBotones = [
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
  ["Créditos"] 
];

let imagenCreditos; // Variable para la imagen de créditos

function preload() {
  for (let i = 1; i < 16; i++) {
    imagenes.push(loadImage(imagenes/TORITO.${i}.png));
  }
  // Cargar la imagen de créditos como TORITO.16
  imagenCreditos = loadImage(imagenes/TORITO.16.png); // Asegúrate de que esta imagen existe

  musicaDeFondo = loadSound('imagenes/SONIDAZO.mp3');
}

function setup() {
  createCanvas(640, 480);
  imagenActual = imagenes[indiceMensajeActual];
  musicaDeFondo.play();
  musicaDeFondo.loop();
}

function draw() {
  background(220);
  
  imagenActual.resize(width, height);
  image(imagenActual, 0, 0);

  dibujarCajaTexto();
  dibujarBotones();
}

function dibujarCajaTexto() {
  fill(0, 150);
  rect(20, 0, width - 40, 95);

  textSize(20);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont('Arial');

  let lineas = mensajes[indiceMensajeActual].split("\n");
  let alturaLinea = textAscent() + textDescent();

  for (let i = 0; i < lineas.length; i++) {
    let lineaY = (95 / 2) - (lineas.length * alturaLinea) / 2 + i * alturaLinea;
    text(lineas[i], width / 2, lineaY);
  }
}

function dibujarBotones() {
  let opciones = opcionesBotones[indiceMensajeActual];
  let anchoBoton = 120;
  let altoBoton = 50;
  let botonY = height - altoBoton - 20;

  for (let i = 0; i < opciones.length; i++) {
    let botonX = (width - (opciones.length * anchoBoton + (opciones.length - 1) * 20)) / 2 + i * (anchoBoton + 20);

    fill(139, 0, 0);
    rect(botonX, botonY, anchoBoton, altoBoton);

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(opciones[i], botonX + anchoBoton / 2, botonY + altoBoton / 2);
  }
}

function mousePressed() {
  let opciones = opcionesBotones[indiceMensajeActual];
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
  switch (indiceMensajeActual) {
    case 3:
      indiceMensajeActual = opcion === "Gana" ? 4 : 5;
      break;
    case 9:
      if (opcion === "Gana") {
        indiceMensajeActual = 4; 
      } else if (opcion === "Pierde") {
        indiceMensajeActual = 14; 
      }
      break;
    case 5:
      indiceMensajeActual = 6;
      break;
    case 4:
      indiceMensajeActual = 8;
      break;
    case 6:
      indiceMensajeActual = opcion === "No lo intenta" ? 14 : 7;
      break;
    case 7: 
      indiceMensajeActual = 9;
      break;
    case 8:
      indiceMensajeActual = 11;
      break;
    case 10:
      indiceMensajeActual = opcion === "Gana" ? 4 : 8;
      break;
    case 11:
      if (opcion === "Seguir") {
        indiceMensajeActual = 12;
      } else if (opcion === "Morir en paz") {
        indiceMensajeActual = 13;
      }
      break;
    case 12:
      break;
    case 13:
      break;
    case 14:
      break;
    default:
      if (indiceMensajeActual !== 5 && indiceMensajeActual !== 4) {
        indiceMensajeActual++;
      }
      break;
  }

  // Verifica si se presionó el botón de "Créditos"
  if (opcion === "Créditos" || opcion === "Creditos") {
    imagenActual = imagenCreditos; // Cambia la imagen a la de créditos
    indiceMensajeActual = 15;
    return; // Salir para evitar que avance el índice
  }

  // Control de límites
  if (indiceMensajeActual >= mensajes.length) {
    indiceMensajeActual = mensajes.length - 1;
  }

  imagenActual = imagenes[indiceMensajeActual];
}
