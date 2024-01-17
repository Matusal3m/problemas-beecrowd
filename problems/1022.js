export function problem(lines){
    const expressoes = lines.slice(1).map((expressao) => expressao.split(' '));
    /* 
    Para funcionar no site do beecrowd é necessário trocar a linha acima por esta: 
    const expressoes = lines.slice(1, -1).map((expressao) => expressao.split(' '));
    Acredito que o ultimo valor da entrada seja um valor vazio [], que acaba retornando NaN/NaN = NaN/NaN.
    */
    function calcularExpressao(N1, D1, operador, N2, D2) {
        switch (operador) {
            case '+':
                return (N1*D2 + N2*D1) + '/' + (D1*D2);
            case '-':
                return (N1*D2 - N2*D1) + '/' + (D1*D2);     
            case '*':
                return (N1*N2) + '/' + (D1*D2);
            default:
                return (N1*D2) + '/' + (N2*D1);
            }
        }

    function simplificarExpressao(valores){
        valores = valores.split('/');
        let numerador = Number(valores[0]);
        let denominador = Number(valores[1]);

        for(let i = Math.max(numerador, denominador); i > 1; i--) {
            if (numerador % i == 0 && denominador % i == 0) {
                numerador /= i;
                denominador /= i;
            }
        }

        return numerador + '/' + denominador;
        
    }

        expressoes.forEach(function(expressao){
            const [N1, , D1, operador, N2, , D2] = expressao;

            const resultado = calcularExpressao(N1, D1, operador, N2, D2);

            const resultadoSimplificado = simplificarExpressao(resultado);

            console.log(`${resultado} = ${resultadoSimplificado}`);
        });

}