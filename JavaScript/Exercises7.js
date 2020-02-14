function urutkanAbjad(str) {
    // you can only write your code here!]
    var banding = []
    for(var i = 0; i < str.length; i++){
        banding.push(str[i].charCodeAt())
    }

    for(var i = 0; i < banding.length; i++){
        for(var j = i + 1; j < banding.length; j++){
            var temp
            if(banding[i] > banding[j]){
                temp = banding[j]
                banding[j] = banding[i]
                banding[i] = temp
            }
        }
    }

    var hasil = ''
    for(var i = 0; i < banding.length; i++){
        hasil += String.fromCharCode(banding[i])
    }

    return hasil
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'