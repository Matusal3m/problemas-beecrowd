export function problem(lines){
    lines = lines.shift(0).split(' ').concat(lines.shift(0).split(' '))
    const firstItem = {
        number : lines[0],
        quantity : lines[1],
        price : lines[2],
        finalPrice: function() {
            return Number(firstItem.quantity)*Number(firstItem.price);
        }
    };
    const secondItem = {
        number : lines[3],
        quantity : lines[4],
        price : lines[5],
        finalPrice: function() {
            return Number(secondItem.quantity)*Number(secondItem.price);
        }
    };
    console.log(`VALOR A PAGAR: R$ ${(firstItem.finalPrice()+secondItem.finalPrice()).toFixed(2)}`);
}