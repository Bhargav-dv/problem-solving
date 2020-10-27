// function arrReverse(arr){
//     let revArr= "";

//     function reverse(arr){
//         if(arr.length === 0){
//             return;
//         }
//         revArr += (arr[arr.length-1]);
//          arr = arr.substring((arr.length-1),0);
//         return reverse(arr);
//     }
//     reverse(arr);
//     return revArr;
// }

function reverse(str) {
    if (str.length <= 1) {
        return str;
    }

    console.log(str)
    return reverse(str.slice(1)) + str[0];
}
// (mosewa) + e
// (osewa) + m
// (sewa) + o
// (ewa) + s
// (wa) + e
// (a) + w
console.log(reverse("emosewa"))
