function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


function generateHashtag (str) {
    let arr = str.trim().split(' ')
    let res = []
    console.log(arr)
    if(arr.length == 0) return false
    else if(arr[0] === "") return false
    for(let i=0; i<arr.length;i++){
        if((arr[i] !== "") || (arr[i] !== ' ')) {
            res.push(capitalizeFirstLetter(arr[i]))}
        else return false
        

    }
    let count = 0
    for(let i=0; i<res.join('').split('').length;i++) count++
    if(count > 139) return false
    res.unshift('#')
    return res.join('')
  }



  function generateHashtag (str) {
    return str.length > 140 || str === '' ? false :
      '#' + str.split(' ').map(capitalize).join('');
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function generateHashtag (str) {
    if(!str || str.length < 1) return false;
    
    var r = '#' + str.split(' ').map(function(el) {
      return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
    }).join('');
    return r.length > 140?false:r;
 }
