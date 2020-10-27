
//function fib(num) {
// const arr = [1,1];

//   function counter(count) {
//     if (count === 1 || count === 2) {
//       return 1;
//     } else {
//       arr.push(arr[0] + arr[1]); // 1,1,2 // 1,2,3 / 2,3,5
//       arr.splice(0,1);//1,2  // 2,3 // 3 5
//       count--;
//      // console.log(count) //4 // 3 // 2 // 1
//       return counter(count);
//     }
//   }
// counter(num);
//console.log(arr);
//return arr[arr.length-1];
//}


function fib(num, memo=[]){
  if(memo[num] !== undefined){
      return memo[num];
  }
    if(num <=2){
        return 1;
    }
    let res = fib(num-1, memo) + fib(num-2, memo);
    memo[num] = res;
    return res;
}     // 
console.log(fib(100));
// 1 1 2 3 5 8 13
