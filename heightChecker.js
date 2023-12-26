/**
 * @param {number[]} heights
 * @return {number}
 * Height Checker solved using bubble sort
 */
var heightChecker = function(heights) {
    let swapped = true
    let expected = [...heights]
    
    do {
        swapped = false
        for(let i = 0; i <= expected.length - 1; i++){
            if(expected[i] > expected[i+1]){
                let temp = expected[i]
                expected[i] = expected[i+1]
                expected[i+1] = temp
                swapped = true
            }
        }
    } while(swapped)

        
    let total = 0
        
    for(let i = 0; i < heights.length; i++){
        if(heights[i] !== expected[i]){
            total++
        }
    }
    return total
};