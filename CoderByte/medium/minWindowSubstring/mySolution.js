/*
A função `MinWindowSubstring(strArr)` deve receber como parâmetro um array de strings armazenado em `strArr`, 
que conterá apenas duas strings: a string `N` como primeiro parâmetro e uma string `K` com alguns caracteres. 
O objetivo é determinar a menor substring de `N` que contenha todos os caracteres de `K`. 
Por exemplo: se `strArr` for `["aaabaaddae", "aed"]`, a menor substring de `N` 
que contém os caracteres "a", "e" e "d" é "dae", localizada no final da string. 
Portanto, neste exemplo, o programa deve retornar a string "dae".

Outro exemplo: se `strArr` for `["aabdccdbcacd", "aad"]`, ]
a menor substring de `N` que contém todos os caracteres de `K` é "aabd", 
localizada no início da string. Ambos os parâmetros serão strings com comprimento entre 1 e 50 caracteres, 
e todos os caracteres de `K` estarão presentes em algum lugar na string `N`. 
Ambas as strings conterão apenas letras minúsculas do alfabeto.
 */

function MinWindowSubstring(strArr) {
    const strN = strArr[0];
    const strK = strArr[1];
    let smallStr = strN;

    for (let i = 0; i <= strN.length; i++) {
        for (let j = strN.length; j >= i; j--) {
            let chunck = strN.slice(i, j);
            let result = Check(chunck, strK);
            if (result == true) {
                if (chunck.length < smallStr.length) {
                    smallStr = chunck;
                }
            } else {
                continue;
            }
        }
    }



    return smallStr;

}

function Check(chunck, k) {
    let copyK = k;
    for (let i = 0; i < chunck.length; i++) {
        copyK = copyK.replace(chunck[i], '')
    }

    if (copyK.length == 0) {
        return true;
    } else {
        return false;
    }
}

// keep this function call here 
console.log(MinWindowSubstring(readline()));