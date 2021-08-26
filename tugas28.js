function panggilTugasDuaDElapan(){
    var alfa = "abcdefghijklmnopqrstuvwxyz"
    var tes = alfa.substring(18,19);
    console.log("Huruf : ",tes);
    return alfa.search(tes);
}
console.log("Urutan ke ",panggilTugasDuaDElapan()) 