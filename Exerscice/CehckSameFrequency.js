const sameFrequency= (num1,num2)=>{
    const obj={};
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length){
        return false;
    }
    console.log(strNum1)
    for (const value of strNum1) {
       obj[value] = obj[value] > 0 ? obj[value]+1: 1; 
    }
    console.log(obj)
    for(const value of strNum2){
        console.log(value)
        if(!obj[value]){
            return false
        }else{
            obj[value] -= 1;
        }
        
    }
    return true;
}

console.log(sameFrequency(3589578,5879385));