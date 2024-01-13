export function problem(lines){
    const A = parseFloat(lines[0]);
    const B = parseFloat(lines[1]);
    const MEDIA = (A*3.5 + B*7.5)/11;
    console.log(`MEDIA = ${MEDIA.toFixed(5)}`)
}