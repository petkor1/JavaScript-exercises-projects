// let liczba = 5;

// function test({ arg1: arg1, arg2: arg2 }) {
//     let liczba1 = liczba
//     function sumuj() {
//         liczba1 += 5;
//         arg2 += 3
//         return console.log(liczba1 + arg2);
//     } return { sumuj: sumuj };
// }

// let suma = new test({ arg2: 1, arg1: 1 });
// suma.sumuj();


const numbers = [1, 2, 3, 4, 5, 6, 7]
const big = numbers.filter((number, kupa) => {
    console.log(kupa);
    return number > 4

});

console.log(big);