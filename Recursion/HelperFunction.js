const helperFunc = (arr) =>{
 const reuslt = [];

    const findOdd = (helperInput)=>{
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0]%2 !== 0){
            reuslt.push(helperInput[0]);
        }
        findOdd(helperInput.slice(1));
    }
    findOdd(arr);

    return reuslt;
}

console.log(helperFunc([1,2,3,4,5,6]));


