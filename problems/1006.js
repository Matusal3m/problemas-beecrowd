export function problem(lines){
    const A = parseFloat(lines[0]);
    const B = parseFloat(lines[1]);
    const C = parseFloat(lines[2]);
    const MEDIA = (A*2 + B*3 + C*5)/10;
    console.log(`MEDIA ${MEDIA.toFixed(1)}`);
}