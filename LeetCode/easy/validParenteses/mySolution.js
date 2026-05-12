/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // Dicionário para saber quem fecha quem
    const map = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (map[char]) {
            stack.push(char);
        }

        else {

            const ultimoAberto = stack.pop();


            if (map[ultimoAberto] !== char) {
                return false;
            }
        }
    }


    return stack.length === 0;
};