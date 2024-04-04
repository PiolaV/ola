 //function hitung(operator) {
    //     var num1 = parseFloat(document.getElementById("num1").value);
    //     var num2 = parseFloat(document.getElementById("num2").value);
    //     var hasil;
    //     switch (operator) {
    //         case '+':
    //             hasil = num1 + num2;
    //             break;
    //         case '-':
    //             hasil = num1 - num2;
    //             break;
    //         case '*':
    //             hasil = num1 * num2;
    //             break;
    //         case '/':
    //             hasil = num2 !== 0 ? num1 / num2 : 'Tidak dapat melakukan pembagian dengan 0';
    //             break;
    //         default:
    //             hasil = 'Operasi tidak valid';
    //     }
    //     document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
    // }
    let angka1 = document.getElementById('angka1');
    let angka2 = document.getElementById('angka2');
    let hasil = document.getElementById('hasil');
    
    function hitung(operator) {
        if (operator == "tambah") {
            hasil.innerHTML = Number(angka1.value) + Number(angka2.value);
        } else if (operator == "kurang") {
            hasil.innerHTML = Number(angka1.value) - Number(angka2.value);
        } else if (operator == "kali") {
            hasil.innerHTML = Number(angka1.value) * Number(angka2.value);
        } else if (operator == "bagi") {
            hasil.innerHTML = Number(angka1.value) / Number(angka2.value);
        }
    }