//get the average pair of the integers

const averagePair = (arr, avg) =>{
    //can reduce the time if I get the middle index and see ifts great and continue from their or move
    //if I use two loop the complex will be O(n^2), if I sort it and than use single loop we can achive this by O(NlogN);
    //will check two number to end to start if the its move accrodkingly when when the avg is more || less
    let start = 0;
    let end = arr.length-1;
    

    while(end > start){
        console.log((arr[start] + arr[end])/2)
        console.log(start);
        console.log(end);
        if(((arr[start] + arr[end])/2) === avg){
            return true
        }else if(((arr[start] + arr[end])/2) > avg){
            end--;
        }else{
            start++;
        }
    }
    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],4))