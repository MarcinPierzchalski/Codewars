function persistence(num) {
    let sum = num
    let arr = []
    let counter = 0
    let reducer = (a,b) => parseInt(a) * parseInt(b)
    while(sum >9){
      arr = sum.toString().split('')
      sum = arr.reduce(reducer)
      counter ++
      console.log(arr)
    }
    console.log(counter)
    return counter
  }


function persistence(num) {
var times = 0;

num = num.toString();

while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
}

return times;
}

const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }


function persistence(num) {
for (var i = 0; num > 9; i++) {
    num = num.toString().split('').reduce((t, c) => c * t);
}
return i;
}