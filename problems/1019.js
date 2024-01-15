export function problem(lines){//130, 60
    function converteTempo(tempo, divisao){
        const conversao = Math.trunc(tempo/divisao)
        return [tempo - conversao*divisao, conversao]
    }
    let temp = [lines[0]];
    const tempos = [3600, 60, 1].map(function(time){
        temp = converteTempo(temp[0], time);
        return temp[1];
    })
    console.log(`${tempos[0]}:${tempos[1]}:${tempos[2]}`);
}