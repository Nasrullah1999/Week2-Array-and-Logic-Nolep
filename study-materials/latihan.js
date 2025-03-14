function palindrome(kata){
let result = '';
for(let i=kata.length-1;i>=0; i--){
    result += kata[i];
}
if (result === kata){
    return true
} else{return false}

}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false



// function angkaPalindrome(num) {
//     while (true) {
//       num++;
//       var strNum = String(num);
//       var balik = strNum.split('').reverse().join('');
//       if (strNum === reverseStrNum) {
//         return Number(strNum);
//       }
//     }
//   }
