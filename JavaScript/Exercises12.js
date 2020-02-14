function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!

    var shoping = [
        {
            'product' : 'Sepatu Stacattu',
            'shoppers' : [],
            'leftOver' : 10,
            'totalProfit' : 0
        },
        {
            'product' : 'Baju Zoro',
            'shoppers' : [],
            'leftOver' : 2,
            'totalProfit' : 0
        },
        {
            'product' : 'Sweater Uniklooh',
            'shoppers' : [],
            'leftOver' : 1,
            'totalProfit' : 0
        }
    ]

    // console.log(shoping)

    for(var i = 0; i < shoping.length; i++){
        for(var j = 0; j < shoppers.length; j++){
            
            // console.log(`harga : ${shoping[i]['totalProfit']} , total Profit : ${shoping[i]['totalProfit'] * shoppers[j]['amount']}`)

            if(shoping[i]['product'] == shoppers[j]['product']){
                if(shoping[i]['leftOver'] >= shoppers[j]['amount']){
                    shoping[i]['shoppers'].push(shoppers[j]['name'])
                    shoping[i]['leftOver'] -= shoppers[j]['amount']
                    shoping[i]['totalProfit'] += listBarang[i][1] * shoppers[j]['amount']
                }
            }
        }
    }

    // console.log(shoping)
    if(shoppers == 0){
        return []
    }
    return shoping
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]