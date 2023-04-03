console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado
})

console.groupEnd('Cuadrado') 

console.group('Triangulo') 

const ladoTriungulo1 = 6
const ladoTriungulo2 = 6
const trianguloBase = 4
const alturaTriungulo = 5.5


const perimetroTriangulo = ladoTriungulo1 + ladoTriungulo2 + trianguloBase
const areaTriangulo = (trianguloBase * alturaTriungulo) / 2

function calcularLadoCuadrado(lado) {
  return {
    perimetro: lado * 4,
    area: lado * lado,
  }
}

console.log({
  ladoTriungulo1,
  ladoTriungulo2,
  alturaTriungulo,
  perimetroTriangulo,
  areaTriangulo
})

console.groupEnd('Triangulo') 

console.group('Circulo')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const pi = 3.1415

const circunferencia = diametroCirculo * pi
const areaCirculo = (radioCirculo ** 2) * pi

console.log({
  radioCirculo,
  diametroCirculo,
  circunferencia,
  pi,
  areaCirculo
})

function calcularCirculo(radio) {
  const diametro = radio * 2
  const radioAlCuadrado = Math.pow(radio, 2)
  return {
    circunferencia: diametro * Math.PI.toFixed(2),
    area: radioAlCuadrado * Math.PI.toFixed(3)
  }
}

console.groupEnd('Circulo')