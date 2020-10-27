// const uniqueCount = (arr) =>{
//     const obj = {}
//     for (const value of arr) {
//         obj[value] = obj[value] +1 || 1 ;
//     }
//     console.log(obj);
//     console.log(Object.keys(obj).length)
// } 

// uniqueCount([1,2,3,2,3,4,4]);


const uniqueCount = (arr) =>{
//     let start = 0;
//     let end = start+ 1;
//    // let sum = 0;
//     for(let j =1; j<arr.length; j++){
//         //console.log(value)
        
//         // if(arr[start] === arr[end]){
//         //      end++
//         // }else
//          if (arr[start] != arr[j]){
//             start ++
//             arr[start] = arr[j];
//         }
//     }
//     console.log(start)
//     console.log(end)
 //   return arr.slice(0,start+1);

const obj = {};

for (let i  of arr ){
    obj[i] = obj[i] > 0 ? obj[i]+1 : 1;
}

}
console.log(uniqueCount([1,2,3,4,4,5,10]));