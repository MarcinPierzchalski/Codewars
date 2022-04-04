// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2){
    //your code here
    console.log(array1)
    console.log(array2)
    if((array1 == null) || (array2 == null)) return false
    else if((array1.length == 0) || (array2 == null)) return true
    else if((array1.length == 0) || (array2.length == 0)) return false
    let arrayTemp = array2
    for(let i=0;i<=array1.length-1;i++){
      for(let j=0;j<=array2.length-1; j++){
        if(array1[i]*array1[i] == array2[j]) {array2.splice(j,1); break}
      }
      
    } 
    if(array2.length == 0) return true
    else return false
  }

  function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }

  function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
  }
