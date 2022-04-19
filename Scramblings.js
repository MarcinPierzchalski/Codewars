function scramble(str1, str2) {
    let array1 = str1.split('')
    let array2 = str2.split('')
    console.log(array2)
    if (array1.length === array2.length && array1.every(function(value, index) { return value === array2[index]})) return true
    else return false
  }

  scramble('rkqodlw','world')