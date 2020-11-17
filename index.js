const back = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
  };

  const obj = JSON.parse(JSON.stringify(back))
 
//получить название товара
 function getNameProduct(objName) {
    let nameProduct = ''
    
    let objStocks = Object.values(objName)
         .filter(item => item.displayedName)
    for(let product of objStocks) {
      let product1 = Object.values(product)
      .filter(item => {
        let product2 = Object.values(item)
          .filter(item => {
          nameProduct = item
        })
      })
    }
    
   return  nameProduct
  }

//получить массив номеров магазинов
function getArrayNum(obj) { 
  const arrNum = [];
  let arrKeysValScore;

    let objStocks = Object.values(obj)
    .filter(item => item.stocks)
    for(let item of objStocks) { //перебор объекта до номера магазина
     let objStocks1 = Object.values(item)
     .filter(item => {
       let objStocks2 = Object.values(item)
       .filter(item => {
         let objNumberScore = Object.entries(item)
         .filter(item => {
           return item[1] > 0
         })
         arrKeysValScore = objNumberScore
       })
     })
    }

    for(let i = 0; i < arrKeysValScore.length; i++) {
      arrNum.push(arrKeysValScore[i][0])
    }

  return arrNum
}

//максимальное количество товара в регионе
function getMaxProduct(obj) {
  let arrKeysValScore;
  
    let objStocks = Object.values(obj)
    .filter(item => item.stocks)
    
    for(let item of objStocks) { //перебор объекта до номера магазина
     let objStocks1 = Object.values(item)
     .filter(item => {
       let objStocks2 = Object.values(item)
       .filter(item => {
         let objNumberScore = Object.entries(item)
         .filter(item => {
           return item
         })
         arrKeysValScore = objNumberScore //список магазинов
       })
     })
    }
  
  let arrSort = arrKeysValScore.sort((a,b) => +b[1] - +a[1])
  const maxProduct = arrSort[0] //максиамльное кол-во товаров
  return maxProduct
}

console.log(getArrayNum(obj))
console.log(getNameProduct(obj))
console.log(getMaxProduct(obj))