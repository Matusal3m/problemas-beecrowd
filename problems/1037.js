export function problem(lines){
    const value = Number(lines[0]);

    function verifyClosedInterval(number) {

        switch (number) {
            case 0:
            case 25:
                return 'Intervalo [0,25]';
            case 75:
                return 'Intervalo [50,75]';
            default:
                return number;
        }
    }

    function verifyOpenInterval(number) {
        if (number > 100 || number < 0) {
            return 'Fora de intervalo'
        } else if (number > 0 && number < 25) {
            return 'Intervalo (0,25]';
        } else if (number > 25 && number <= 50) {
            return 'Intervalo (25,50]';
        } else if (number > 50 && number < 75) {
            return 'Intervalo (50,75]';
        } else if (number > 75 && number <= 100) {
            return 'Intervalo (75,100]';
        }

    }

    if (verifyClosedInterval(value) == value) {
        console.log(verifyOpenInterval(value));
    } else {
        console.log(verifyClosedInterval(value));
    }


}