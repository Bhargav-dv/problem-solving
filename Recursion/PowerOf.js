
// const powerOf =(num, pow)=>{
//     let result = 1;
//    console.log(pow);
  
//     const cal= (power) =>{
//         console.log(power)
//         if(power === 1){
//             return num;
//         }else if(power === 0){
//             result = 1;
//             return 1;
//         }
//         else{
//          result = result * num;
//          power--;
//         }
//     return cal(power)
//     }
// cal(pow);
//  return result;   
// }

const powerOf = (num, pow) =>{
if(pow === 0){
    return 1
}
return num *(powerOf(num, pow-1));
        //2 * powerof(2,1) // 2 * 2
        //2 * powertof(2,0)// 2 *1  = return 2
        //1   
}

console.log(powerOf(3,2));