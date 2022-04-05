function duplicateCount(text){
    //...
    let result = 0
    let letters = new Set()
    for(let i=0; i<=text.length-1;i++){
        // console.log(text[i])
      for(let j=i+1;j<=text.length-1;j++){
        // console.log(text[j])
        if(text[i].toLowerCase() == text[j].toLowerCase() && letters.has(text[i].toLowerCase()) !== true){ letters.add(text[i].toLowerCase()); result= result + 1}
      }
    }
    console.log(result)
    console.log(letters)
  }

  duplicateCount("Indivisibility")


  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }