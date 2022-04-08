function XO(str) {
    arr = str.split('')
    xs = []
    os = []
    for(let i=0; i<arr.length;i++){
      if(arr[i].toLowerCase() === 'x') xs.push(arr[i])
      else if(arr[i].toLowerCase() === 'o') os.push(arr[i])
    }
    if(xs.length == os.length) return true
    else return false
  
  }

const XO = str => {
str = str.toLowerCase().split('');
return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}