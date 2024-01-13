export function problem(lines){
    lines = lines[0].split(' ').concat(lines[1].split(' '));
    const [x1, y1, x2, y2] = lines.map(Number);
    const distancia = ((x2 - x1)**2 + (y2 - y1)**2)**(1/2);
    console.log(distancia.toFixed(4));
}