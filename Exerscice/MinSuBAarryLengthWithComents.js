// const minSubArrayLen = (arr, k) =>{
// //is add the elsemts of index untill it =>k
// //then move the first dex to 2 repeat 
//     let temp = 0;
//     let count = 0;
//     for(let i=0; i< arr.length; i++){
//        temp = temp + arr[i];
//        console.log(temp);
//        if(temp < k){
//            count += 1;
//            console.log(count +"count")
//        }
//     }
//     console.log(count);
// }


function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
          //[2,3,1,2,4,3],7))
      if(total < sum && end < nums.length){ //[2,3,1,2] == count == 4
        total += nums[end];// t = 0 + 2 = 2 // t = 2 + 3 = 5 // t = 5 + 1 = 6 // t = 6 + 2 = 8 // t= 6+ 4 = 10 // t = 6 + 3 fail
              end++;       // e = 1         // e = 2         // e = 3         // e = 4         // e = 5        // e = 6 
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){                                                //(5-1)           //(5, -2)         // (6-3)        fail
        minLen = Math.min(minLen, end-start);// m = (-1, 4-0) == 4   // m =(4,4)= 4      // m =(4,2) = 2      // m = (2,3 )  
              total -= nums[start];//moving window // t = 8 - 2 = 6 //  t = 10 - 3 = 7  // t = 7 - 1 = 6      // t = 9 -2 = 6
              start++;                            // s = 1          // s = 2            // s = 3              // s = 4
      }                                           //[3,1,2]         //[1,2,4]           //[2,4]             //[2,4,3]
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break; // end loop
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

console.log(minSubArrayLen([2,3,1,2,4,3],7))