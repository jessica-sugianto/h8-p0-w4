function cariModus(arr) {
    // you can only write your code here!
    var temp = {}
    for( var i = 0; i < arr.length; i++){
        if(temp[arr[i]] === undefined){
            temp[arr[i]] = 0
        }
            temp[arr[i]] += 1
    }

    var temp2 = []
    for(var keys in temp){
        temp2.push([keys, temp[keys]])
    }

    var banding = temp2[0][1]
    temp['modus'] = temp2[0][0]
    for(var i = 1; i < temp2.length; i++){
        if(banding < temp2[i][1]){
            banding = temp2[i][1]
            temp['modus'] = temp2[i][0]
            
        }
    }

    temp['jumlahSama'] = {}

    for( var i = 0; i < temp2.length; i++){
        if(temp['jumlahSama'][temp2[i][1]] === undefined){
            temp['jumlahSama'][temp2[i][1]] = 0
        }
        temp['jumlahSama'][temp2[i][1]] += 1
    }

    var temp3 = []
    for(var keys in temp['jumlahSama']){
        temp3.push([keys, temp['jumlahSama'][keys]])
    }

    var besar = temp3[0]
    for(var i = 0; i < temp3.length; i++){
        if(besar[0] < temp3[i][0]){
            besar = temp3[i]
        }
    }

    if(besar[1] > 2){
        temp['modus'] = -1
    }else if(temp3.length == 1){
        temp['modus'] = -1
    }

    return temp['modus']
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1