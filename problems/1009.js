export function problem(lines){
    const sellerName = lines[0];
    const sellerSalary = parseFloat(lines[1]);
    const sellerSells = parseFloat(lines[2]);
    console.log(`TOTAL = R$${(sellerSalary+(sellerSells*15/100)).toFixed(2)}`)
}