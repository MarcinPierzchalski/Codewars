function digital_root(n) {
    // ...
    let sum = n
    let arr = []
    let reducer = (a,b) => parseInt(a) + parseInt(b)
    while(sum >9){
      arr = sum.toString().split('')
      sum = arr.reduce(reducer)
  //     console.log(arr)
    }
    return sum
  }

function digital_root(n) {
return (n - 1) % 9 + 1;
}