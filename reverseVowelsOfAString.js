/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
    var array = s.split('')
    var pointerA = 0
    var pointerB = s.length - 1
    var vowels = ['a','e','i','o','u','A','E','I','O','U']
    
    while(pointerA < pointerB){
        if(!vowels.includes(array[pointerA]) && !vowels.includes(array[pointerB])){
            pointerA++
            pointerB--
        }
        else if(vowels.includes(array[pointerA]) && !vowels.includes(array[pointerB])){
            pointerB--
        }
        else if(!vowels.includes(array[pointerA]) && vowels.includes(array[pointerB])){
            pointerA++
        }
        else if(vowels.includes(array[pointerA]) && vowels.includes(array[pointerB])){
            temp = array[pointerA]
            array[pointerA] = array[pointerB]
            array[pointerB] = temp
            pointerA++
            pointerB--
        }
        
    }
    return array.join('')
};