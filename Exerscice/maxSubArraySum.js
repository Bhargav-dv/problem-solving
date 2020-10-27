const maxSunnArray = (arr, k) => {
  //first I will add the numbers as per the K limint in a for loop and get the slider, and start the second loop with k
  //incrumeut each values in array and decrement the previos one, adject the loop size as per the lenth the k
  let max = 0;
  let temp = 0;
  for (let i = 0; i < k; i++) {
    max += arr[i];
  }
  temp = max;

  for (let i = k; i < arr.length; i++) {
    temp = temp - arr[i - k] + arr[i];
    console.log(temp);
    console.log(i)
    max = Math.max(temp, max);
  }
  return max;
};

console.log(maxSunnArray([1,4,2,10,23,3,1,0,20],4));
