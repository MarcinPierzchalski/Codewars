function spinWords(string){
    let arr = string.split(' ')
    let result = []
    for(let i=0;i<arr.length;i++){
      console.log(arr[i].length)
      if(arr[i].length < 5) result.push(arr[i])
      else { result.push(arr[i].split('').reverse().join(''))}
    }
    console.log(result)
    return String(result.join(' '))
    
  
  }


function spinWords(words){
return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
}).join(' ');
}