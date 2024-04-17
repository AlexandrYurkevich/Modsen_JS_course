function sumFirstHalf(nums) {
  let sum = 0;
  for(let i = 0; i < nums.length/2; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(sumFirstHalf([0,8,7,4,2,9]))//15