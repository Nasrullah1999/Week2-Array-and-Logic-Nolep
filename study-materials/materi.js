let arrayNgasal = [1, "anjay", false, ["array lagi"], { name: "dika"}];
console.log(arrayNgasal[3]);

// let hewan = ["gajah", "jerapah"];
// console.log(hewan.length);

// let angka = [3,2,1,4,5,6,7];
// console.log(angka.length);

let hewan = ["marmut", "kucing"];
hewan.push("tikus");
console.log(hewan); // ["marmut", "kucing", "tikus"]

hewan.pop();
console.log(hewan); // ["marmut", "kucing"]


hewan.shift();
console.log(hewan); // ["kucing"]

hewan.unshift("marmut"); // ["marmut", "kucing"]
console.log(hewan);

hewan.splice(1,1);
console.log(hewan);

hewan.splice(1,0,"gajah");
console.log(hewan); // ["marmut", "gajah", "kucing"]

//contoh memotong dari index 1 sampe ujung
hewan = ["marmut", "gajah", "jerapah", "singa"]

console.log(hewan.slice(3)) //["marmut", "gajah", "jerapah", "singa"]