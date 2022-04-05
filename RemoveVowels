function disemvowel(str) {
    let arr = str.split('')
  //   console.log(arr)
    for(let i=0;i<=arr.length;i++){
      if(String(arr[i]).toLowerCase() == 'u'  || String(arr[i]).toLowerCase() == 'a' || String(arr[i]).toLowerCase() == 'e' || String(arr[i]).toLowerCase() == 'i' || String(arr[i]).toLowerCase() == 'o'){
          // console.log(arr[i])
          arr.splice(i,1)
          i--
        }
    }
        console.log(String(arr.join('')));
  }

disemvowel("WhAt are you, a commounist?")

function disemvowel(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }

  const disemvowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
      let char = str.charAt(i);
      if (vowels.indexOf(char) == -1) {
        newStr += char;
      }
    }
      return newStr;
      
    
  };