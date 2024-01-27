export function problem(lines){
    const [a, b, c] = lines[0].split(' ');
    const delta = (b**2) - (4*a*c);

    let r1 = -b + delta**(1/2);
    let r2 = -b - delta**(1/2);

    r1 /= a*2;
    r2 /= a*2;
    
    if (!isFinite(r1) ||
        !isFinite(r2) ||
        isNaN(r1) ||
        isNaN(r2)
    ){
        console.log('Impossivel calcular');
    } else {
        console.log(`R1 = ${r1.toFixed(5)}`);
        console.log(`R2 = ${r2.toFixed(5)}`);
    }
}