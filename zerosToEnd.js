function moveZeros(arr) {
    let toAdd = []
    
    for(let i=0;i<arr.length;i++){
      if(arr[i]===Number(0)){
        toAdd.push(arr[i])
        arr.splice(i,1)    
        --i
      }
    }
    return(arr.concat(toAdd))
  
  }


console.log(moveZeros([
    {},  [],  0,  3,  null, {},   '0',
    '8', '0', 3,  [], '5',  '9',  '9',
    '3', '5', 1,  0,  null, 3,    '8',
    {},  1,   {}, [], '7',  true, [],
    '4'
  ]
  )
)

var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }

var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
}


