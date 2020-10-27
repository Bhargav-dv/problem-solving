// const checkArr = (arr1,arr2) =>{
//     if(arr1.length !== arr2.length){
//     return false
//     }
//         const newArr =[]
//         for (const value of arr1) {
//             newArr.push(value * value);
//         }
//         console.log(newArr);
//         if(arr2.sort().toString() === newArr.sort().toString()){
//             console.log("Done ")
//         }else{
//             console.log("array not equal");
//         }
//     }

    //if both the array is of same lentg
    //Ill square the first array
    //check if the elemtns in first array is present in second array
    //if present return ture
const same = (arr1, arr2) =>{
    if(arr1.length !== arr2.length){
        return false;
    }
    frequenctCounter1 = {};
    frequenctCounter2 = {};

    for (const iterator of arr2) {
        //frequenctCounter1[iterator] = frequenctCounter1[iterator] +1 || 1;
        frequenctCounter1[iterator] =  frequenctCounter1[iterator] >0 ? frequenctCounter1[iterator] +1 : 1 

    }
    
    for (const iterator of arr1) {
        console.log(iterator * iterator);
        if(!frequenctCounter1[iterator * iterator]){
            console.log(iterator * iterator)
            return false
        }else{
            frequenctCounter1[iterator] -= 1;  
        }
        
        //frequenctCounter2[iterator] = frequenctCounter2[iterator] +1 || 1;
        //frequenctCounter1[iterator] =  frequenctCounter1[iterator] >0 ? frequenctCounter1[iterator] +1 : 1 
    }
    return true;
    //console.log(frequenctCounter1);

    //console.log(frequenctCounter2)
    // for(const key in frequenctCounter1){
    //     if(!(key * key in frequenctCounter2)){
    //         return false;
    //      }
    //      if( frequenctCounter2[key ** 2] !== frequenctCounter1[key]){
        
    //          console.log(key)
    //          return false;
    //      }
         //else{
        //     return false;s
        // }
    }
    //return true;
//}


console.log(same([2,2,3,5],[4,4,24,9]));