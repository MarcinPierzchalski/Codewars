function generateHashtag (str) {
    let arr = str.split('')
    console.log(arr)
    for(let i=0; i<arr.length;i++){
        if((arr[i] == '') || (arr[i] == ' ')) return false
    }
  }



//   console.log(generateHashtag(""))
//   console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))