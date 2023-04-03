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