function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


function generateHashtag (str) {
    let arr = str.split(' ')
    let res = []
    console.log(arr)
    for(let i=0; i<arr.length;i++){
        if((arr[i] !== '') && (arr[i] !== ' ')){
            res.push(capitalizeFirstLetter(arr[i]))}

    }
    res.unshift('#')
    return res.join('')
  }



//   console.log(generateHashtag(""))
//   console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))