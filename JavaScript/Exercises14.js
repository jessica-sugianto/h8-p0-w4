function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    if(arrPenumpang.length == 0){
        return []
    }else{
        var hasil = []
        var isi
        var selisih

        for(var i = 0; i < arrPenumpang.length; i++){
            isi = {
                'penumpang' : '',
                'naikDari' : '',
                'tujuan' : '',
                'bayar' : 2000
            }
            selisih = []
            isi['penumpang'] = arrPenumpang[i][0]
            isi['naikDari'] = arrPenumpang[i][1]
            isi['tujuan'] = arrPenumpang[i][2]
            for(var j = 0; j < rute.length; j++){
                if(isi['naikDari'] == rute[j] || isi['tujuan'] == rute[j]){
                    selisih.push(j+1)
                }
            }
            isi['bayar'] *= (selisih[1] - selisih[0])
            hasil.push(isi)
        }
        return hasil
    }
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]