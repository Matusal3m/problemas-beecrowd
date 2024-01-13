export function problem(lines){
    lines = lines.shift(0).split(' ')
    const A = +lines[0];
    const B = +lines[1];
    const C = +lines[2];
    console.log(`TRIANGULO: ${(A*C/2).toFixed(3)}`);
    console.log(`CIRCULO: ${(3.14159*C**2).toFixed(3)}`);
    console.log(`TRAPEZIO: ${(((A+B)*C)/2).toFixed(3)}`);
    console.log(`QUADRADO: ${(B*B).toFixed(3)}`);
    console.log(`RETANGULO: ${(A*B).toFixed(3)}`);
}