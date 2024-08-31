//Comision 1(Jose Luis Bugiolachi)//
//Albarracin Santino//
//https://youtu.be/gDBwhBz62tA//

let miImagen;
let tam;
let cant = 10;
let cambiarColor = false;
let cambiarCuadrado = false;
let movimientoActivado = false;
let cuadradoX;
let cuadradoY;
let cuadradoWidth = 200;
let cuadradoHeight = 200;
let velocidadMovimiento = 2;
let centerY;
let colorAleatorio;
let ultimoCambio;
let sobreCentro = false;

function preload() {
  miImagen = loadImage('images/imagen.TP3.png');
}

function setup() {
  createCanvas(800, 400);
  tam = width / cant;
  centerY = height / 2;

  miImagen.resize(width / 2, height);

  cuadradoX = width - 300;
  cuadradoY = height / 2 - 100;

  ultimoCambio = millis();
}

function draw() {
  background(0);

  
  for (let x = 400; x < 800; x++) {
    let colorValue = map(abs(x - 600), 0, 200, 0, 255);
    if (sobreCentro) {
      let distancia = dist(mouseX, mouseY, x, centerY);
      let desBlanco = map(distancia, 0, 200, 255, 0);
      fill(255, 255, 255, desBlanco);
    } else {
      fill(0, 0, colorValue);
    }
    rect(x, 0, 1, height);
  }

  
  image(miImagen, 0, 0);

 
  fill(obtenerColorCuadrado());
  rect(cuadradoX, cuadradoY, cuadradoWidth, cuadradoHeight);

  
  if (movimientoActivado) {
    cuadradoX += velocidadMovimiento;

    if (cuadradoX <= 400 || cuadradoX + cuadradoWidth >= 800) {
      velocidadMovimiento *= -1;
    }
  }

  
  for (let l = 0; l <= height; l += 5) {
    for (let x = 400; x < 800; x++) {
      let centro = abs(600 - x);
      let blanco = map(centro, 0, 200, 255, 255);
      let rojo = map(centro, 0, 200, 255, 0);
      let dentroCuadrado = x >= cuadradoX && x < cuadradoX + cuadradoWidth && l >= cuadradoY && l < cuadradoY + cuadradoHeight;

      if ((l / 5) % 2 === 0) {
        if (dentroCuadrado) {
          fill(obtenerColorCuadrado());
        } else {
          fill(255, 0);
        }
      } else {
        if (cambiarColor) {
          fill(rojo, 0, 0);
        } else {
          fill(blanco);
        }
      }

      noStroke();
      rect(x, l, 1, 5);
    }
  }
  funcionParametro(movimientoActivado);
}

function mouseMoved() {
  sobreCentro = (mouseX >= 400 && mouseX <= 800 && abs(mouseX - 600) <= 200);
}

function mousePressed() {
  if (mouseX >= cuadradoX && mouseX <= cuadradoX + cuadradoWidth &&
      mouseY >= cuadradoY && mouseY <= cuadradoY + cuadradoHeight) {
    movimientoActivado = !movimientoActivado;
    cambiarCuadrado = true;
    colorAleatorio = color(random(255), random(255), random(255));
  }
}

function keyPressed() {
  if (key === 'R' || key === 'r') {
    cambiarCuadrado = false;
    movimientoActivado = false;
    cuadradoX = width - 300;
    sobreCentro = false;
  }
}

function funcionParametro(movimiento) {
  if (movimiento) {
    fill(0, 0, 67);
    circle(mouseX, mouseY, 200);
  }
}

function obtenerColorCuadrado() {
  if (cambiarCuadrado) {
    return colorAleatorio;
  } else {
    return color(0, 0, 255);
  }
}
