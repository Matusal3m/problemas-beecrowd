export function problem(lines){

    const decompoeValor = (valor, nota) => [+(valor%nota).toFixed(2), (valor - valor%nota)/nota];

    console.log('NOTAS:');

    [100, 50, 20, 10, 5, 2].forEach(function(nota) {

        lines = decompoeValor(lines[0], nota);
            
        console.log(`${lines[1]} nota(s) de R$ ${nota.toFixed(2)}`);
        
    } );

    console.log('MOEDAS:');

    lines[0] = lines[0]*100;

    [100, 50, 25, 10, 5, 1].forEach(function(moeda) {
        
        lines = decompoeValor(lines[0], moeda);
        
        console.log(`${lines[1]} moeda(s) de R$ ${(moeda/100).toFixed(2)}`);
        
    });
}