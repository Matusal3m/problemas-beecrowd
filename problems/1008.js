export function problem(lines){
    const employeeNumber = +lines[0];
    const workedHours = +lines[1];
    const dolarsPerHour = parseFloat(lines[2]);
    console.log(`NUMBER = ${employeeNumber} \nSALARY = U$ ${(workedHours*dolarsPerHour).toFixed(2)}`);
}