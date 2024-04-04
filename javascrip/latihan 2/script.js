let data = ["Alfredo", "David", "Felix"];
let listMhs = document.getElementById("listMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    listMhs.innerHTML += "<li>"+ value +"</li>";
}
let npm = document.getElementById("npm");
//tampilkan data localStorage ke dalam elemen <p id = 'npm'>
npm.innerHTML = localStorage.getItem("npm")

let npm = document.getElementById("nama");
//tampilkan data localStorage ke dalam elemen <p id = 'nama'>
nama.innerHTML = localStorage.getItem("nama")

// simpan data ke local storage
localStorage.setItem("email","ahmad@test.com")

// data array
let hobi =["baca","game","code"];
localStorage.setItem("hobi",hobi);
localStorage.setItem("myhobi",JSON.stringify (hobi));

// data dalam bentuk objek
let mhs ={npm : 2226240036, nama:"Haruto"};

// cara aksses
console.log(mhs.npm);
console.log(mhs.nama);
// kombinasi array dan objek
let nilai =[
    {kode_mk: "SI001",nama_mk: "Pemograman web"},
    {kode_mk: "SI002",nama_mk: "PAB"},
];
// tampilkan namamk pemograman web 
console.log(nilai [0].nama_mk);
console.log(nilai [1].nama_mk);
// simpan ke local storage
localStorage.setItem("nilai",JSON.stringify(nilai));

// tampilkan menggunakan for atau foreach 
let lsNilai = localStorage.getItem("nilai");