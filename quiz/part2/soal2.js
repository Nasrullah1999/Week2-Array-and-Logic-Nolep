function angkaPalindrome(num) {
  while (true) {
    num++;
   let ubahangka = String(num);
    let balik = ubahangka.split('').reverse().join('');
    if (ubahangka === balik) {
      return Number(balik);
    }
  }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

// let balik = String(48).split('').reverse().join('');
// console.log(balik);