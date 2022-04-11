function validParentheses(parens) {
    let left = 0
    let right = 0
    for(let i=0;i<parens.length;i++){
      if(parens[i] === '(') left++
      else if(parens[i] === ')') right++
    
      if(right > left) return false
      }
    if(parens.length%2 !==0) return false
    
    console.log(left)
    console.log(right)
    
    for(let j=0;j<parens.length;j++){
      if(parens[j] === '(') --right
      else if (parens[j] === ')') --left
    }
    console.log(left)
    console.log(right)
    if(right ===0 && left === 0) return true
    else return false
    // your code here ..
  }

function validParentheses(parens){
var n = 0;
for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
}

return n == 0;
}