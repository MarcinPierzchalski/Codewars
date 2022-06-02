function zeros(n) {
  // let res = BigInt(1)
  // for(let i =BigInt(1); i<=n; i++){
  //   res *= i
  // }
  // let arr = String(res).split('')
  // let count =0

  // too slow

  // while(arr[arr.length-1] == 0){
  //   arr.pop()
  //   count++
  // }
  // console.log(res)
  
// return count

var result = 0;
while (n = Math.floor(n / 5)) result += n;
return result;
}

console.log(zeros(100000))