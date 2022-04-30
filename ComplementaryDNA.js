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

function DNAStrand(dna) {
return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
})
}

DNAStrand.pairs = {
A: 'T',
T: 'A',
C: 'G',
G: 'C',
}

var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
return dna.split('').map(function(v){ return pairs[v] }).join('');
}