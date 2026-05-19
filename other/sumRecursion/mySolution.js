/*
Fazer uma função de somar todos os elementos de um array com uma função recursiva
*/
function Soma(arr) {
    let pointer = arr[0];
    let result = 0;
    if (arr.length == 0) {
        return 0;
    } else {
        arr.shift()
        result = pointer + (Soma(arr))
        return result;
    }

}


console.log(Soma([2, 4, 6]))