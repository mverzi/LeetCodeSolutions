/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    var zeros = 0;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == 0)
            zeros++;
        else if(zeros > 0){
            nums[i - zeros] = nums[i];
            nums[i] = 0;
        }
    }
};