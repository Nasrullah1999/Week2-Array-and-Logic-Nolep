function pasanganTerbesar(num) {
    let numkestr = num.toString();
    let numArr = [];
    for (let i = 0; i < numkestr.length - 1; i++) {
        numArr.push(Number(numkestr[i] + numkestr[i + 1]));
    }
    numArr.sort((a, b) => b - a);
    return numArr[0];
}


console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99