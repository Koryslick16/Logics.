// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

//solution

function has77(nums){
    for(let i = 0; i < nums.length; i++){
      if((nums[i] == 7 && nums[i+1] == 7) || (nums[i] == 7 && nums[i+2] == 7)){
         return true;
      }
    }
    return false;
  }

  console.log(has77([2, 4, 4, 7, 4, 7]));