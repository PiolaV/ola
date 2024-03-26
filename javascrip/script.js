document. getElementById ("welcome").innerHTML="selamat datang";
document.getElementById("nama").innerHTML='<b> Viola</b>';
document.getElementById("email").innerText="viola21@agmail";
console.log("hanya bisaa dilihat di console");
// variabel
let nama ="";
let email="";
let data= [];// array
// functianl
function tampil(){
    console.log("Button ditekan");

    // simpan value txt nama ke dalam variabel nama
    nama = document.getElementById("txtnama").value;
    console.log(nama);
    email = document.getElementById("txtemail").value;
    console.log(email);
    // ubah konten <p id = " nama"p>
    document.getElementById("nama").innerHTML= nama;
    nama= document.getElementById ("txtnama").value;
    console.log(nama);
    // simpam ke dalam array dataa 
    data.push(nama);
    console.log(data);
}

