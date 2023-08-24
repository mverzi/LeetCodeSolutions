//FIRST ATTEMPT
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * Runtime: Beats 95%
 * Memory: Beats 89%
 */
 var mergeAlternately = function(word1, word2) {
    var result = ""
    var leftover = ""
    if(word1.length > word2.length){
        leftover = word1.slice(word2.length, word1.length);
        for(let i = 0; i < word2.length; i++){
            result += word1[i]
            result += word2[i]
        }
        result += leftover
    }
    else if(word1.length < word2.length){
        leftover = word2.slice(word1.length, word2.length);
        for(let i = 0; i < word1.length; i++){
            result += word1[i]
            result += word2[i]
        }
        result += leftover
    }
    else{
        for(let i = 0; i < word1.length; i++){
            result += word1[i]
            result += word2[i]
        }
    }

    return result
};


//REFACTOR
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * Runtime: Beats 95%
 * Memory: Beats 89%
 */
 var mergeAlternately = function(word1, word2) {
    var chars = [];
    var maxLength = Math.max(word1.length, word2.length);

    for(var i = 0; i < maxLength; i++){
        if(word1[i])
            chars.push(word1[i]);
        if(word2[i])
            chars.push(word2[i]);
    }
    return chars.join('');
};