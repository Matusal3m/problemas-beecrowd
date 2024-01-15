export function problem(lines){//400
    function converteTempo(dias, tempoDesejado){
        const conversao = Math.trunc(dias/tempoDesejado);
        return [dias - conversao*tempoDesejado, conversao];
    }

    const idade = [365, 30, 1].map(function(tempo) {
        lines = converteTempo(lines[0], tempo);
        return lines[1];
    } );

    console.log(`${idade[0]} ano(s)`);
    console.log(`${idade[1]} mes(es)`);
    console.log(`${idade[2]} dia(s)`);
}