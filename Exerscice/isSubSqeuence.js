const isSubSequence = (str1, str2) => {
  //lopp through the second array and check if the first letter in the second one
  //if yes increament both else increment the sent sencond index. and check
 //const  arrStr1 = Array.from(str1);
  //const arrStr2 = Array.from(str2);
  let first = 0;
  let second = 0;
  console.log(str2.length);
  while (second < str2.length) {
    if (str1[first] === str2[second]) {
      
      if (str1.length-1 === first) {
        return true;
      }
      first++;//1
      second++;//3
      
    } else {
      second++;//2
    }
  }
  return false;
};
console.log(isSubSequence("aa", "abc"));
