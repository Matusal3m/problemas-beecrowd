export function problem(lines){
    const A = parseInt(lines[0]);
    const B = parseInt(lines[1]);
    const C = parseInt(lines[2]);
    const D = parseInt(lines[3]);
    const DIFERENCA = (A * B - C * D);
    console.log(`DIFERENCA = ${DIFERENCA}`);
}