export function problem(lines){
    lines = lines.map(Number);
    console.log(((lines[0]*lines[1])/12).toFixed(3));
}