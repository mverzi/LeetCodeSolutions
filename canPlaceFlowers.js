/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    var newFlowers = 0
    var length = flowerbed.length

    if(flowerbed.length == 1 && flowerbed[0] == 0){
        newFlowers += 1
    }
    if(flowerbed[0] == 0 && flowerbed[1] == 0){
        flowerbed[0] = 1
        newFlowers += 1
    }
    if(flowerbed[length - 2] == 0 && flowerbed[length - 1] == 0){
        flowerbed[length - 1] = 1
        newFlowers += 1
    }

    for(let i = 1; i < length - 2; i++){
        if(flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0 && flowerbed[i] == 0){
            flowerbed[i] = 1
            newFlowers += 1
        }
    }
    console.log(newFlowers)
    return n <= newFlowers
};