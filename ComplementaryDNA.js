function DNAStrand(dna){
    arr = dna.split('')
    result = []
    for(let i=0;i<arr.length;i++){
      if(arr[i] == 'A') result.push('T')
      else if (arr[i] === 'T') result.push('A')
      else if (arr[i] === 'G') result.push('C')
      else if (arr[i] === 'C') result.push('G')
  
    }
    return result.join('')
    
  
  }