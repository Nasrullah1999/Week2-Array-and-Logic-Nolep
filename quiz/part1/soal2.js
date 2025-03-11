let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input.flat());
}
dataHandling(input);

function dataHandling2(input) {
    let bulan = input[3].split("/");
    let namabulan = "";
    if (bulan[1] === "05") {
        namabulan = "Mei";
    }
    console.log(namabulan);
}
dataHandling2(input);

function dataHandling3(input) {
    let bulan = input[3].split("/");
    bulan.sort(function(b, a){return a - b});
    console.log(bulan);
}
dataHandling3(input);

function dataHandling4(input) {
    let bulan = input[3].split("/");
    let tanggal = bulan.join("-");
    console.log(tanggal);
}
dataHandling4(input);

function dataHandling5(input) {
    let nama = input[1];
    console.log(nama.slice(0, 14));
}
dataHandling5(input);

/**

 * fruits.join(" / ");

 */