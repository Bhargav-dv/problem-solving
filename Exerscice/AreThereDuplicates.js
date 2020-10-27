const areThereDuplicates = (...values)=>{
    const arr = values;
    const obj = {}
    for (const iterator of arr) {
        obj[iterator] = obj[iterator] +1 || 1;      
    }
    console.log(obj)
    for (const key in obj) {
        if(obj[key]>1){
            return true;
        }
    }
    return false    ;
}

console.log(areThereDuplicates());