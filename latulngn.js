let nilai=prompt("masukan nilai");
if(nilai >= 0 && nilai < 60) {
    console.log(`Nilai anda ${nilai}, keterangan D`)
}
else if(nilai >= 60 && nilai < 70){
    console.log(`Nilai anda ${nilai}, keterangan C`)
}
else if(nilai >= 70 && nilai < 80){
    console.log(`Nilai anda ${nilai}, keterangan B`)
}
else if(nilai >= 80 && nilai <= 100){
    console.log(`Nilai anda ${nilai}, keterangan A`)
}
else{
    console.log("nilai yang di masukan salah")
}
console.log("anda telah keluar")