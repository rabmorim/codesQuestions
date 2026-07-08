/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function (s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    // 1. Pré-computar as potências de 10 módulo MOD
    // Isso evita calcular 10^k repetidamente dentro do loop das queries
    const pow10 = new Array(n + 1);
    pow10[0] = 1n;
    for (let i = 1; i <= n; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }

    // 2. Arrays de Prefixo (com tamanho n + 1 para facilitar os cálculos de limites)
    const valPref = new Array(n + 1).fill(0n); // Valor do número concatenado
    const sumPref = new Array(n + 1).fill(0n); // Soma dos dígitos
    const nzCount = new Array(n + 1).fill(0);  // Contagem de dígitos não-zero

    for (let i = 0; i < n; i++) {
        const digit = Number(s[i]);
        const digitBig = BigInt(digit);

        if (digit !== 0) {
            // Se não é zero, atualizamos os acumuladores
            valPref[i + 1] = (valPref[i] * 10n + digitBig) % MOD;
            sumPref[i + 1] = sumPref[i] + digitBig;
            nzCount[i + 1] = nzCount[i] + 1;
        } else {
            // Se é zero, repetimos o valor anterior
            valPref[i + 1] = valPref[i];
            sumPref[i + 1] = sumPref[i];
            nzCount[i + 1] = nzCount[i];
        }
    }

    const answer = [];

    // 3. Responder cada query em tempo O(1) (Instantâneo)
    for (let i = 0; i < queries.length; i++) {
        const l = queries[i][0];
        const r = queries[i][1];

        // Ajuste de índices por conta do array base 1
        const rIdx = r + 1;
        const lIdx = l;

        // Soma dos dígitos no intervalo [l, r]
        const sum = sumPref[rIdx] - sumPref[lIdx];

        // Se a soma é 0, significa que só temos zeros no trecho
        if (sum === 0n) {
            answer.push(0);
            continue;
        }

        // Quantidade de dígitos não-zeros no intervalo
        const k = nzCount[rIdx] - nzCount[lIdx];

        // Mágica: x = (val[r] - val[l-1] * 10^k) % MOD
        let x = (valPref[rIdx] - (valPref[lIdx] * pow10[k]) % MOD) % MOD;

        // Em aritmética modular, subtrações podem gerar números negativos em JS
        // Se der negativo, somamos o MOD para corrigir
        if (x < 0n) {
            x += MOD;
        }

        // Multiplica o número pela soma dos dígitos e aplica o módulo final
        const res = (x * (sum % MOD)) % MOD;

        // Converte o BigInt de volta para Number nativo do JS conforme pedido
        answer.push(Number(res));
    }

    return answer;
};