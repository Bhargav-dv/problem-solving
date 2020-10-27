const annGrams = (str1,str2)=>{
    if(str1.length !== str2.length){
        return false;
    }
    const counter1 = {};
    const counter2 = {};

    for (const value of str1) {
         counter1[value] = counter1[value] > 0 ? counter1[value] + 1 : 1;
        // obj[a] = 1 // if its new, // increment it if its already prestny obj[a] = obj[a]+ 1 /// a = 2       
    }
//     for (const value of str2) {
//         counter2[value] = counter2[value] > 0 ? counter2[value] + 1 : 1;
//        // obj[a] = 1 // if its new, // increment it if its already prestny obj[a] = obj[a]+ 1 /// a = 2       
//    }
    for(const key of str2){
        console.log(key)
        if(!(counter1[key])){
            return false;
        }else{
            counter1[key] -= 1 ;
        }
    }
    return true

//    console.log(counter1);
//    console.log(counter2)
//     for (const key in counter1) {
//      if(!(key in counter2)){
//         return false
//      }if(counter1[key] !== counter2[key]){
//          return false
//      }
//     }
//     return true;
}

console.log(annGrams("qqerty","qertyq"))