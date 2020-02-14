function checkAB(num) {
    // you can only write your code here!
    var jarak = [0,0]

    for(var i = 0 ; i <= num.length; i++){
        if(num[i] === 'a'){
            jarak[0] = i
        }else if(num[i] === 'b'){
            jarak[1] = i
        }
    }

    if(jarak[0] - jarak[1] === 4 || jarak[1] - jarak[0] === 4){
        return true
    }else{
        return false
    }

  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false