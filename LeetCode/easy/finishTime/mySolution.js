/**
 * 
You are given two categories of theme park attractions: land rides and water rides.

Land rides
landStartTime[i] – the earliest time the ith land ride can be boarded.
landDuration[i] – how long the ith land ride lasts.
Water rides
waterStartTime[j] – the earliest time the jth water ride can be boarded.
waterDuration[j] – how long the jth water ride lasts.
A tourist must experience exactly one ride from each category, in either order.

A ride may be started at its opening time or any later moment.
If a ride is started at time t, it finishes at time t + duration.
Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.
Return the earliest possible time at which the tourist can finish both rides.

Example 1:

Input: landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]

Output: 9

Explanation:​​​​​​​

Plan A (land ride 0 → water ride 0):
Start land ride 0 at time landStartTime[0] = 2. Finish at 2 + landDuration[0] = 6.
Water ride 0 opens at time waterStartTime[0] = 6. Start immediately at 6, finish at 6 + waterDuration[0] = 9.
Plan B (water ride 0 → land ride 1):
Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
Land ride 1 opens at landStartTime[1] = 8. Start at time 9, finish at 9 + landDuration[1] = 10.
Plan C (land ride 1 → water ride 0):
Start land ride 1 at time landStartTime[1] = 8. Finish at 8 + landDuration[1] = 9.
Water ride 0 opened at waterStartTime[0] = 6. Start at time 9, finish at 9 + waterDuration[0] = 12.
Plan D (water ride 0 → land ride 0):
Start water ride 0 at time waterStartTime[0] = 6. Finish at 6 + waterDuration[0] = 9.
Land ride 0 opened at landStartTime[0] = 2. Start at time 9, finish at 9 + landDuration[0] = 13.
Plan A gives the earliest finish time of 9.

Example 2:

Input: landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]

Output: 14

Explanation:​​​​​​​

Plan A (water ride 0 → land ride 0):
Start water ride 0 at time waterStartTime[0] = 1. Finish at 1 + waterDuration[0] = 11.
Land ride 0 opened at landStartTime[0] = 5. Start immediately at 11 and finish at 11 + landDuration[0] = 14.
Plan B (land ride 0 → water ride 0):
Start land ride 0 at time landStartTime[0] = 5. Finish at 5 + landDuration[0] = 8.
Water ride 0 opened at waterStartTime[0] = 1. Start immediately at 8 and finish at 8 + waterDuration[0] = 18.
Plan A provides the earliest finish time of 14.
 */

/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
    let timer = Infinity;
    for (let i = 0; i < landStartTime.length; i++) {
        for (let j = 0; j < waterStartTime.length; j++) {
            // ==========================================
            // PLANO 1: TERRA PRIMEIRO, ÁGUA DEPOIS
            // ==========================================
            // 1. Que horas termino a Terra?
            let fimTerra1 = landStartTime[i] + landDuration[i];

            // 2. Que horas realmente entro na Água? (O que for maior: a hora que saí da Terra ou a hora que a Água abre)
            let inicioAgua1 = Math.max(fimTerra1, waterStartTime[j]);

            // 3. Que horas acabo tudo no Plano 1?
            let fimPlano1 = inicioAgua1 + waterDuration[j];
            // ==========================================
            // PLANO 2: ÁGUA PRIMEIRO, TERRA DEPOIS
            // ==========================================
            // 1. Que horas termino a Água?
            let fimAgua2 = waterStartTime[j] + waterDuration[j];

            // 2. Que horas realmente entro na Terra? (O maior entre o fim da água e a abertura da terra)
            let inicioTerra2 = Math.max(fimAgua2, landStartTime[i]);

            // 3. Que horas acabo tudo no Plano 2?
            let fimPlano2 = inicioTerra2 + landDuration[i];
            // ATUALIZAR O RECORDE
            // ==========================================
            // O Math.min escolhe o menor número entre todos que você passar para ele.
            // Ele pega o menor tempo entre o Plano 1, o Plano 2 e o recorde que já tínhamos salvo.
            timer = Math.min(timer, fimPlano1, fimPlano2);
        }
    }

    return timer;
};