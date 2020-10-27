const compare = (arr) =>{
let start = 0;
let end = arr.length -1;
console.log(end);
while(end > start){
    if(arr[start] + arr[end] === 0){
        return[arr[start], arr[end]]
    }else if(arr[start] + arr[end] > 1){
            end--;
    }else{
        start++;
    }
}
}

console.log(compare([-3,-2,-1,0,1,2,5]));