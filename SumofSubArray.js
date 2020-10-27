

const subArray = (arr,k)=>{
//loop through the array and add  numbers until sum < k
//save thoes arrays and check the array with the higest length.    
//check of the sum combo less than k

let start = 0;
let sum = 0;
let count= 0;

for(let i=0 ;i<arr.length; i++){
    sum += arr[i];
    //console.log(sum);
    if(sum <= k){
    count++;
    }
}
console.log(count);

}

subArray([1,2,3,4],5)