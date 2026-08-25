class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const mapZine = new Map();
        for (let i = 0; i < magazine.length; i++) {
            let char = magazine[i];
            let qtdAtual = mapZine.get(char) || 0;
            mapZine.set(char, qtdAtual + 1);
        }
        for (let i = 0; i < ransomNote.length; i++) {
            let char = ransomNote[i];
            let qtdAtual = mapZine.get(char) || 0;
            let result = mapZine.get(ransomNote[i]);
            if (!result || result <= 0) {
                return false;
            } else {
                mapZine.set(char, qtdAtual - 1);
            }

        }
        return true;
    }
}
