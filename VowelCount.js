function getCount(str) {
    var vowelsCount = 0;
    for(i=0;i<=str.length-1;i++){
      if(['a', 'e', 'i', 'o', 'u'].indexOf(str[i].toLowerCase()) !== -1) vowelsCount++
    }
    
    // enter your majic here
    
    return vowelsCount;
  }

  function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }


   function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }