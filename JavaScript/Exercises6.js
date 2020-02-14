function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = []
    var hasil = {}

    for(var i = 0; i < angka; i++){
        if((angka % i) == 0){
            temp.push(String(i).length + String(angka / i).length)
        }
    }

    for(var i = 0; i < temp.length; i++){
        if(hasil[temp[i]] === undefined){
            hasil[temp[i]] = 0
        }
        hasil[temp[i]] += 1
    }

    var temp2 = Object.keys(hasil)

    if(angka == 1){
        temp2.push("2")
    }

    return temp2[0]
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2