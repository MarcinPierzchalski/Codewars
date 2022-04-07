function duplicateEncode(word){
    let result = []
    for(let i=0;i<word.length;i++){
        console.log(word[i])
        result[i] = '('
        for(let j=i+1;j<word.length;j++){
            if(word[i].toLowerCase() === word[j].toLowerCase()) result[i] = ')'}
        if(i == word.length-1){
            console.log(i)
            for(let k=0; k<i;k++){
                if(word[i].toLowerCase() === word[k].toLowerCase()) result[i] = ')'           
        }             
      }
    }
    let iter = word.length-1
    // console.log(iter)
    for(let i=iter; i>=0; i--){
        if(i==0) break
        for(let j=0; j<i; j++){
        
            if(word[i].toLowerCase() === word[j].toLowerCase()) { result[i] = ')'; console.log('changed')}
        }
    }  
    return result.join('')
  }
  console.log(duplicateEncode("CodeWarrior"))



function duplicateEncode(word){
return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}


function duplicateEncode(word){
   
    var unique='';
    word = word.toLowerCase();
    for(var i=0; i<word.length; i++){
        if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
            unique += '(';
        }
        else{
            unique += ')';
        }
    }
    return unique;

}
