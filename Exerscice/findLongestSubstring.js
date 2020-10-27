const longestSubString = (str) =>{
//go through the the idex with start and end, stop if the value contains the the alphabet.  
let start = 0;
let end = 0;
let max = -Infinity;
const set = new Set();
//let total = ""
while(end < str.length && start < str.length ){
    //let char = str[end];
    if(!set.has(str[end])){
        set.add(str[end]);
        //total += str[end];
        end = end + 1;
        console.log(end)
        max = Math.max(max, end - start);
    }else{
      // total = total.slice(1);
       set.delete(str[start]);
        start ++;
    }
}
return max === Infinity ? 0 : max
    
}

console.log(longestSubString("thisisaweomse")) // 6