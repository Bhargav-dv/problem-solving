// const getmaxValue = (arr, k) =>{
//     let temp = 0;
//     let max = -1;
    

//     for(let i = 0 ; i< arr.length - k +1; i++){
//         for(let j = 0 ; j<k; j++){
//              temp = temp + arr[i+j];   
//              console.log(arr[i+j]);
//         }
//         if(temp > max){
//             max = temp;
//         }
//     }
//     console.log(max);
// }

const getValue = (arr,k)=>{
    //window approuc where I Add the first k numbers
    let max = 0;
    let temp = 0;
    //let max = -1;
    for(let i= 0; i < k ; i++){
        max += arr[i];
    }
    temp = max;
    for(let i = k ; i< arr.length; i++){
    console.log(max +"top")
    console.log(temp)
       temp = temp - arr[i-k] + arr[i]
       max = Math.max(max,temp);
    console.log(max +"btw") 
    console.log(temp)
    
    }
    return max;
}


console.log(getValue([1,2,3,4],2));