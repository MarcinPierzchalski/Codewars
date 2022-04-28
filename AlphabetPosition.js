
  function alphabetPosition(text) {
  
    arr = text.split('')
    console.log(arr)
    arrnum = []
    for(i=0;i<arr.length;i++){
      if(arr[i].toLowerCase().match(/[a-z]/i)){
      num = arr[i].toLowerCase().charCodeAt(0) - 96
      if(num>0) arrnum.push(num)
    }}
    return(arrnum.join(' '))
  //   return text;
  }