const subArray = (arr, k) =>{
    // I will lopp throug the index to find the sum < k
    //I will subtract the first one and add the 
   let start = 0;
    let end = 0;
   let total = 0;
   let min = Infinity;
    while (start < arr.length){
        if(total < k){
            total = total + arr[end];
            end ++;
        }else if( total >= k ){
            min = Math.min(min,end - start);
            total = total - arr[start];
            start ++;
        }else{
             break;
         }
    }
    return min === Infinity ? 0 : min

// while(end < arr.length){
//     if(total < k){
//         total = total + arr[end];
//         end++;
//     }
//     while(total >=k){

//         min = Math.min(min , end - start);
//         total = total - arr[start];
//         start++
//     }
// }
// return min === Infinity? 0 : min;

}

console.log(subArray([2,3,1,2,4,3],7))