export function problem(lines){

    const decompoeValor = (valor, nota) => [valor%nota, (valor - valor%nota)/nota];

    console.log(lines[0]);

    [100, 50, 20, 10, 5, 2, 1].forEach(function(nota) {

        lines = decompoeValor(lines[0], nota);

        console.log(`${lines[1]} nota(s) de R$ ${nota},00`);
        
    } );

}