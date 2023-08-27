/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1)
        return "";
    
    var m = str1.length
    var n = str2.length

    var gcd = function(x, y){
        if(!y)
            return x
        return gcd(y, x % y)
    }

    var div = gcd(m, n)
    return str1.slice(0, div)
};