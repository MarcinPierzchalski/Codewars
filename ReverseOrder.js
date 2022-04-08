function descendingOrder(n){
    let arr = n.toString().split('').sort((a, b) => b - a).join('')
    console.log(Number(arr))
    return Number(arr)
    //...
  }

descendingOrder(12345)

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }