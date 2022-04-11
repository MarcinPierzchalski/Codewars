function sortObjectByKeys(o) {
    return Object. keys(o). sort(). reduce((r, k) => (r[k] = o[k], r), {});
    }
    
    
    
    function anagrams(word, words) {
      let arr = []
      let result={};
      for(let i=0;i<word.length;i++){
        let char = word.charAt(i)
        if(result[char]) result[char]++
        else result[char]=1
      }
    //   console.log(result)
      for(let j=0;j<words.length;j++){
        let compare={}
        for(let k=0; k<words[j].length;k++){
          let char2 = words[j].charAt(k)
          if(compare[char2]) compare[char2]++
          else compare[char2]=1     
        }
        if(JSON.stringify(sortObjectByKeys(result)) === JSON.stringify(sortObjectByKeys(compare))){
          arr.push(words[j]) }
          
    //       console.log(words[j])
        //objects are the same
        
    //     console.log(sortObjectByKeys(compare))
      }
      return(arr)
    }


String.prototype.sort = function() {
    return this.split("").sort().join("");
    };
    
    function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
    }

function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word == v.split('').sort().join('');});
    }