export function problem(lines){
    lines = lines[0].split(' ').map(Number);
    const maior = (A, B) => (A + B + Math.abs(A - B)) / 2;
    const maiorABC = lines.reduce(maior)
    console.log(`${maiorABC} eh o maior`)
}