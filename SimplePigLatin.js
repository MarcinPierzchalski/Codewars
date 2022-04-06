function pigIt(str){
  
    let newStr = (str.split(' ').map(x => x.substring(1)+x[0]+'ay').join(' '))
    let newArr = newStr.split(' ')

    for(let i=0;i<newArr.length;i++){
        if(newArr[i] === '!ay'){
            newArr[i] = '!'
        }
        else if(newArr[i] === '?ay') newArr[i] = '?'
    }
    return(newArr.join(' '))
}

function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
  }